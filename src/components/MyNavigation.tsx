import { AppstoreAddOutlined, CarryOutOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: '今天',
    key: 'Today',
    icon: <CarryOutOutlined />,
  },
  {
    label: '习惯',
    key: 'Habit',
    icon: <AppstoreAddOutlined />,
  },
  {
    label: '数据汇总',
    key: 'Dataview',
    icon: <BarChartOutlined />,
    children: [
      {
        type: 'group',
        label: '汇总',
        children: [
          {
            label: '每日视图',
            key: 'day',
          },
          {
            label: '周视图',
            key: 'week',
          },
          {
            label: '月视图',
            key: 'month',
          },
          {
            label: '年视图',
            key: 'year',
          },
        ],
      },
      {
        type: 'group',
        label: '分析',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: '设置',
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