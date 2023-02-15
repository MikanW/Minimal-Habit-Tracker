import { useState, useEffect } from 'react'
import { db } from './../firebase'

export interface HabitInfo {
  habitId: string;
}


const AllCheckPoints = (props: HabitInfo) => {
  const { habitId } = props;

  const [checkPointsData, setcheckPointsData] = useState([]);

  useEffect(() => {
    db.collection("habits").doc(habitId).collection("checkPoints").orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setcheckPointsData(snapshot.docs.map(doc => doc.data()))
      })

  }, []);

  let data;

  if (checkPointsData.length !== 0) {
    data = (
      checkPointsData.map((checkPoint) => {

        const date = checkPoint.createdAt.toDate().toUTCString();
        return (
          <div className='checkPointData' key={checkPoint.uuid}>
            <p>{checkPoint.value}</p>
            <p>{checkPoint.note}</p>
            <p>date:{ date }</p>
          </div>
        );
      })
    )
  }
  else {
    data = <p>No CheckPoints</p>
  }

  return (
    <div>
      {data}
    </div>
  );
}



export default AllCheckPoints;

