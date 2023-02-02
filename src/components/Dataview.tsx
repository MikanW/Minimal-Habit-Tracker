
// import MyCalendar from './MyCalendar';
// import MyHeatMap from './MyHeatMap';
// import MyCard from './MyCard';
import { useState } from 'react';
import { MyDatePicker } from './MyDatePicker';
import { Pages } from './types';

const DataView = (props:{ type: string}) => {
    //let viewValue = "";

    let viewer = decideViewer(props.type);

    // const setValue = (pickerValue: any) => {
    //     viewValue = pickerValue;
    //     console.log("lalala viewValue changed", viewValue);
    // };

    const [value, setValue] = useState("");

    console.log(value);

    return (
        <div>
            <MyDatePicker 
                type={props.type}
                setValue={setValue}
            />
            {viewer}
        </div>
    );
};

const decideViewer = ( type: string ) => {
    if ( type === Pages.dataview.dailyView ) {
        //return <MyCard />;
    }

    if ( type === Pages.dataview.weeklyView ) {
        return <p>weekly view</p>;
    }

    if ( type === Pages.dataview.monthlyView ) {
        //return <MyCalendar />;
    }

    if ( type === Pages.dataview.yearlyView ) {
        //return <MyHeatMap />;
    }
}

export default DataView;