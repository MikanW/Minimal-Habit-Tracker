import React from 'react';
import { Tabs } from 'antd';

interface TabInfo {
  tabs: any;
}



const HabitDataTab = ( props: TabInfo ) => {
  const { tabs } = props;

  return (
  <Tabs
    defaultActiveKey={tabs.length}
    tabPosition={'left'}

    items={
      tabs.map(
        (tab: { icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; children: any; }) => {
          return{
            label: (<span className='tabLabel'>
              {tab.icon}
              <p>{tab.label}</p>
            </span>),
            key: tab.label,
            children: tab.children
          }
        }
      )
    }

  />) 
};

export default HabitDataTab;
