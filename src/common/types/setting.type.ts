export type TDefaultSetting = {
  isTextFrame?: boolean;
  background: TAttrSetting;
  text: TAttrSetting;
  button: TAttrSetting;
};

export type TAttrSetting = {
  value: string;
  color: string;
};
