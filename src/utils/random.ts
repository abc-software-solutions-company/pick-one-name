export function rangeInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const ranges = [
  {min: 1, max: 99, label: '1-99'},
  {min: 1, max: 999, label: '1-999'},
  {min: 100, max: 999, label: '100-999'},
  {min: 1, max: 9999, label: '1-9999'},
  {min: 1, max: 99999, label: '1-99.999'},
  {min: 1, max: 999999, label: '1-999.999'},
  {min: 1, max: 9999999, label: '1-9.999.999'}
];
