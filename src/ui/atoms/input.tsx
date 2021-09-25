import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, className }) => (
  <InputBox className={className} onChange={onChange} value={value} />
);

const InputBox = styled.input`
  padding: 5px 20px;
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.primary}`};
  border-radius: 30px;

  &:focus {
    box-shadow: ${(props) => `0px 0px 3px 0px ${props.theme.primaryHover}`};
  }
`;
