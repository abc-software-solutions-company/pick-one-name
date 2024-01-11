import Icon from '@/core-ui/icon';

const HideButton = () => {
  return (
    <button
      className=" flex h-[56px] w-[118px] items-center justify-center gap-[8px] rounded-lg
          border-[3px] border-black bg-white text-xl font-bold text-black shadow-[5px_4px_0_0_#000]"
    >
      <Icon name="ico-square" />
      Ẩn
    </button>
  );
};
export default HideButton;
