import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import cls from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import * as React from 'react';

import Icon from '@/core-ui/icon';
import {linksList} from '@/utils/const';

import Header from '..';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = '50%';

export default function DrawerNavbar(props: Props) {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const pathName = useRouter().pathname;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="flex h-full flex-col items-start gap-10 p-5">
      <button
        onClick={handleDrawerToggle}
        className="inline-flex h-8 w-8 items-center justify-center gap-2 rounded-lg p-1"
      >
        <Icon name="ico-x" />
      </button>
      {linksList.map(link => (
        <Link href={link.href} key={link.href}>
          <span
            onClick={handleDrawerToggle}
            className={cls('block py-3 text-base font-semibold leading-6 md:text-lg', {
              'text-blue-700': link.href === pathName
            })}
          >
            {link.title}
          </span>
        </Link>
      ))}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        className="relative top-0 w-full border-b border-gray-300 bg-neutral-50 px-5 py-2 text-dark-950 shadow-none lg:px-[50px] 3xl:px-[100px]"
      >
        <div className="flex items-center">
          <IconButton aria-label="open drawer" className="p-1 lg:hidden" edge="start" onClick={handleDrawerToggle}>
            <Icon name="ico-menu" />
          </IconButton>
          <Header />
        </div>
      </AppBar>
      <nav>
        <Drawer
          className="lg:hidden"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
