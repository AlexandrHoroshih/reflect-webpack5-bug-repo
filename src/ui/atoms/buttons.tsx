import React from 'react';
import styled, { css } from 'styled-components';

export const Button: React.FC<Props> = ({
  children,
  color = 'primary',
  outlined = false,
  onClick,
  className,
  width,
}) => {
  return (
    <ButtonBox
      className={className}
      width={width}
      onClick={onClick}
      color={color}
      outlined={outlined}
    >
      {children}
    </ButtonBox>
  );
};

const ButtonBox = styled.button<StyledProps>`
  background: white;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
  min-width: 120px;
  cursor: pointer;
  transition: all 0.3s ease;

  width: ${(props) => props.width};

  ${({ color, theme, outlined }) =>
    color === 'primary' &&
    css`
      color: ${outlined ? theme.primary : 'white'};
      background-color: ${outlined ? 'white' : theme.primary};
      border: ${`1px solid ${theme.primary}`};

      &:hover {
        background-color: ${!outlined && theme.primaryHover};
        color: ${outlined && theme.primaryHover};
        box-shadow: ${outlined && `0px 0px 2px 0px ${theme.primaryHover}`};
      }
    `};
`;

interface StyledProps {
  width?: string;
  outlined?: boolean;
  color?: ButtonColor;
}

interface Props extends StyledProps {
  children: React.ReactNode;
  className: string;
  onClick?: (e: React.MouseEvent) => void;
}

type ButtonColor = 'primary' | 'secondary';
