import {FC, SVGAttributes} from 'react';

import styles from './style.module.scss';

const SpinnerIndicator: FC<SVGAttributes<Record<string, unknown>>> = () => {
  return (
    <div className={styles['wheel-decide__indicator']}>
      <svg xmlns="http://www.w3.org/2000/svg" width="78" height="52" viewBox="0 0 78 52" fill="none">
        <path
          d="M36.2844 3.57043C55.2837 12.0284 76.9972 26.1251 76.9972 26.1251C76.9972 26.1251 55.2837 40.2218 36.2844 48.6798C17.2851 57.1378 1 43.0412 1 26.1251C1 9.2091 17.2851 -4.88759 36.2844 3.57043Z"
          fill="url(#paint0_linear_8335_3018)"
          stroke="#CBD5E1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36.2838 25.8379C36.2838 19.6096 31.4231 14.5605 25.4271 14.5605C19.431 14.5605 14.5703 19.6096 14.5703 25.8379C14.5703 32.0662 19.431 37.1152 25.4271 37.1152C31.4231 37.1152 36.2838 32.0662 36.2838 25.8379Z"
          fill="#DC2626"
        />
        <defs>
          <linearGradient
            id="paint0_linear_8335_3018"
            x1="18.2239"
            y1="12.4117"
            x2="49.8835"
            y2="60.3736"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FC9512" />
            <stop offset="0.68" stopColor="#FED319" />
            <stop offset="1" stopColor="#FFEB1C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SpinnerIndicator;
