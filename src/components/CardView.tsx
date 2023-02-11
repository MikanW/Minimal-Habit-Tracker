import { Card, Popover } from 'antd';
import { PlusCircleOutlined, EllipsisOutlined, BarChartOutlined } from '@ant-design/icons';
import HabitForm from './HabitForm';



export interface habitInfo {
  habit: any;
  className: String;
}

export const CardView = (props: habitInfo) => {
  const { habit, className } = props;
  console.log(habit)
  return (
    <Card
      hoverable
      title={habit.name}
      style={{
        width: 300,
        backgroundColor: habit.MainColor
      }}
      actions={[
        (<Popover content={"add new data into habit"} trigger="hover">
          <PlusCircleOutlined key="addCheckPoint" />
        </Popover>),

        (<Popover content={"show data of habit"} trigger="hover">
          <BarChartOutlined key="dataview" />
        </Popover>),

        <HabitForm isNewHabit={false} habitInfo={habit} />,

        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <p>{habit.slogan}</p>
    </Card>
  )

};

export default CardView;