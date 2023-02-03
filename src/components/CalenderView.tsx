import { Calendar } from 'antd';

const CalendarView = () => {
  const onPanelChange = (value:any, mode:any) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return <Calendar onPanelChange={onPanelChange} />;
};
export default CalendarView;