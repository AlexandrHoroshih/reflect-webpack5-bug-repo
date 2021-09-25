import { createStore } from 'effector';
import { createForm } from 'effector-forms';

export const $formIsOpen = createStore(true);

export const $loginForm = createForm({
  fields: {
    email: {
      init: '',
    },
    password: {
      init: '',
    },
  },
});
