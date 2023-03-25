import { Card, Popover} from 'antd';
import { EllipsisOutlined, BarChartOutlined } from '@ant-design/icons';
import HabitForm from './../HabitForm';
import CheckPointForm from './../CheckPointForm';
import { useState } from 'react';
import HabitDrawer from './../Habit/HabitDrawer';
import HabitDataTab from './../Habit/HabitDataTab';
import { DataTab } from './../Habit/habitDataUtil';


export interface habitInfo {
  habit: any;
  className: String;
}

export const CardView = (props: habitInfo) => {
  const { habit, className } = props;

  return (
    <>
      <Card
        hoverable
        style={{
          width: 300,
        }}
        actions={[
          <CheckPointForm habitId={String(habit.uuid)} isNewCheckPoint={true} />,

          (<Popover content={"show data of habit"} trigger="hover">
            <BarChartOutlined key="dataview" />
          </Popover>),

          <HabitForm isNewHabit={false} habitInfo={habit} />,

          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div className='cardBody'>
          <p>{habit.name}</p>
        </div>
      </Card>

    </>

  )

};

export default CardView;