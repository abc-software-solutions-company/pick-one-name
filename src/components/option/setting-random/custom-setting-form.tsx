import {useState} from 'react';

import ColorPicker from '@/core-ui/color-picker';

import {useSetting} from '@/common/hooks/use-setting';

import {DEFAULT_SETTING} from '@/common/constants/setting.constant';

import InputSetting from './input';

const CustomSettingForm = () => {
  const {bgColor, setBgColor, title, setTitle, textColor, setTextColor} = useSetting();

  const [isShowBgColorBox, setIsShowBgColorBox] = useState(false);
  const [isShowTextColorBox, setisShowTextColorBox] = useState(false);

  const handleBgColorBoxClick = () => {
    setIsShowBgColorBox(!isShowBgColorBox);
    setisShowTextColorBox(false);
  };

  const handleTextColorBoxClick = () => {
    setisShowTextColorBox(() => !isShowTextColorBox);
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
    <>
      <InputSetting label="Tiêu đề" value={title} iconEnd="pen-line" onChange={e => setTitle(e.target.value)} />
      <InputSetting label="Giao diện" placeholder="Mặc định" iconEnd="angle-down" />
      <div className="relative">
        <InputSetting
          label="Màu nền"
          placeholder={DEFAULT_SETTING.DEFAULT_WHEEL_BG_COLOR}
          iconEnd="pen-line"
          value={bgColor}
          onClick={handleBgColorBoxClick}
          onChange={handleInputBgChange}
        />
        {isShowBgColorBox && (
          <div className="absolute top-0 right-0 z-[100] mt-25">
            <ColorPicker color={bgColor} isShow={!!isShowBgColorBox} onChange={handleChangeBgColor} />
          </div>
        )}
      </div>
      <div className="relative">
        <InputSetting
          label="Màu chữ"
          placeholder={DEFAULT_SETTING.DEFAULT_WHEEL_TEXT_COLOR}
          iconEnd="pen-line"
          value={textColor}
          onClick={handleTextColorBoxClick}
          onChange={handleInputTextChange}
        />
        {isShowTextColorBox && (
          <div className="absolute top-0 right-0 z-[100] mt-25">
            <ColorPicker color={textColor} isShow={!!isShowTextColorBox} onChange={handleChangeTextColor} />
          </div>
        )}
      </div>
    </>
  );
};
export default CustomSettingForm;
