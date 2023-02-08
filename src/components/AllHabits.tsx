import { db } from './../firebase'
import React, { useState, useEffect } from 'react'
import { Card, Space, Modal, Form, Input, InputNumber, Button, Switch } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { CardView } from './CardView'
import { NewHabitForm } from './NewHabitForm'

const AddHabitCard = () => {

  return (
    <Card id="NewHabitCard"
      hoverable
      style={{
        width: 300,
      }}
    >
      <div className='addNewIconButton'>
        <PlusOutlined />
      </div>

    </Card>


  );

}

const AllHabits = () => {
  const [habits, setHabits] = useState([]);
  const [newHabitCard, setNewHabitCard] = useState(<AddHabitCard />);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalContents, setmodalContents] = useState(<NewHabitForm />);

  useEffect(() => {
    db.collection("habits")
      .onSnapshot((snapshot) => {
        setHabits(snapshot.docs.map(doc => doc.data()))
      })
  }, []);

  const showAddHabitModal = () => {
    setOpen(true);
  }

  const handleOk = () => {
    setmodalContents(<p>The modal will be closed after two seconds</p>);
    setConfirmLoading(true);
    onFormFinish;
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  // show habits
  if (habits.length !== 0) {
    return (
      <Space wrap className="allHabitCards">

        {habits.map(({ name, uuid }) => (
          <CardView habit={name} key={uuid} className="habitCard" />
        ))}
        {/* <Card id="NewHabitCard"
          hoverable
          style={{
            width: 300,
          }}
        >
          <div className='addNewIconButton'>
            <PlusOutlined />
          </div>

        </Card> */}
        <NewHabitForm />

        {/* <Modal
          title="Add New Habit"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          {modalContents}
        </Modal> */}


      </Space>
    );
  }
  else {
    return <p>Loading……</p>
  }

}


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFormFinish = (values: any) => {
  console.log(values);
};

// const NewHabitForm = () => {

//   return (
//     <Form
//       {...layout}
//       name="nest-messages"
//       onFinish={onFormFinish}
//       style={{ maxWidth: 600}}
//       validateMessages={validateMessages}
//     >
//       <Form.Item name={['habit', 'name']} label="Habit Name" rules={[{ required: true }]}>
//         <Input placeholder="name" />
//       </Form.Item>

//       <Form.Item name={['habit', 'slogan']} label="slogan" rules={[]}>
//         <Input placeholder="a slogan to encourage yourself." />
//       </Form.Item>

//       <Form.Item label="Switch" name={['habit', 'useHeatMap']} valuePropName="checked">
//         <Switch />
//       </Form.Item>

//       {/* <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
//         <InputNumber />
//       </Form.Item>
//       <Form.Item name={['user', 'website']} label="Website">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'introduction']} label="Introduction">
//         <Input.TextArea />
//       </Form.Item> */}
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// }

export default AllHabits;