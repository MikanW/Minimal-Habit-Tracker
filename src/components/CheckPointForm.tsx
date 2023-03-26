import { Popover, Form, message } from 'antd';
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormDigit
} from '@ant-design/pro-components';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { db } from '../firebase'
import uuid from 'react-uuid'
import firebase from 'firebase';
import { UserIdContext } from './../Data/context';
import { useContext } from 'react';

interface FormProps {
  habitId: string;
  isNewCheckPoint: boolean;
  checkPointId?: string;
}

const newCheckPointTrigger = (
  <Popover content={"add new data into habit"} trigger="hover">
    <PlusOutlined key="addCheckPoint" />
  </Popover>
);

const editCheckPointTrigger = (
  <Popover content={"edit data"} trigger="hover">
    <EditOutlined key="editCheckPoint" />
  </Popover>
)

const CheckPointForm = (props: FormProps) => {
  const { habitId, isNewCheckPoint, checkPointId } = props;
  const [form] = Form.useForm<{ value: number; note: string }>();
  const userId = useContext(UserIdContext);

  const addNewCheckPointToDb = (value: any) => {
    const newId = uuid();
    db.collection('users').doc(userId).collection("habits").doc(habitId)
      .collection('checkPoints').doc(newId)
      .set({
        time: '1',
        value: value.count,
        note: value.note,
        uuid: newId,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: userId,
        habit: habitId,
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

  const editCheckPoint = (value: any, checkPointUuid: string) => {
    db.collection('users').doc(userId).collection("habits").doc(habitId)
      .collection('checkPoints').doc(checkPointUuid)
      .update({
        time: '1',
        value: value.count,
        note: value.note,
        editedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <ModalForm<{
      count: number;
      note: string;
    }>
      title={isNewCheckPoint ? "NewCheckPoint" : "EditCheckPoint"}
      trigger={isNewCheckPoint ? newCheckPointTrigger : editCheckPointTrigger}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={1000}
      onFinish={async (values) => {
        if (isNewCheckPoint) {
          await addNewCheckPointToDb(values);
        }
        else {
          await editCheckPoint(values, String(checkPointId));
        }

        console.log(values)
        message.success('Successfully added!');
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormDigit
          label="count"
          name="count"
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