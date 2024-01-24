export interface IWheelNumbers {
  value: number;
  style: {
    transform: string;
    top: number | string;
  };
}
export interface IRandomNumbers {
  value: number;
  index: number;
}

export interface IrotateWheelProps {
  rotate?: number;
  endDeg?: number;
}
