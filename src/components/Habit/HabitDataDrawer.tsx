import { Drawer } from 'antd';
import AllCheckPoints from '../AllCheckPoints';

interface DarwerInfo {
  open: boolean;
  onClose: any;
  habit: any;
  contents: any;
}



export const HabitDataDrawer = ( porps: DarwerInfo ) => {
  const {open, onClose, habit, contents} = porps;

  return (
    <Drawer
      title = {habit.name + "✨" + habit.slogan}
      onClose={onClose} 
      open={open}
      placement="bottom" 
      height='80%'
    >
      {contents}
    </Drawer>
  );
};


export default HabitDataDrawer;

