import React from 'react';

interface DefaultNumberButtonProps {
  onClick: () => void;
  labelLimit: string;
}

const DefaultNumberButton: React.FC<DefaultNumberButtonProps> = ({onClick, labelLimit}) => {
  return (
    <button
      className="flex grow items-center justify-center rounded-lg border border-slate-300 p-2 px-5 py-3
      text-xs text-black lg:text-base"
      onClick={onClick}
    >
      {labelLimit}
    </button>
  );
};

export default DefaultNumberButton;
