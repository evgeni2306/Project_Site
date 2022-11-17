import React, { useState } from 'react';
import './passwordShowHide.scss'

export default function PasswordShowHide({
  setData,
  password
}) {
  const [isShown, setIsSHown] = useState(false);

  const openEyePath = "img/openEye.svg";
  const closeEyePath = "img/closeEye.svg";  

  const togglePassword = (e) => {
    e.preventDefault();
    setIsSHown((isShown) => !isShown);
  };

  return (
    <div className="password-container">
      <input
          type={isShown ? "text" : "password"}
          name="password"
          placeholder="Пароль"
          value={password} 
          className="form__input"
          onInput={e => setData('password', e.target.value)}
          required
      />
      <button
        className="eye-btn"
        onClick={togglePassword}><img src={isShown ? openEyePath : closeEyePath}/></button>
    </div>
  );
}
