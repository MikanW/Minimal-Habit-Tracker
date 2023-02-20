import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

const HabitDataTab: React.FC = () => (
  <Tabs
    defaultActiveKey="2"
    tabPosition='left'
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);

      return {
        label: (
          <span>
            <Icon />
            Tab {id}
          </span>
        ),
        key: id,
        children: `Tab ${id}`,
      };
    })}
  />
);

export default HabitDataTab;