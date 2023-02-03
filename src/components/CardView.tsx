import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const CardView = () => (
  <div className='CardView'>
    <Card 
      hoverable
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
      actions={[
        <SettingOutlined key="setting" onClick={()=>console.log("lalala")}/>,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);
export default CardView;