import React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { reflect } from '@effector/reflect';

import { Button, Field, H3, ModalMask } from '@ui';
import { trimEvent } from '@lib/events';

import { $formIsOpen, $loginForm } from '../model';

const EmailField = reflect({
  view: Field,
  bind: {
    value: $loginForm.fields.email.$value,
    onChange: $loginForm.fields.email.onChange.prepend(trimEvent),
  },
});

const PasswordField = reflect({
  view: Field,
  bind: {
    value: $loginForm.fields.password.$value,
    onChange: $loginForm.fields.password.onChange.prepend(trimEvent),
  },
});

export const AuthFormBox = styled.form`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 8px 20px;

  width: 320px;

  & .login-btn {
    margin-top: 10px;
    width: 100%;
  }
`;

const LoginButton = reflect({
  view: Button,
  bind: {},
});

export const AuthForm = () => {
  const isOpen = useStore($formIsOpen);

  const emailValueFromStore = useStore($loginForm.fields.email.$value);

  return isOpen ? (
    <ModalMask>
      <AuthFormBox>
        <H3 textAlign="center">Вход</H3>
        <p>Value from store {emailValueFromStore}</p>
        <EmailField label="Email" />
        <PasswordField label="Пароль" />
        <LoginButton className="login-btn" color="primary">
          Вход
        </LoginButton>
      </AuthFormBox>
    </ModalMask>
  ) : null;
};
