import React from 'react';
import styled from 'styled-components';

import { Input } from '@ui';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
}

export const Field: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <FieldBox>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} />
    </FieldBox>
  );
};

const FieldBox = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  margin-bottom: 5px;
`;
