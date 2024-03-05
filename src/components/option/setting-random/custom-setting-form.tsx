import {useState} from 'react';

import ColorPicker from '@/core-ui/color-picker';
import ColorPickerIcon from '@/core-ui/color-picker-icon';
import Icon from '@/core-ui/icon';
import InputPon from '@/core-ui/input-pon';
import Switcher from '@/core-ui/switcher';

import {useSetting} from '@/common/hooks/use-setting';
import useUpload from '@/common/hooks/use-upload';

import {DEFAULT_SETTING} from '@/common/constants/setting.constant';

const CustomSettingForm = () => {
  const {text, button, background, isTextFrame, updateLocal, setBackground, setButton, setText, toggleTextFrame} =
    useSetting();
  const {upload} = useUpload();

  const [showColorPicker, setShowColorPicker] = useState({
    background: false,
    text: false,
    button: false
  });

  const toggleColorPicker = (colorType: 'background' | 'text' | 'button') => {
    setShowColorPicker(prev => ({...prev, [colorType]: !prev[colorType]}));
  };

  const handleChangeBgColor = (newColor: string) => {
    setBackground('color', newColor);
    updateLocal();
  };

  const handleChangeTextColor = (newColor: string) => {
    setText('color', newColor);
    updateLocal();
  };

  const handleChangeButtonColor = (newColor: string) => {
    setButton('color', newColor);
    updateLocal();
  };

  const handleInputButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButton('value', e.target.value);
    updateLocal();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText('value', e.target.value);
    updateLocal();
  };

  const handleUpFile = async (file: File | null | undefined) => {
    if (file === null) {
      setBackground('value', '');
      updateLocal();
      return;
    }

    const resp = await upload(file as File, 1).then(item => {
      return item;
    });
    if (resp?.url) {
      setBackground('value', resp?.url);
      updateLocal();
    }
  };

  const handleToggleTextFrame = () => {
    toggleTextFrame(!isTextFrame);
    updateLocal();
  };

  return (
    <>
      {/* <InputSetting label="Giao diện" placeholder="Mặc định" iconEnd="angle-down" /> */}
      <div className="relative flex flex-col gap-1 xl:gap-2">
        <label className="text-sm font-bold text-black lg:text-xl xl:text-xl">Tiêu đề</label>
        <div className="flex items-center gap-1 xl:gap-2">
          <InputPon
            className="focus:border-2 focus:border-black"
            value={text.value}
            onChange={handleTitleChange}
            placeholder="Vòng quay may mắn"
          />
          <ColorPickerIcon onClick={() => toggleColorPicker('text')} color={text.color} />
          {showColorPicker.text && (
            <div className="absolute top-0 right-0 z-20 mt-20">
              <ColorPicker color={text.color} isShow={!!showColorPicker.text} onChange={handleChangeTextColor} />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Switcher onChange={handleToggleTextFrame} />
        <label className="text-sm font-bold text-black lg:text-xl xl:text-xl">Khung chữ</label>
      </div>

      <div className="relative flex flex-col gap-1 xl:gap-2">
        <label className="text-sm font-bold text-black lg:text-xl xl:text-xl">Nút</label>
        <div className="flex items-center gap-1 xl:gap-2">
          <InputPon
            className="focus:border-2 focus:border-black"
            value={button.value}
            placeholder={DEFAULT_SETTING.BUTTON_VALUE}
            onChange={handleInputButtonChange}
          />
          <ColorPickerIcon onClick={() => toggleColorPicker('button')} color={button.color} />
          {showColorPicker.button && (
            <div className="absolute top-0 right-0 z-20 mt-20">
              <ColorPicker color={button.color} isShow={!!showColorPicker.button} onChange={handleChangeButtonColor} />
            </div>
          )}
        </div>
      </div>

      <div className="relative flex flex-col gap-1 xl:gap-2">
        <label className="text-sm font-bold text-black lg:text-xl xl:text-xl">Nền</label>
        <div className="flex items-center gap-1 xl:gap-2">
          <div className="flex flex-grow rounded border border-slate-300">
            <input
              hidden
              accept="image/*"
              id="file-upload"
              type="file"
              onChange={e => {
                handleUpFile(e.currentTarget?.files?.[0]);
              }}
            />
            <label
              htmlFor="file-upload"
              className="flex h-9 w-full cursor-pointer items-center justify-center gap-4 rounded-lg px-6 py-2 text-sm text-blue-600 lg:text-lg"
            >
              Tải ảnh lên
              <Icon name="ico-upload" />
            </label>
          </div>
          <ColorPickerIcon onClick={() => toggleColorPicker('background')} color={background.color} />
          {showColorPicker.background && (
            <div className="absolute top-0 right-0 z-20 mt-20">
              <ColorPicker
                color={background.color}
                isShow={!!showColorPicker.background}
                onChange={handleChangeBgColor}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CustomSettingForm;
