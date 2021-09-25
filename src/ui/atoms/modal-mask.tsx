import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useLockBodyScroll } from '@lib/hooks';

interface ModalProps {
  children: React.ReactNode;
}

export const ModalMask: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.querySelector('#modal-root');

  useLockBodyScroll();

  return modalRoot
    ? ReactDOM.createPortal(<ModalMaskBox>{children}</ModalMaskBox>, modalRoot)
    : null;
};

const ModalMaskBox = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: rgba(37, 31, 45, 0.3);
`;
