import {useState} from 'react';

import ColorPicker from '@/core-ui/color-picker';
import Icon from '@/core-ui/icon';

import {useSetting} from '@/common/hooks/use-setting';
import useUpload from '@/common/hooks/use-upload';

import {DEFAULT_SETTING} from '@/common/constants/setting.constant';

import InputSetting from './input';

const CustomSettingForm = () => {
  const {text, button, background, updateLocal, setBackground, setButton, setText} = useSetting();
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

  const handleInputBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackground('color', e.target.value);
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

  return (
    <>
      {/* <InputSetting label="Giao diện" placeholder="Mặc định" iconEnd="angle-down" /> */}
      <div className="relative">
        <InputSetting
          label="Tiêu đề"
          value={text.value}
          color={text.color}
          onChange={handleTitleChange}
          onClick={() => toggleColorPicker('text')}
        />
        {showColorPicker.text && (
          <div className="absolute top-0 right-0 z-20 mt-20 xl:mt-25">
            <ColorPicker color={text.color} isShow={!!showColorPicker.text} onChange={handleChangeTextColor} />
          </div>
        )}
      </div>
      <div className="relative">
        <InputSetting
          label="Nút"
          color={button.color}
          value={button.value}
          placeholder={DEFAULT_SETTING.BUTTON_VALUE}
          onChange={handleInputButtonChange}
          onClick={() => toggleColorPicker('button')}
        />
        {showColorPicker.button && (
          <div className="absolute top-0 right-0 z-20 mt-20 xl:mt-25">
            <ColorPicker color={button.color} isShow={!!showColorPicker.button} onChange={handleChangeButtonColor} />
          </div>
        )}
      </div>
      <div className="flex items-end justify-start gap-2">
        <div className="relative flex-grow">
          <InputSetting
            label="Nền"
            value={background.value}
            color={background.color}
            placeholder={'Mặc định'}
            onClick={() => toggleColorPicker('background')}
            onChange={handleInputBgChange}
          />
          {showColorPicker.background && (
            <div className="absolute top-0 right-0 z-20 mt-20 xl:mt-25">
              <ColorPicker
                color={background.color}
                isShow={!!showColorPicker.background}
                onChange={handleChangeBgColor}
              />
            </div>
          )}
        </div>
        <div className="flex items-end">
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
            className="flex h-9 w-full cursor-pointer items-center justify-center gap-4 rounded-lg px-6 py-3 text-sm text-blue-600 md:h-12 lg:h-[50px] lg:text-xl xl:text-xl"
          >
            <Icon name="ico-upload" />
          </label>
        </div>
      </div>
    </>
  );
};
export default CustomSettingForm;
