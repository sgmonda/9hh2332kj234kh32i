import { Form, Input, Modal, notification } from 'antd';
import axios from 'axios';
import React, { FormEventHandler, useState } from 'react';
import { EModal } from '../common';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector, hide } from '../store/modal';
import { login } from '../store/auth';

export const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const { activeModal } = useAppSelector(selector);
  const isActive = activeModal === EModal.LOGIN;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [form] = Form.useForm();

  const showError = (error: string) => {
    notification.error({
      message: 'Error',
      description: error,
    });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post('/api/login', form.getFieldsValue());
      dispatch(login(data));
      onClose();
    } catch (err: any) {
      const message = err.response?.data?.error || String(err);
      showError(message);
    }
    setIsLoading(false);
  };

  const onClose = () => {
    form.resetFields();
    setIsValid(false);
    setIsLoading(false);
    dispatch(hide());
  }

  const onChange: FormEventHandler<HTMLFormElement> = async () => {
    try {
      await form.validateFields();
      setIsValid(true);
    } catch (err) {
      setIsValid(false);
    }
  }

  return <>
    <Modal
      title="Login"
      visible={isActive}
      okButtonProps={{ disabled: !isValid, loading: isLoading }}
      onOk={onSubmit}
      confirmLoading={isLoading}
      onCancel={onClose}
      cancelButtonProps={{ disabled: isLoading }}
    >
      <Form
        form={form}
        labelCol={{ span: 5 }}
        onChange={onChange}
        autoComplete="off"
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: 'Introduce tu nombre de usuario' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: 'Introduce una contraseña' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <p>Tip: for testing, write <code>{'"test"'}</code> (without quotes) in both fields.</p>
    </Modal>
  </>;
};
