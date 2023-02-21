import { Drawer } from 'antd';
import HabitDataTab from './HabitDataTab';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';


interface DarwerInfo {
  open: boolean;
  isPositionBottom: boolean;
  onClose: any;
  habit: any;
  contents: any;
}

const dummyTabs = [
  {
    icon: <AppleOutlined />,
    label: 'Apple',
    children: <p>Apple</p>
  },

  {
    icon: <AndroidOutlined />,
    label: 'AndroidOutlined',
    children: <p>AndroidOutlined</p>
  },
]

export const HabitDrawer = ( porps: DarwerInfo ) => {
  const {open, onClose, habit, contents, isPositionBottom} = porps;

  return (
    <Drawer
      title = {habit.name + "✨" + habit.slogan}
      onClose={onClose} 
      open={open}
      placement={ isPositionBottom? 'bottom' : 'right' }
      height='85%'
    >
      {contents}
      <HabitDataTab tabs={dummyTabs}/>
    </Drawer>
  );
};


export default HabitDrawer;

