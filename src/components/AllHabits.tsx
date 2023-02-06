import { addHabit } from './../Data/Habit'
import {db} from './../firebase'
import React, { useState, useEffect } from 'react'

const AllHabits = () => {
  const [habits, setHabits] = useState();
  
  const handleClick = () => {
    console.log(habits);
  }

  useEffect(() => {
    db.collection( "habits" )
    .onSnapshot( (snapshot)=> {
      setHabits(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return ( 
    <p onClick={handleClick}>习惯</p>    
  );
}



export default AllHabits;