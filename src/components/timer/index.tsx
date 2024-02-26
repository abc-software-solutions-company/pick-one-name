import {FC, useEffect, useState} from 'react';
import {useTimer} from '@/common/hooks/use-timer';

const Timer: FC = () => {
  const {timer, setTimer} = useTimer();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTimer(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setTimer]);

  return <>{mounted && <p className="text-sm font-semibold text-gray-900">{timer} UTC</p>}</>;
};
export default Timer;
