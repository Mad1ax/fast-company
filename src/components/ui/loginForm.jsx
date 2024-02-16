import React, { useState, useEffect } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import CheckBoxField from '../common/form/checkBoxField';
// import * as yup from 'yup';


const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '', stayOn: false });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  // const validateScheme = yup.object().shape({
  //   password: yup
  //     .string()
  //     .required('Пароль обязателен для заполнения')
  //     .matches(
  //       /^(?=.*[A-Z])/,
  //       'Пароль должен содержать хотя бы одну заглавную букву'
  //     )
  //     .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одно число')
  //     .matches(
  //       /(?=.*[!@#$%^&*])/,
  //       'Пароль должен содержать хотя бы один из специальных символов'
  //     )
  //     .matches(/(?=.{8,})/, 'Пароль должен содержать минимум 8 симовлов'),

  //   email: yup
  //     .string()
  //     .required('Электронная почта обязательна для заполнения')
  //     .email('Электронная почта введена некорректно')
  // });

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Электронная почта введена некорректно' }
    },

    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: { message: 'Пароль должен содержать хотя бы одно число' },
      min: { message: 'Пароль должен содержать минимум 8 симовлов', value: 8 }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    // validateScheme
    //   .validate(data)
    //   .then(() => setErrors({}))
    //   .catch((error) => setErrors({ [error.path]: error.message }));

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="электронная почта"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="пароль"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <CheckBoxField
          value={data.stayOn}
          onChange={handleChange}
          name="stayOn"
        >
          Оставаться в системе
        </CheckBoxField>
        <button
          type="submit"
          className="btn btn-primary w-100 mx-auto"
          disabled={!isValid}
        >
          Отправить
        </button>
      </form>
    </>
  );
};

export default LoginForm;
