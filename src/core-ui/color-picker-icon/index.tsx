import React, {FC} from 'react';

interface IColorPickerIcon {
  color?: string;
  onClick?: () => void;
}

const ColorPickerIcon: FC<IColorPickerIcon> = ({color, onClick}) => {
  return (
    <div
      className="h-8 w-8 rounded border-2"
      style={{
        backgroundColor: color
      }}
      onClick={onClick}
    ></div>
  );
};

export default ColorPickerIcon;
