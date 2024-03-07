import {FACEBOOK_URL, LINKEDIN_URL} from '@/common/constants';

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
    href: FACEBOOK_URL
  },
  {
    icon: 'ico-linkedin-fill',
    href: LINKEDIN_URL
  }
];

const infoList = [
  // {
  //   title: 'Term of service',
  //   href: 'term-of-service'
  // },
  // {
  //   title: 'Contact',
  //   href: 'contact'
  // },
  {
    title: 'Nâng cấp tài khoản',
    href: '/plan'
  }
];
export {findUsList, infoList, linksList};
