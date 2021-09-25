import React from 'react';
import { AuthForm } from '@features/auth';

interface Props {
  children: React.ReactNode;
}

export const CommonLoader: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuthForm />
      {children}
    </>
  );
};
