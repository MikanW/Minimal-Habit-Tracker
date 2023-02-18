import { useState, useEffect, useContext } from 'react'
import { Timeline, Card } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons';
import { db } from './../firebase'
import { UserIdContext } from './../Data/context';


export interface HabitInfo {
  habitId: string;
  mainColor: string;
}


const AllCheckPoints = (props: HabitInfo) => {
  const { habitId, mainColor } = props;
  const userId = useContext(UserIdContext);

  let habitRef = db.collection('users').doc(userId).collection("habits").doc(habitId);

  const [checkPointsData, setcheckPointsData] = useState([]);
  //const [groupBy, setGroupBy] = useState(); // todo: collapse groups

  useEffect(() => {
    db.collection('users').doc(userId).collection("habits").doc(habitId).collection("checkPoints").orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setcheckPointsData(snapshot.docs.map(doc => doc.data()))
      })
  }, []);

  let data;

  if (checkPointsData.length !== 0) {
    
    data = (
      checkPointsData.map((checkPoint) => {

        const date = checkPoint.createdAt.toDate().toUTCString();
        console.log(mainColor)
        return (
          <Timeline.Item 
            className='TimelineItem'
            key={checkPoint.uuid}
            dot={<CheckCircleOutlined />}
            color={String(mainColor)}
          >
            <Card>
              <div className='checkPoint' >
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
    <Timeline className='allCheckPoints'>
      {data}
    </Timeline>
  );
}



export default AllCheckPoints;

