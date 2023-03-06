import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message, Card, Popover } from 'antd';
import ColorPicker from './ColorPicker';
import { useContext, useState } from 'react';
import { db } from '../firebase'
import uuid from 'react-uuid'
import firebase from 'firebase';
import { UserIdContext } from './../Data/context';

const NewHabitFormTrigger =

  <Card id="NewHabitCard"
    hoverable
    style={{
      width: 300,
      height: 200
    }}
  >
    <div className='addNewIconButton'>
      <PlusOutlined />
    </div>
  </Card>;

const EditHabitFormTrigger = (
  <Popover content={"edit habit setting"} trigger="hover">
    <SettingOutlined key="setting" onClick={() => console.log("lalala")} />
  </Popover>
);

interface HabitFormProps {
  isNewHabit: boolean,
  habitInfo?: any
}

const setFormInitValue = (habitInfo: any) => {
  habitInfo = {
    name: "",
    slogan: "",
    mainColor: "#b5e9dc",
  }
};

export const HabitForm = (props: HabitFormProps) => {
  const { isNewHabit, habitInfo } = props;
  const userId = useContext(UserIdContext);
  
  if (isNewHabit) {
    setFormInitValue(habitInfo);
  }

  const [form] = Form.useForm<{ name: string; company: string }>();
  const [MainColor, setMainColor] = useState(isNewHabit ? "#aabbcc" : habitInfo.mainColor);

  const onColorChange = (value: string) => {
    setMainColor(value);
    console.log(MainColor);
  }

  const updateHabitToDb = (value: any, uuid: string) => {
    db.collection('users').doc(userId).collection("habits").doc(uuid).update(
      {
        name: value.name,
        slogan: value.slogan,
        mainColor: MainColor,
        editedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    return new Promise((resolve) => {
      resolve(true);
    });
  }

  const addNewHabitToDb = (value: any) => {
    const newId = uuid();
    db.collection('users').doc(userId).collection("habits").doc(newId)
      .set({
        name: value.name,
        slogan: value.slogan,
        mainColor: MainColor,
        uuid: newId,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
      name: string;
      company: string;
    }>
      title="NewHabit"
      trigger={
        isNewHabit ? NewHabitFormTrigger : EditHabitFormTrigger
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={1000}
      onFinish={async (values) => {
        if (isNewHabit) {
          await addNewHabitToDb(values);
        }
        else {
          await updateHabitToDb(values, habitInfo.uuid);
        }

        console.log(values)
        message.success('Successfully added!');
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="sm"
          name="name"
          label="Habit Name"
          tooltip="Max Length: 24 "
          placeholder="name of new habit"
          initialValue={isNewHabit ? "" : habitInfo.name}
        />

        <ProFormText
          width="lg"
          name="slogan"
          label="Slogan"
          placeholder="a slogan to encourage yourself."
          initialValue={isNewHabit ? "" : habitInfo.slogan}
        />

      </ProForm.Group>

      <ProForm.Group>
        <Form.Item name="mainColor" label="MainColor">
          <Popover
            placement="bottomLeft"
            content={<ColorPicker setSelectedColor={onColorChange} initColor={isNewHabit ? "#b5e9dc" : habitInfo.mainColor} />}
            title=""
            trigger="click"
          >
            <Button
              style={{
                backgroundColor: MainColor
              }}
            >
            </Button>
          </Popover>
        </Form.Item>
      </ProForm.Group>
    </ModalForm>
  );
};

export default HabitForm;