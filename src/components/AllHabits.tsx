import { db } from './../firebase'
import { useState, useEffect, useContext } from 'react'
import { Space } from 'antd'
import { CardView } from './CardView'
import { HabitForm } from './HabitForm'
import { UserIdContext } from './../Data/context';
import HabitCard from './Today/HabitCard'

export interface AllHabitInfo {
  type: string;
}

const AllHabits = ( props: AllHabitInfo ) => {
  const { type } = props;

  const [habits, setHabits] = useState([]);

  const userId = useContext(UserIdContext);


  useEffect(() => {
    db.collection('users').doc(userId).collection("habits")
      .onSnapshot((snapshot) => {
        setHabits(snapshot.docs.map(doc => doc.data()))
      })
  }, []);

  // show habits

    return (

      <Space
        align="start"
        wrap
        className="allHabitCards">
        {habits.map((habit) => (
          
          type == "today" ?
          <HabitCard habit={habit} key={habit.uuid} className="habitCard"/>
          :
          <CardView habit={habit} key={habit.uuid} className="habitCard" />
        ))}

        {type == "today" ? <p></p> : <HabitForm isNewHabit={true}/>}
      </Space>
    );

}

export default AllHabits;