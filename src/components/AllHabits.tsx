import { db } from './../firebase'
import React, { useState, useEffect } from 'react'
import { Card, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { CardView } from './CardView'

const AllHabits = () => {
  const [habits, setHabits] = useState([]);

  const content = <p>Popover</p>;

  useEffect(() => {
    db.collection("habits")
      .onSnapshot((snapshot) => {
        setHabits(snapshot.docs.map(doc => doc.data()))
      })
  }, []);

  if (habits.length !== 0) {
    return (
      <Space wrap className="allHabitCards">

        {habits.map(({ name, index }) => (
          <CardView habit={name} key={index} className="habitCard" />
        ))}
          <Card id="addNewHabitCard"
            hoverable
            style={{
              width: 300
            }}
          >
            <div className='addNewIconButton'>
              <PlusOutlined />
            </div>

          </Card>


      </Space>
    );
  }
  else {
    return <p>Loading……</p>
  }



}


export default AllHabits;