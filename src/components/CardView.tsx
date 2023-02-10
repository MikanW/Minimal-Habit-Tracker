import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export interface habitInfo {
  habit: any;
  className: String;
}

export const CardView = (props: habitInfo) => {
  const {habit, className } = props;
  console.log(habit)
  return (
    <Card
      hoverable
      title={habit.name}
      extra={<a href="#">More</a>}
      style={{
        width: 300
      }}
      actions={[
        <SettingOutlined key="setting" onClick={() => console.log("lalala")} />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <p>{habit.slogan}</p>
    </Card>
  )

};

export default CardView;