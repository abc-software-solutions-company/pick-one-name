import cls from 'classnames';
import React, {useState} from 'react';

import DefaultNumberButton from './default-number-button';
import HideButton from './hide-button';
import InputNumber from './input';
import SettingButton from './setting-button';

interface IRandomOption {
  className: string;
  min: number;
  max: number;
}
const RandomOption = ({min: minNumber, max: maxNumber, className}: IRandomOption) => {
  const [min, setMin] = useState(minNumber);
  const [max, setMax] = useState(maxNumber);

  return (
    <div
      className={cls(
        className,
        'flex flex-col gap-4 rounded-2xl border border-gray-300 px-2 py-5 lg:gap-4 lg:py-10 lg:px-8 3xl:gap-8'
      )}
    >
      <div className="flex flex-col gap-2 lg:gap-4 3xl:gap-8">
        <p className="text-center text-2xl font-bold 3xl:text-3xl">Chọn số ngẫu nhiên</p>
        <InputNumber label="Tối thiểu" value={min} onChange={setMin} />
        <InputNumber label="Tối đa (max 9.999.999)" value={max} onChange={setMax} />
      </div>

      <div className="flex h-full flex-wrap content-start items-start gap-2 self-stretch lg:gap-3">
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(99);
          }}
          labelLimit="1-99"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(999);
          }}
          labelLimit="1-999"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(100);
            setMax(999);
          }}
          labelLimit="100-999"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(9999);
          }}
          labelLimit="1-9999"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(99999);
          }}
          labelLimit="1-99.999"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(999999);
          }}
          labelLimit="1-999.999"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(9999999);
          }}
          labelLimit="1-9.999.999"
        />
      </div>
      <div className="flex items-center gap-2 self-stretch align-bottom lg:gap-4">
        <SettingButton />
        <HideButton />
      </div>
    </div>
  );
};

export default RandomOption;
