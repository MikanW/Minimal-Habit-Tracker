import { UnorderedListOutlined, BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
import  AllCheckPoints  from './AllCheckPoints'

interface HabitInfo {
  habitId: string;
  mainColor: string;
}


export const DataTab = ( props: HabitInfo ) => {

  const {habitId, mainColor} = props;

  const habitDataTabs = [
    {
      icon: <UnorderedListOutlined />,
      label: 'All CheckPoints',
      children: <AllCheckPoints habitId={habitId} mainColor={mainColor}/>
    },
  
    {
      icon: <BarChartOutlined />,
      label: 'Bar Chart',
      children: <p>Bar Chart</p>
    },
    {
      icon: <LineChartOutlined />,
      label: 'Line Chart',
      children: <p>Bar Chart</p>
    },
    
  ]

  return habitDataTabs;
}

