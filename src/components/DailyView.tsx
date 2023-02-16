import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const DailyView: React.FC = () => {
  return (
    <div className='timeLine'>
      <Timeline>
        <Timeline.Item
          color= '#00CCFF'
          dot = {<SmileOutlined />}
        >
          lalala
        </Timeline.Item>
        <Timeline.Item
          color= '#00CCFF'
          dot = {<SmileOutlined />}
        >
          lalala
        </Timeline.Item>
        <Timeline.Item
          color= '#00CCFF'
          dot = {<SmileOutlined />}
        >
          lalala
        </Timeline.Item>
        <Timeline.Item
          color= '#00CCFF'
          dot = {<SmileOutlined />}
        >
          lalala
        </Timeline.Item>
      </Timeline>
      <p>Daily</p>
    </div>
    
  );
}


export default DailyView;