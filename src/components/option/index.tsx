import React, {useState} from 'react';

import DefaultNumberButton from './default-number-button';
import HideButton from './hide-button';
import InputNumber from './input';
import SettingButton from './setting-button';

interface IRandomOption {
  min: number;
  max: number;
}
const RandomOption = ({min: minNumber, max: maxNumber}: IRandomOption) => {
  const [min, setMin] = useState(minNumber);
  const [max, setMax] = useState(maxNumber);

  return (
    <div
      className="flex h-auto w-[552px] flex-col 
      gap-8 rounded-2xl  border border-solid border-black px-8
       py-10"
    >
      <div className=" text-center text-3xl font-medium">Chọn số ngẫu nhiên</div>
      <div className="flex flex-col gap-2">
        <InputNumber label="Tối thiểu" value={min} onChange={setMin} />
        <InputNumber label="Tối đa (max 999.999.999)" value={max} onChange={setMax} />
      </div>

      <div className="flex w-full flex-wrap gap-3">
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(100);
          }}
          labelLimit="1-100"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(1000);
          }}
          labelLimit="1-1.000"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(50);
            setMax(100);
          }}
          labelLimit="50-100"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(50);
            setMax(1000);
          }}
          labelLimit="50-1.000"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(10000);
          }}
          labelLimit="1-10.000"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(1);
            setMax(100000);
          }}
          labelLimit="1-100.000"
        />
        <DefaultNumberButton
          onClick={() => {
            setMin(500000);
            setMax(1000000);
          }}
          labelLimit="500.000-1.000.000"
        />
      </div>
      <div className="flex justify-center gap-2">
        <SettingButton />
        <HideButton />
      </div>
    </div>
  );
};

export default RandomOption;
