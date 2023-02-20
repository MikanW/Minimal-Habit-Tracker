import { Drawer } from 'antd';

interface DarwerInfo {
  open: boolean;
  isPositionBottom: boolean;
  onClose: any;
  habit: any;
  contents: any;
}



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
    </Drawer>
  );
};


export default HabitDrawer;

