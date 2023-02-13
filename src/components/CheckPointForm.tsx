import { Popover, Form, message } from 'antd';
import {
  ModalForm,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { db } from '../firebase'
import uuid from 'react-uuid'

const trigger = (
   <Popover content={"add new data into habit"} trigger="hover">
    <PlusCircleOutlined key="addCheckPoint"/>
   </Popover>
);

const CheckPointForm = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();

  const addNewCheckPointToDb = (habit: any) => {
    
    // need a function to get id of a habitName from db
    
    db.collection("habits").doc('habit id').collection('checkPoints')
      .add({
        time: '',
        value: '',
        note: '',
        uuid: uuid(),
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    return new Promise((resolve) => {
      resolve(true);
    });

  }

  return (
    <ModalForm
      title="NewCheckPoint"
      trigger={trigger}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={1000}
      onFinish={async (values) => {
        await addNewCheckPointToDb(values);
        console.log(values)
        message.success('Successfully added!');
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="lg"
          name="note"
          label="Note"
          placeholder="say something! :)"
          initialValue=""
        />
      </ProForm.Group>

    </ModalForm>
  )

}

export default CheckPointForm;