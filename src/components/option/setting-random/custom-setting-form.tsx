import {useState} from 'react';

import ColorPicker from '@/core-ui/color-picker';

import {useSetting} from '@/common/hooks/use-setting';

import {DEFAULT_SETTING} from '@/common/constants/setting.constant';

import InputSetting from './input';

const CustomSettingForm = () => {
  const {bgColor, title, textColor, setBgColor, setTitle, updateLocal, setTextColor} = useSetting();

  const [isShowBgColorPicker, setIsShowBgColorPicker] = useState(false);
  const [isShowTextColorPicker, setisShowTextColorPicker] = useState(false);

  const toggleBgColorPicker = () => {
    setIsShowBgColorPicker(!isShowBgColorPicker);
    setisShowTextColorPicker(false);
  };

  const toggleTextColorPicker = () => {
    setisShowTextColorPicker(() => !isShowTextColorPicker);
    setIsShowBgColorPicker(false);
  };

  const handleChangeBgColor = (newColor: string) => {
    setBgColor(newColor);
    updateLocal();
  };

  const handleChangeTextColor = (newColor: string) => {
    setTextColor(newColor);
    updateLocal();
  };

  const handleInputBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
    updateLocal();
  };

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
    updateLocal();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    updateLocal();
  };

  return (
    <>
      <InputSetting label="Tiêu đề" value={title} iconEnd="pen-line" onChange={handleTitleChange} />
      {/* <InputSetting label="Giao diện" placeholder="Mặc định" iconEnd="angle-down" /> */}
      <div className="relative">
        <InputSetting
          label="Màu chữ"
          placeholder={DEFAULT_SETTING.TEXT_COLOR}
          iconEnd="pen-line"
          value={textColor}
          onClick={toggleTextColorPicker}
          onChange={handleInputTextChange}
        />
        {isShowTextColorPicker && (
          <div className="absolute top-0 right-0 z-[100] mt-25">
            <ColorPicker color={textColor} isShow={!!isShowTextColorPicker} onChange={handleChangeTextColor} />
          </div>
        )}
      </div>
      <div className="relative">
        <InputSetting
          label="Màu nền"
          placeholder={DEFAULT_SETTING.BG_COLOR}
          iconEnd="pen-line"
          value={bgColor}
          onClick={toggleBgColorPicker}
          onChange={handleInputBgChange}
        />
        {isShowBgColorPicker && (
          <div className="absolute top-0 right-0 z-[100] mt-25">
            <ColorPicker color={bgColor} isShow={!!isShowBgColorPicker} onChange={handleChangeBgColor} />
          </div>
        )}
      </div>
    </>
  );
};
export default CustomSettingForm;
