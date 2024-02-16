// import { useParams } from 'react-router-dom';
//     const params = useParams();
//     const { type } = params;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import {useHistory} from 'use-history';
import { validator } from '../../../utils/validator';
import API from '../../../API';
import TextField from '../../common/form/textField';
import SelectField from '../../common/form/selectField';
import RadioFeild from '../../common/form/radioField';
import MultiSelectField from '../../common/form/multiSelectField';
import PropTypes from 'prop-types';
import BackHistoryButton from '../../common/table/backButton';

const EditUserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoadin] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    profession: '',
    sex: 'male',
    qualities: []
  });
  const [professions, setProfession] = useState([]);
  const [qualities, setQualities] = useState({});
  const [errors, setErrors] = useState({});

  const getProfessionById = (id) => {
    for (const prof in professions) {
      const profData = professions[prof];
      if (profData._id === id) return profData;
    }
  };

  const getQualities = (elements) => {
    const qualitiesArray = [];
    for (const elem of elements) {
      for (const qualy in qualities) {
        if (elem.value === qualities[qualy]._id) {
          qualitiesArray.push(qualities[qualy]);
        }
      }
    }
    return qualitiesArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const { profession, qualities } = data;
    // console.log('profession',profession);
    API.users
      .update(userId, {
        ...data,
        profession: getProfessionById(profession),
        qualities: getQualities(qualities)
      })
      .then((data) => navigate(`/users/${data._id}`));
    // console.log('updated',data);
  };

  const transformData = (data) => {
    return data.map((qual) => ({ label: qual.name, value: qual._id }));
  };

  useEffect(() => {
    setIsLoadin(true);
    API.users.getById(userId).then(({ profession, qualities, ...data }) =>
      setData((prevState) => ({
        ...prevState,
        ...data,
        qualities: transformData(qualities),
        profession: profession._id
      }))
    );
    API.qualities.fetchAll().then((data) => setQualities(data));
    API.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  useEffect(() => {
    if (data._id) setIsLoadin(false);
    console.log('get initial', data);
  }, [data]);

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Электронная почта введена некорректно' }
    },

    name: {
      isRequired: { message: 'Введите ваше имя' }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = (target) => {
    // console.log('target',target);
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    // console.log('[target.name]',[target.name]);
    // console.log('target.name',target.name);
    // console.log('data',data);
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  return (
    <>
      <div className="container mt-5">
        <BackHistoryButton />
        <div className="row">
          <div className="col-md-8 offset-md-2 shadow p-4">
            {!isLoading && Object.keys(professions).length > 0 ? (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Имя"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextField
                  //   defaultValue={user.name}
                  label="электронная почта"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <SelectField
                  label="Выберите профессию"
                  defaultOption="Choose..."
                  name="profession"
                  options={professions}
                  onChange={handleChange}
                  value={data.profession}
                  error={errors.profession}
                />

                <RadioFeild
                  options={[
                    { name: 'Male', value: 'Male' },
                    { name: 'Female', value: 'Female' },
                    { name: 'Other', value: 'Other' }
                  ]}
                  value={data.sex}
                  name="sex"
                  onChange={handleChange}
                  label="Выберите ваш пол"
                />

                <MultiSelectField
                  defaultValue={data.qualities}
                  options={qualities}
                  onChange={handleChange}
                  values
                  name="qualities"
                  label="Выберите ваши качества"
                />

                <button
                  type="submit"
                  className="btn btn-primary w-100 mx-auto"
                  disabled={!isValid}
                >
                  Обновить данные
                </button>
              </form>
            ) : (
              'loading...'
            )}
          </div>
        </div>
      </div>
    </>
  );
};

EditUserPage.propTypes = {
  userId: PropTypes.string
};

export default EditUserPage;
