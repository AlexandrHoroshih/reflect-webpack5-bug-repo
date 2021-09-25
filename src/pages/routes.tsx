import { SimpleRoute } from '@lib/routing';

import { HomePage } from './home';
import { Error404Page } from './404';

import { paths } from './paths';

type RoutesProps = {
  [key: string]: SimpleRoute<any>;
};

export const routes: RoutesProps = {
  home: {
    path: paths.home(),
    exact: true,
    name: 'Главная',
    component: HomePage,
    guards: [],
  },
  error404: {
    path: '*',
    name: '404',
    component: Error404Page,
    guards: [],
  },
};
