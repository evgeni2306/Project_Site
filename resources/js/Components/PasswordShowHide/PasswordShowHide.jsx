import React, { Component, useState } from 'react';
import TextInput from '../TextInput/TextInput';

export default function PasswordShowHide() {
  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  return (
    <div>
      <input
          type={isShown ? "text" : "password"}
          name="password"
          placeholder="Пароль"
          className="form__input"
          required
      />
      <button 
        onClick={togglePassword}>Show / Hide</button>
    </div>
  );
}
