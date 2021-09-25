import React from 'react';
import { Link } from 'react-router-dom';

import { paths } from '@pages/paths';

export const Error404Page = () => {
  return (
    <div>
      404 error, go to <Link to={paths.home()}>home page</Link>
    </div>
  );
};
