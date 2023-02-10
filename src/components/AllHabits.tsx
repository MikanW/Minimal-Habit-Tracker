import { db } from './../firebase'
import React, { useState, useEffect } from 'react'
import { Space } from 'antd'
import { CardView } from './CardView'
import { NewHabitForm } from './NewHabitForm'


const AllHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    db.collection("habits")
      .onSnapshot((snapshot) => {
        setHabits(snapshot.docs.map(doc => doc.data()))
      })
  }, []);

  // show habits
  if (habits.length !== 0) {
    return (
      <Space wrap className="allHabitCards">
        {habits.map(( habit ) => (
          <CardView habit={habit.name} key={habit.uuid} className="habitCard" />
        ))}
        <NewHabitForm />
      </Space>
    );
  }
  else {
    return <p>Loading……</p>
  }

}

export default AllHabits;