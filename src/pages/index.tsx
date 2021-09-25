import React from 'react';
import { Route, Switch } from 'react-router';

import { compileRoutes, protectRoutes } from '@lib/routing';

import { routes as ROUTES } from './routes';

export const Pages = () => {
  const routes = React.useMemo(() => {
    const compiled = compileRoutes(ROUTES);
    return protectRoutes(compiled, {});
  }, []);

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.name} {...route} />
      ))}
    </Switch>
  );
};
