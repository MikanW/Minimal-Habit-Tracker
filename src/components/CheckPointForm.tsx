import { Popover, Form, message } from 'antd';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormDigit
} from '@ant-design/pro-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { db } from '../firebase'
import uuid from 'react-uuid'

interface FormProps  {
  habitId: string;
}

const trigger = (
  <Popover content={"add new data into habit"} trigger="hover">
    <PlusCircleOutlined key="addCheckPoint" />
  </Popover>
);

const CheckPointForm = ( props: FormProps ) => {
  const { habitId } = props;
  const [form] = Form.useForm<{ value: number; note: string }>();

  const addNewCheckPointToDb = () => {
    const newId = uuid();
    db.collection("habits").doc(habitId)
    .collection('checkPoints').doc(newId)
      .set({
        time: '1',
        value: '11',
        note: '111',
        uuid: newId,
      })
      .then(() => {
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    return new Promise((resolve) => {
      resolve(true);
    });

  }

  return (
    <ModalForm<{
      value: number;
      note: string;
    }>
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
        <ProFormDigit
          label="Value"
          name="value"
          width="sm"
          min={1}
          placeholder={'根据习惯的计数方式设置不同placeholder'}
        />
      </ProForm.Group>

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