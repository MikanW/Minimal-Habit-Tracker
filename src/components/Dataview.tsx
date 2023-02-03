
// import MyHeatMap from './MyHeatMap';
import { useState } from 'react';
import CalendarView from './CalenderView';
import CardView from './CardView';
import HeatMapView from './HeatMapView';
import { MyDatePicker } from './MyDatePicker';
import { Pages } from './types';

export const DataView = (props: { type: string }) => {
  const [date, setDate] = useState("");
  let viewValue = "";

  let viewer = decideViewer(props.type);

  const setValue = (pickerValue: any): void => {
    viewValue = pickerValue;
    console.log("lalala viewValue changed", viewValue);
    setDate(pickerValue);
  };

  return (
    <div>
      <MyDatePicker
        pickerType={props.type}
        onValueChange={setValue}
      />
      {viewer}
      <p>Current Date: {String(date)}</p>
    </div>
  );
};

const decideViewer = (type: string) => {
  if (type === Pages.dataview.dailyView) {
    return <CardView />
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