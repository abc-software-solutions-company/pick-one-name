import React, {useState} from 'react';

import DefaultNumberButton from './default-number-button';
import HideButton from './hide-button';
import InputNumber from './input';
import SettingButton from './setting-button';

interface IRanOption {
  min: number;
  max: number;
}
const RanOption = ({min: minNumber, max: maxNumber}: IRanOption) => {
  const [min, setMin] = useState(minNumber);
  const [max, setMax] = useState(maxNumber);

  return (
    <div
      className="flex w-[500px] flex-col 
      gap-4 rounded-2xl  border-[3px] border-solid border-black px-6 
       py-12 "
    >
      <div className=" text-center text-xl text-[32px] font-bold">Random Number</div>
      <div className="mt-9 flex justify-center gap-2">
        <SettingButton />
        <HideButton />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <InputNumber label="Tối thiểu" value={min} onChange={setMin} />
        <InputNumber label="Tối đa" value={max} onChange={setMax} />
      </div>

      <div className="flex flex-wrap gap-2">
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
          labelLimit="1-1000"
        />
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
          labelLimit="1-1000"
        />
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
          labelLimit="1-1000"
        />
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
          labelLimit="1-1000"
        />
      </div>
    </div>
  );
};

export default RanOption;
