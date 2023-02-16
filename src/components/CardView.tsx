import { Card, Popover, Drawer } from 'antd';
import { EllipsisOutlined, BarChartOutlined } from '@ant-design/icons';
import HabitForm from './HabitForm';
import CheckPointForm from './CheckPointForm';
import AllCheckPoints from './AllCheckPoints';
import { useState } from 'react';



export interface habitInfo {
  habit: any;
  className: String;
}

export const CardView = (props: habitInfo) => {
  const { habit, className } = props;

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        hoverable
        title={habit.name}
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
        <div className='cardBody' onClick={showDrawer}>
          <p>{habit.slogan}</p>
          <p>Summary占位</p>
        </div>

      </Card>
      <Drawer 
        title="All CheckPoints" 
        placement="bottom" 
        height='80%'
        onClose={onClose} 
        open={open}
        >
          <AllCheckPoints habitId={habit.uuid} mainColor={habit.mainColor}/>
      </Drawer>


    </>

  )

};

export default CardView;