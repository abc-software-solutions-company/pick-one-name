import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import React from 'react';

import LogoWhite from '@/components/icons/logo-white';
import {ROUTES} from '@/configs/routes.config';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  const {t} = useTranslation('common');

  return (
    <footer className={`footer ${styles.footer}`}>
      <div className="container">
        <div className="service">
          <div className="logo">
            <Link href={ROUTES.HOME}>
              <a>
                <LogoWhite />
              </a>
            </Link>
          </div>
          <div className="nav-wrap">
            {/* <nav>
              <ul>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Safety Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav> */}
            {/* <nav>
              <ul>
                <li>
                  <Link href={ROUTES.BLOG}>
                    <a>
                      <span>{t('footer-text-blog')}</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.CONTACT}>
                    <a>
                      <span>{t('footer-text-contact-us')}</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
        <div className="copyright">
          <p>
            <span>{t('copyright')}</span>
            &nbsp;
            <span>{t('copyright-all-right')}</span>
          </p>
          {/* <div className="policy mt-3 lg:mt-0">
            <a href="#">Cookies Settings</a>
            <span className="px-[12px]">/</span>
            <a href="#">Privacy Policy</a>
            <span className="px-[12px]">/</span>
            <a href="#">Complaint</a>
            <span className="px-[12px]">/</span>
            <a href="#">Whistleblowing Policy</a>
            <span className="px-[12px]">/</span>
            <a href="#">Index égalité homme-femme de 70/100</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
