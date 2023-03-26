import React, { useContext, useEffect, useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { db } from '../firebase';
import { UserIdContext } from '../Data/context';

interface DailyViewInfo {
  date: Date;
}

//const DailyView = (props: DailyViewInfo) => {
const DailyView = () => {
  //const { date } = props;


  const [habits, setHabits] = useState([]);
  const [checkPoints, setCheckPoints] = useState([]);

  const userId = useContext(UserIdContext);

  useEffect(() => {

    db.collection('users').doc(userId).collection("habits")
      .onSnapshot((snapshot) => {
        setHabits(snapshot.docs.map(doc => doc.data()));

      });

    let allCheckPoints = db.collectionGroup('checkPoints');
    allCheckPoints.get().then((querySnapshot) => {
      setCheckPoints(querySnapshot.docs.map(doc => doc.data()));
    });


  }, []);

  return (
    <div className='timeLine'>
      <Timeline>
        <Timeline.Item
          color='#00CCFF'
          dot={<SmileOutlined />}
        >
          開発中
        </Timeline.Item>
        <Timeline.Item
          color='#00CCFF'
          dot={<SmileOutlined />}
        >
          開発中
        </Timeline.Item>
        <Timeline.Item
          color='#00CCFF'
          dot={<SmileOutlined />}
        >
          開発中
        </Timeline.Item>
        <Timeline.Item
          color='#00CCFF'
          dot={<SmileOutlined />}
        >
          開発中
        </Timeline.Item>
      </Timeline>
    </div>

  );
}


export default DailyView;