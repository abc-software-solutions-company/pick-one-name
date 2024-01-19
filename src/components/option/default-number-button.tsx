import React from 'react';

interface DefaultNumberButtonProps {
  onClick: () => void;
  labelLimit: string;
}

const DefaultNumberButton: React.FC<DefaultNumberButtonProps> = ({onClick, labelLimit}) => {
  return (
    <button
      className="flex h-[44px] grow items-center justify-center rounded-lg border border-slate-300
      px-5 py-3 text-black"
      onClick={onClick}
    >
      {labelLimit}
    </button>
  );
};

export default DefaultNumberButton;
