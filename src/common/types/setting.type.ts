export type TDefaultSetting = {
  isTextFrame?: boolean;
  isNumberFrame?: boolean;
  background: TAttrSetting;
  text: TAttrSetting;
  button: TAttrSetting;
};

export type TAttrSetting = {
  value: string;
  color: string;
};
