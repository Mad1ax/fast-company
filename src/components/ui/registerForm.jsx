import React, { useState, useEffect } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import API from '../../API';
import SelectField from '../common/form/selectField';
import RadioFeild from '../common/form/radioField';
import MultiSelectField from '../common/form/multiSelectField';
import CheckBoxField from '../common/form/checkBoxField';

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    profession: '',
    sex: 'male',
    qualities: [],
    license: false
  });
  const [qualities, setQualities] = useState({});
  const [professions, setProfessions] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
    API.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Электронная почта введена некорректно' }
    },

    password: {
      isRequired: { message: 'Пароль обязательна для заполнения' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: { message: 'пароль должен содержать хотя бы одно число' },
      min: { message: 'пароль должен содержать минимум 8 симовлов', value: 8 }
    },
    profession: {
      isRequired: {
        message: 'Обязательно выберите профессию'
      }
    },
    license: {
        isRequired: {
            message: 'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
        }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

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

        <SelectField
          label="Выберите профессию"
          defaultOption="Choose..."
          options={professions}
          value={data.profession}
          onChange={handleChange}
          error={errors.profession}
          name='professions'
        />

        <RadioFeild
          options={[
            { name: 'Male', value: 'Male' },
            { name: 'Female', value: 'Female' },
            { name: 'Other', value: 'Other' }
          ]}
          value={data.sex}
          name="sex"
          label="Выберите ваш пол"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleChange}
        />

        <MultiSelectField
          options={qualities}
          onChange={handleChange}
          defaultValue={data.qualities}
          name="qualities"
          label="Выберите ваши качества"
        />

        <CheckBoxField
          value={data.license}
          onChange={handleChange}
          name="license"
          error={errors.license}
        >
          Подтвердить <a>лицензионное соглашение</a>
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

export default RegisterForm;
