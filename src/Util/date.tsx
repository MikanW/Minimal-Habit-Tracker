import { floatButtonPrefixCls } from "antd/es/float-button/FloatButton";

export const isSameDay = (date1:Date, date2:Date) => {
  return ( date1.setHours(0, 0, 0, 0) == date2.setHours(0, 0, 0, 0) );
}