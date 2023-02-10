import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message, Card, Popover } from 'antd';
import ColorPicker from './ColorPicker';
import { useState } from 'react';
import { db } from './../firebase'
import uuid from 'react-uuid'

// const waitTime = (time: number = 100) => {
//   db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };



export const NewHabitForm = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  const [MainColor, setMainColor] = useState("#aabbcc");
  
  const onColorChange = (value: string) => {
    setMainColor(value);
    console.log(MainColor);
  }

  const addNewHabitToDb = (value: any) => {
    db.collection("habits")
      .add({
        name: value.name,
        slogan: value.slogan,
        mainColor: MainColor,
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
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="NewHabit"
      trigger={
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

        </Card>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={1000}
      onFinish={async (values) => {
        await addNewHabitToDb(values);
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
        />

        <ProFormText width="lg" name="slogan" label="Slogan" placeholder="a slogan to encourage yourself." />
      </ProForm.Group>
      <ProForm.Group>
        <Form.Item name="mainColor" label="MainColor">
          <Popover  placement="bottomLeft" content={<ColorPicker setSelectedColor={onColorChange} />} title="" trigger="click">
            <Button
              type="text"
              style={{ backgroundColor: MainColor }}
            >
            </Button>
          </Popover>

        </Form.Item>
        <ProFormText width="md" name="contract" label="合同名称" placeholder="请输入名称" />
        <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'chapter',
              label: '盖章后生效',
            },
          ]}
          width="xs"
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: '履行完终止',
            },
          ]}
          name="unusedMode"
          label="合同约定失效效方式"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目" />
      <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
    </ModalForm>
  );
};

export default NewHabitForm;