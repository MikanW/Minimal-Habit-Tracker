
// import MyHeatMap from './MyHeatMap';
import { useState } from 'react';
import CalendarView from './CalenderView';
import HeatMapView from './HeatMapView';
import { MyDatePicker } from './MyDatePicker';
import { Pages } from './types';
import DailyView from './DailyView';

export const DataView = (props: { type: string }) => {
  const [date, setDate] = useState(new Date);
  let viewValue = "";

  let viewer = decideViewer(props.type, date);

  const setValue = (pickerValue: any): void => {
    viewValue = pickerValue;
    setDate(pickerValue.toDate());
  };

  return (
    <div className='dataview'>
      <MyDatePicker
        pickerType={props.type}
        onValueChange={setValue}
      />
      {viewer}
    </div>
  );
};

const decideViewer = (type: string, date:Date) => {
  if (type === Pages.dataview.dailyView) {
    if (date == undefined ){
      return <DailyView date={new Date()}/>
    }
    else
    {
      return <DailyView date={date}/>
    }

  }

  if (type === Pages.dataview.weeklyView) {
    return <p>weekly view</p>;
  }

  if (type === Pages.dataview.monthlyView) {
    return <CalendarView />
  }

  if (type === Pages.dataview.yearlyView) {
    return <HeatMapView />
  }
}

export default DataView;