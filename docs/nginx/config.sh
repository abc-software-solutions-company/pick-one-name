#!/bin/bash
sudo apt update
sudo apt install nginx -y
sudo ufw allow 'Nginx HTTP'
sudo rm -r -f /etc/nginx/sites-enabled/default
sudo touch /etc/nginx/sites-enabled/default
sudo chmod -R 777 /etc/nginx/sites-enabled/default
cat << EOF > /etc/nginx/sites-enabled/default
# Cache zone
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

upstream nextjs_upstream {
  server 127.0.0.1:3000;
  # We could add additional servers here for load-balancing
}

server {
  listen 80 default_server;

  server_name _;

  server_tokens off;

  gzip on;
  gzip_proxied any;
  gzip_comp_level 4;
  gzip_types text/css application/javascript image/svg+xml;

  proxy_http_version 1.1;
  proxy_set_header Upgrade \$http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host \$host;
  proxy_cache_bypass \$http_upgrade;

  # BUILT ASSETS (E.G. JS BUNDLES)
  # Browser cache - max cache headers from Next.js as build id in url
  # Server cache - valid forever (cleared after cache "inactive" period)
  location /_next/static {
    proxy_cache STATIC;
    proxy_pass http://nextjs_upstream;

    # For testing cache - remove before deploying to production
    add_header X-Cache-Status \$upstream_cache_status;
  }

  # STATIC ASSETS (E.G. IMAGES)
  # Browser cache - "no-cache" headers from Next.js as no build id in url
  # Server cache - refresh regularly in case of changes
  location /static {
    proxy_cache STATIC;
    proxy_ignore_headers Cache-Control;
    proxy_cache_valid 60m;
    proxy_pass http://nextjs_upstream;

    # For testing cache - remove before deploying to production
    add_header X-Cache-Status \$upstream_cache_status;
  }

  location / {
    proxy_pass http://nextjs_upstream;
  }
}
EOF
sudo chmod -R 700 /etc/nginx/sites-enabled/default
sudo systemctl stop nginx
sudo systemctl start nginx
