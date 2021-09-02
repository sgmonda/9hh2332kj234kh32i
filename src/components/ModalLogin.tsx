import { Modal } from 'antd';
import React, { useState } from 'react';
import { EModal } from '../common';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selector } from '../store/modal';

export const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(selector);
  const isActive = activeModal === EModal.LOGIN;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = () => {
    console.log('SUBMIT');
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
    setIsLoading(false);
  };

  const onCancel = () => {
    console.log('CANCEL');
    dispatch({ activeModal: null });
  };

  return <>
    <p>a</p>
    <Modal
      title="Title"
      visible={isActive}
      onOk={onSubmit}
      confirmLoading={isLoading}
      onCancel={onCancel}
    >
      <p>hello</p>
    </Modal>
  </>;
};
