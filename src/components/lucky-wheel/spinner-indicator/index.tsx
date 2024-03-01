import {FC, SVGAttributes} from 'react';

import styles from './style.module.scss';

const SpinnerIndicator: FC<SVGAttributes<Record<string, unknown>>> = () => {
  return (
    <div className={styles['wheel-decide__indicator']}>
      <svg
        width="46"
        height="72"
        viewBox="0 0 46 72"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.2418 33.9761C35.7418 51.4761 23.2418 71.4761 23.2418 71.4761C23.2418 71.4761 10.7418 51.4761 3.24182 33.9761C-4.25818 16.4761 8.24182 1.47607 23.2418 1.47607C38.2418 1.47607 50.7418 16.4761 43.2418 33.9761Z"
          fill="white"
          stroke="#CBD5E1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="25" r="10" fill="#498FE1" />
      </svg>
    </div>
  );
};

export default SpinnerIndicator;
