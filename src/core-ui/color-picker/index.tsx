import React, {FC, RefObject, useEffect, useRef, useState} from 'react';
import {HexColorPicker} from 'react-colorful';

interface IColorPicker {
  color: string;
  isShow: boolean;
  onChange: (color: string) => void;
}

const ColorPicker: FC<IColorPicker> = ({color, isShow, onChange}) => {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    setShowPicker(() => isShow);
  }, [isShow]);

  const handleClickOutside = (event: any) => {
    if (pickerRef.current && !pickerRef.current?.contains(event.target)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {showPicker && (
        <div ref={pickerRef}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
