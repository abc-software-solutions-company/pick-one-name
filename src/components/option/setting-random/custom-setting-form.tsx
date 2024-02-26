import {HexColorPicker} from 'react-colorful';

import {DEFAULT_WHEEL_BG_COLOR, DEFAULT_WHEEL_TEXT_COLOR} from '@/components/common/constant/wheelColor.constant';

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
    hexBgColor,
    setHexBgColor,
    textColor,
    setTextColor,
    hexTextColor,
    setHexTextColor
  } = useSetting();

  const handleBgColorBoxClick = () => {
    setIsShowBgColorBox(!isShowBgColorBox);
  };

  const handleTextColorBoxClick = () => {
    setisShowTextColorBox(!isShowTextColorBox);
  };

  const handleChangeBgColor = (newColor: string) => {
    setBgColor(newColor);
    setHexBgColor(newColor);
  };

  const handleChangeTextColor = (newColor: string) => {
    setTextColor(newColor);
    setHexTextColor(newColor);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHexBgColor(e.target.value);
    setBgColor(e.target.value);
    setHexBgColor(e.target.value);
    setTextColor(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <InputSetting label="Tiêu đề" value={title} iconEnd="pen-line" onChange={e => setTitle(e.target.value)} />
      <InputSetting label="Giao diện" placeholder="Mặc định" iconEnd="angle-down" />
      <div className="relative">
        <InputSetting
          label="Màu nền"
          placeholder={DEFAULT_WHEEL_BG_COLOR}
          iconEnd="pen-line"
          value={hexBgColor}
          onClick={handleBgColorBoxClick}
          onChange={handleInputChange}
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
          placeholder={DEFAULT_WHEEL_TEXT_COLOR}
          iconEnd="pen-line"
          value={hexTextColor}
          onClick={handleTextColorBoxClick}
          onChange={handleInputChange}
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
