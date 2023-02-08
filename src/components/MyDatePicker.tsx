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
