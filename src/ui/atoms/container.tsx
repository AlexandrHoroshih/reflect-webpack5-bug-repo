import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

const ContainerBox = styled.div`
  max-width: 1050px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
`;
