import React, { useContext, useEffect, useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Card, Timeline } from 'antd';
import { db } from '../firebase';
import { UserIdContext } from '../Data/context';
import { getHabitNameOfChkPt, getMainColorOfChkPt } from './Habit/habitDataUtil';
import { isSameDay } from '../Util/date';

interface DailyViewInfo {
  date: any;
}



const DailyView = (props: DailyViewInfo) => {

  const { date } = props;
  console.log(date)

  const [habits, setHabits] = useState([]);
  const [checkPoints, setCheckPoints] = useState([]);

  const userId = useContext(UserIdContext);

  useEffect(() => {

    db.collection('users').doc(userId).collection("habits")
      .onSnapshot((snapshot) => {
        setHabits(snapshot.docs.map(doc => doc.data()));
      });

    let allCheckPoints = db.collectionGroup('checkPoints').where("user", "==", userId).orderBy("createdAt", "desc");
    allCheckPoints.onSnapshot((snapshot) => {
      setCheckPoints(snapshot.docs.map(doc => doc.data()));
    })
    // allCheckPoints.get().then((querySnapshot) => {
    //   setCheckPoints(querySnapshot.docs.map(doc => doc.data()));
    // });


  }, []);

  let data;

  if (checkPoints.length !== 0) {

    data = (
      checkPoints.filter( (checkPoint) => (
        isSameDay(checkPoint.createdAt.toDate(), date)) )
      .map((checkPoint) => {
      //checkPoints.map((checkPoint) => {
        let date = '';

        if (checkPoint.createdAt) {
          date = checkPoint.createdAt.toDate().toUTCString();
        }

        return (
          <Timeline.Item
            className='TimelineItem'
            key={checkPoint.uuid}
            dot={<SmileOutlined />}
            color={getMainColorOfChkPt(habits, checkPoint.habit)}
          >
            <Card>
              <div className='checkPoint' >
                <p>{getHabitNameOfChkPt(habits, checkPoint.habit)}</p>
                <p>value: {checkPoint.value}</p>
                <p>note:  {checkPoint.note}</p>
                <p>date:  {date}</p>
              </div>
            </Card>

          </Timeline.Item>
        );
      })
    )
  }
  else {
    data = <p>No CheckPoints</p>
  }

  return (
    <div className='wrapper-allCheckPoints'>
      <Timeline className='allCheckPoints' reverse={false}>
        {data}
      </Timeline>
    </div>

  );
}


export default DailyView;