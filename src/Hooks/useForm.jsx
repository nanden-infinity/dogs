import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email valido',
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/,
    message:
      ' Uma letra maiúscula, uma minúscula, um número e um carácter especial.',
  },
};
export const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);
  const validate = function (valueToValidate = value) {
    if (type === false) return true;
    if (valueToValidate.length === 0) {
      setError('Preencha o valor');
      return false;
    } else if (types[type] && !types[type].regex.test(valueToValidate)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
