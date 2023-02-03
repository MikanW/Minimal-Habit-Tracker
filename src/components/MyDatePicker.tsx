import React, { useCallback, useEffect, useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd';

interface MyPickerProps {
  pickerType: any;
  onValueChange: Function;
}


export const MyDatePicker = (props: MyPickerProps) => {
  const { pickerType, onValueChange } = props;
  
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    onValueChange(date);
    return;
  };

  return (
    <Space>
      <DatePicker picker={pickerType} onChange={onChange} />
    </Space>
    );
};

// //声明一个类型,值的类型、名称要和父组件传过来的一致
// interface stateA {
//   clickstate: boolean,
//   changestate: Function,
// }
// //这里需要接收父组件传来的参数
// const Child: React.FC<stateA> = (props) => {
//   //接收 值和方法 这里clickstate是boolean类型,changestate是父组件传下来的方法
//   const [clickstate, changestate] = props;
//   //子组件拿到父组件传来的方法changestate,进行修改值
//   const ChangeState = useCallback(() => {
//     changestate(!clickstate) //boolean取反
//   }, [changestate, clickstate])
//   return (
//     <div onClick={ChangeState}>
//       让父组件的 IfShow 值进行改变
//     </div>
//   )
// }
// export default Child
