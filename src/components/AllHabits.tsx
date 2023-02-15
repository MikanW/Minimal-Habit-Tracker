import { db } from './../firebase'
import { useState, useEffect } from 'react'
import { Space } from 'antd'
import { CardView } from './CardView'
import { HabitForm } from './HabitForm'



const AllHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    db.collection("habits")
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
          <CardView habit={habit} key={habit.uuid} className="habitCard" />
        ))}
        <HabitForm isNewHabit={true}/>
      </Space>
    );

}

export default AllHabits;