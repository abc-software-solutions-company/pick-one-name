import {transaltion} from './translation';

const linksList = [
  {
    href: '/',
    title: 'Random number'
  },
  {
    href: '/wheel',
    title: 'Random wheel'
  }
];

const findUsList = [
  {
    icon: 'ico-discord',
    href: ''
  },
  {
    icon: 'ico-facebook-fill',
    href: transaltion.footer.facebook
  },
  {
    icon: 'ico-linkedin-fill',
    href: transaltion.footer.linkedin
  }
];

const infoList = [
  {
    title: 'About',
    href: 'about'
  },
  {
    title: 'Privacy policy',
    href: 'privacy-policy'
  },
  {
    title: 'Term of service',
    href: 'term-of-service'
  },
  {
    title: 'Contact',
    href: 'contact'
  }
];
export {findUsList, infoList, linksList};
