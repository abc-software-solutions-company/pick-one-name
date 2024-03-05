import {useState} from 'react';
import {useSession} from 'next-auth/react';

import ColorPicker from '@/core-ui/color-picker';
import ColorPickerIcon from '@/core-ui/color-picker-icon';
import Icon from '@/core-ui/icon';
import InputPon from '@/core-ui/input-pon';
import Switcher from '@/core-ui/switcher';

import {useGlobal} from '@/common/hooks/use-global';
import {useSetting} from '@/common/hooks/use-setting';
import useUpload from '@/common/hooks/use-upload';

import {ENUM_PLAN} from '@/common/constants';
import {DEFAULT_SETTING} from '@/common/constants/setting.constant';

const CustomSettingForm = () => {
  const {upload} = useUpload();
  const {data: session} = useSession();
  const {configConfirmBox} = useGlobal();
  const {text, button, background, isTextFrame, updateLocal, setBackground, setButton, setText, toggleTextFrame} =
    useSetting();

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

  const handleClickWhenNotPremium = () => {
    if (!session?.user?.id || session?.user.plan === ENUM_PLAN.FREE) {
      configConfirmBox({
        show: true,
        message: 'Tính năng này chỉ áp dụng với tài khoản premium!!!'
      });
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
            className="rounded-lg border p-2 text-sm focus:border-2 focus:border-black md:py-3 md:px-2 md:text-lg"
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
        <Switcher checked={isTextFrame} onChange={handleToggleTextFrame} />
        <label className="text-sm font-bold text-black lg:text-xl xl:text-xl">Khung chữ</label>
      </div>

      <div className="relative flex flex-col gap-1 xl:gap-2">
        <label className="text-sm font-bold text-black lg:text-xl xl:text-xl">Nút</label>
        <div className="flex items-center gap-1 xl:gap-2">
          <InputPon
            className="rounded-lg border border-gray-300 bg-neutral-50 p-2 text-sm focus:border-2 focus:border-black md:py-3 md:px-2 md:text-lg"
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
          <label
            htmlFor="file-upload"
            className="flex w-full flex-grow cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-2 text-sm text-blue-600 md:py-3 lg:text-xl"
            onClick={handleClickWhenNotPremium}
          >
            <input
              hidden
              accept="image/*"
              id="file-upload"
              type={!session?.user?.id || session?.user.plan === ENUM_PLAN.FREE ? 'hidden' : 'file'}
              onChange={e => handleUpFile(e.currentTarget?.files?.[0])}
            />
            Tải ảnh lên
            <Icon name="ico-upload" />
          </label>
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
