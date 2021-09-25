import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import { CommonLoader } from '@features/common';
import { theme } from '@lib/styled-theme';
import { Header } from '@ui';

import { Pages } from './pages';
import { GlobalStyles } from './global-styles';

export const App = hot(module)(() => {
  return (
    <ThemeProvider theme={theme}>
      <CommonLoader>
        <GlobalStyles />
        <Header />
        <Pages />
      </CommonLoader>
    </ThemeProvider>
  );
});
