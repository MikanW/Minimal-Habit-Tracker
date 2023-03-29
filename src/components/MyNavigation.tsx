import { AppstoreAddOutlined, CarryOutOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: 'Today',
    key: 'Today',
    icon: <CarryOutOutlined />,
  },
  {
    label: 'Habit',
    key: 'Habit',
    icon: <AppstoreAddOutlined />,
  },
  {
    label: 'Dataview',
    key: 'Dataview',
    icon: <BarChartOutlined />,
    children: [
      {
        type: 'group',
        label: 'Data',
        children: [
          {
            label: 'DailyView',
            key: 'day',
          },
          {
            label: 'WeeklyView',
            key: 'week',
          },
          {
            label: 'MonthlyView',
            key: 'month',
          },
          {
            label: 'YearlyView',
            key: 'year',
          },
        ],
      },
      {
        type: 'group',
        label: 'Statistics',
        children: [
          {
            label: 'Coming soon',
            key: 'setting:3',
          },
        ],
      },
    ],
  },
  {
    label: 'Settings',
    key: 'Settings',
    icon: <SettingOutlined />,
  },

];

const MyNavigation = (props: {setPageView : any}) => {
  const [current, setCurrent] = useState('mail');
  
  const onClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
    props.setPageView(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MyNavigation;