import {useSetting} from '@/common/hooks/use-setting';

const HideButton = () => {
  const {setVisible} = useSetting();
  return (
    <button
      className="flex items-center justify-center gap-2 py-2 px-3 text-sm
      text-black md:px-8 md:py-4 lg:text-xl xl:text-xl"
      onClick={() => setVisible(false)}
    >
      Ẩn
    </button>
  );
};
export default HideButton;
