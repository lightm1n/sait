import React, { useState } from 'react';
import './form.css';
import {
  validateDateOfBirth,
  validateFullName,
  validatePhoneNumber,
  validateFutureDate,
} from './utils.js';

const MainForm = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [time, setTime] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [dateOfBirthError, setDateOfBirthError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFullNameChange = (value) => {
    setFullName(value);
    if (value.trim() === '') {
      setFullNameError('ФИО не может быть пустым');
    } else if (!validateFullName(value)) {
      setFullNameError('Пожалуйста, введите корректное ФИО');
    } else {
      setFullNameError('');
    }
  };

  const handleDateOfBirthChange = (value) => {
    setDateOfBirth(value);
    if (value.trim() === '') {
      setDateOfBirthError('Дата рождения не может быть пустой');
    } else {
      setDateOfBirthError('');
    }
  };

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    let match = cleaned.match(/^(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      let intlCode = (match[1] ? '+7' : '');
      return [intlCode, match[2], match[3], match[4], match[5]].filter(Boolean).join('-');
    }
    return value;
  };

  const handlePhoneNumberChange = (value) => {
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);

    if (value.trim() === '') {
      setPhoneNumberError('Номер телефона не может быть пустым');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleTimeChange = (value) => {
    setTime(value);
    if (value.trim() === '') {
      setTimeError('Время не может быть пустым');
    } else {
      setTimeError('');
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'fullName':
        handleFullNameChange(value);
        break;
      case 'dateOfBirth':
        handleDateOfBirthChange(value);
        break;
      case 'phoneNumber':
        handlePhoneNumberChange(value);
        break;
      case 'time':
        handleTimeChange(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      !fullNameError &&
      !dateOfBirthError &&
      !phoneNumberError &&
      !timeError
    ) {
  
      setSubmitMessage(`Спасибо, ${fullName}! Ваши данные успешно отправлены.`);
    } else {

      alert('Пожалуйста, исправьте ошибки в форме.');
    }
  };

  return (
    <main className="main">
      <form onSubmit={handleSubmit} className="form">
        <h1>Берег у моря</h1>
        <div className="formGroup">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => handleFullNameChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="Бугаев Артём"
            required
          />
          <label htmlFor="fullName" className="label sr-only">ФИО</label>
          {fullNameError && <p className="error">{fullNameError}</p>}
        </div>
        <div className="formGroup">
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => handleDateOfBirthChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="01.01.1990"
            required
          />
          <label htmlFor="dateOfBirth"className="label sr-only">Дата рождения</label>
          {dateOfBirthError && <p className="error">{dateOfBirthError}</p>}
        </div>
        <div className="formGroup">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="+7-900-000-00-38"
            required
          />
          <label htmlFor="phoneNumber" className="label sr-only">Номер телефона</label>
          {phoneNumberError && <p className="error">{phoneNumberError}</p>}
        </div>
        <div className="formGroup">
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => handleTimeChange(e.target.value)}
            onBlur={handleBlur}
          />
          <label htmlFor="time" className="label sr-only">Время</label>
          {timeError && <p className="error">{timeError}</p>}
        </div>
        <button type="submit">Отправить</button>
      </form>
      {submitMessage && <p className="success">{submitMessage}</p>}
    </main>
  );
};

export default MainForm;