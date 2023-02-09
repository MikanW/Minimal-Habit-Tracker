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

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const NewHabitForm = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  const [MainColor, setMainColor] = useState("#aabbcc");
  const onColorChange = (value: string) => {
    setMainColor(value);
    console.log(MainColor);
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
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
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
        <Form.Item label="MainColor">
        <Popover placement="bottomLeft" content={<ColorPicker setSelectedColor={onColorChange} />} title="" trigger="click"> 
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