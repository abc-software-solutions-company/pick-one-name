import {HexColorPicker} from 'react-colorful';

import {DEFAULT_COLOR} from '@/components/common/constant/wheelColor.constant';

import {useSetting} from '@/common/hooks/use-setting';

import InputSetting from './input';

const CustomSettingForm = () => {
  const {
    bgColor,
    setBgColor,
    isShowBgColorBox,
    setIsShowBgColorBox,
    isShowTextColorBox,
    setisShowTextColorBox,
    title,
    setTitle,
    textColor,
    setTextColor
  } = useSetting();

  const handleBgColorBoxClick = () => {
    setIsShowBgColorBox(!isShowBgColorBox);
    setisShowTextColorBox(false);
  };

  const handleTextColorBoxClick = () => {
    setisShowTextColorBox(!isShowTextColorBox);
    setIsShowBgColorBox(false);
  };

  const handleChangeBgColor = (newColor: string) => {
    setBgColor(newColor);
  };

  const handleChangeTextColor = (newColor: string) => {
    setTextColor(newColor);
  };

  const handleInputBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  };

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <InputSetting label="Tiêu đề" value={title} iconEnd="pen-line" onChange={e => setTitle(e.target.value)} />
      <InputSetting label="Giao diện" placeholder="Mặc định" iconEnd="angle-down" disable={true} />
      <div className="relative">
        <InputSetting
          label="Màu nền"
          placeholder={DEFAULT_COLOR.DEFAULT_WHEEL_BG_COLOR}
          iconEnd="pen-line"
          value={bgColor}
          onClick={handleBgColorBoxClick}
          onChange={handleInputBgChange}
        />
        {isShowBgColorBox && (
          <div className="absolute top-0 right-0 z-[100] mt-25">
            <HexColorPicker color={bgColor} onChange={handleChangeBgColor} />
          </div>
        )}
      </div>
      <div className="relative">
        <InputSetting
          label="Màu chữ"
          placeholder={DEFAULT_COLOR.DEFAULT_WHEEL_TEXT_COLOR}
          iconEnd="pen-line"
          value={textColor}
          onClick={handleTextColorBoxClick}
          onChange={handleInputTextChange}
        />
        {isShowTextColorBox && (
          <div className="absolute top-0 right-0 z-[100] mt-25">
            <HexColorPicker color={textColor} onChange={handleChangeTextColor} />
          </div>
        )}
      </div>
    </div>
  );
};
export default CustomSettingForm;
