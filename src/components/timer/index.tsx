import {FC, useEffect, useState} from 'react';

import {useSetting} from '@/common/hooks/use-setting';
import {useTimer} from '@/common/hooks/use-timer';

const Timer: FC = () => {
  const {timer, setTimer} = useTimer();
  const [mounted, setMounted] = useState(false);
  const {textColor} = useSetting();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTimer(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setTimer]);

  return (
    <>
      {mounted && (
        <p className="bg-neutral-50 text-sm font-semibold text-gray-900" style={{color: textColor}}>
          {timer} UTC
        </p>
      )}
    </>
  );
};
export default Timer;
