import React from 'react';
import styled from 'styled-components';

import { Button, Container, H2 } from '@ui';

export const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <div className="inner">
          <H2 uppercase>some app</H2>
          <div className="btns">
            <Button>Sign in</Button>
            <Button outlined>Sign up</Button>
          </div>
        </div>
      </Container>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  background-color: #fff;

  .inner {
    align-items: center;
    display: flex;
    height: 45px;
    justify-content: space-between;
  }
  .btns {
    button {
      margin: 0 2px;
    }
  }
`;
