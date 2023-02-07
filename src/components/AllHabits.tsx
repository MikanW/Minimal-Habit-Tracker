import {db} from './../firebase'
import React, { useState, useEffect } from 'react'
import {Space} from 'antd'
import { CardView } from './CardView'

const AllHabits = () => {
  const [habits, setHabits] = useState([]);
  
  const handleClick = () => {

  }

  useEffect(() => {
    db.collection( "habits" )
    .onSnapshot( (snapshot)=> {
      setHabits(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  if (habits.length !== 0) {
    return ( 
      <Space size={[8, 16]} wrap>
         
        { habits.map(( {name, index}) => (
          <CardView habit={name} key={index}/>
        ))}
        <p onClick={handleClick}>习惯</p>

      </Space>
    );
  }
  else {
    return <p>你似乎来到没有习惯的荒原……</p>
  }
  
    

}


export default AllHabits;