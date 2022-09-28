import Script from 'next/script';
import {useEffect} from 'react';

const ServiceWorker = () => {
  useEffect(() => {}, []);

  return (
    <>
      <button id="install">Install</button>
      <Script strategy="afterInteractive" id="svcworker">
        {`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js').then(
              function (registration) {
                console.log('Service Worker registration successful with scope: ', registration.scope);
              },
              function (err) {
                console.log('Service Worker registration failed: ', err);
              }
            );
          }
        `}
      </Script>
    </>
  );
};

export default ServiceWorker;
