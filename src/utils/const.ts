import {FIND_US} from '@/common/constants';

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
    icon: 'ico-facebook-fill',
    href: FIND_US.FACEBOOK_URL
  },
  {
    icon: 'ico-linkedin-fill',
    href: FIND_US.LINKEDIN_URL
  }
];

const infoList = [
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
