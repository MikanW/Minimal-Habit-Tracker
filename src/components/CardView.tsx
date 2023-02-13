import { Card, Popover } from 'antd';
import { PlusCircleOutlined, EllipsisOutlined, BarChartOutlined } from '@ant-design/icons';
import HabitForm from './HabitForm';
import CheckPointForm from './CheckPointForm';



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
        <CheckPointForm />,

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