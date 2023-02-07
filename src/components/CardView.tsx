import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


export const CardView = (habit: any) => {

  return (
    <Card
      hoverable
      title={habit.habit}
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
      actions={[
        <SettingOutlined key="setting" onClick={() => console.log("lalala")} />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <p>{habit.habit}</p>
    </Card>
  )

};

export default CardView;