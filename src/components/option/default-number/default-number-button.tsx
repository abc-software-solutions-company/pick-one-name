import React from 'react';

import {useRandomNumber} from '@/common/hooks/use-random-number';

interface DefaultNumberButtonProps {
  onClick: () => void;
  labelLimit: string;
}

const DefaultNumberButton: React.FC<DefaultNumberButtonProps> = ({onClick, labelLimit}) => {
  const {isAnimationStart} = useRandomNumber();
  return (
    <button
      className="flex grow items-center justify-center rounded-lg border border-slate-300 p-2 px-5 py-3
      text-xs text-black hover:bg-neutral-100 lg:text-base"
      disabled={isAnimationStart}
      onClick={onClick}
    >
      {labelLimit}
    </button>
  );
};

export default DefaultNumberButton;
