import React from 'react';

interface DefaultNumberButtonProps {
  onClick: () => void;
  labelLimit: string;
}

const DefaultNumberButton: React.FC<DefaultNumberButtonProps> = ({onClick, labelLimit}) => {
  return (
    <button
      className="flex h-[44px] w-[78px] items-center justify-center gap-10 rounded-lg  border-[2px] 
      border-black bg-white text-black shadow-[5px_4px_0_0_#000]"
      onClick={onClick}
    >
      {labelLimit}
    </button>
  );
};

export default DefaultNumberButton;
