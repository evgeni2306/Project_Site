import React from 'react';

import './header.scss';

export default function Header({}) {

    return (
        <div className="header">
            <div className="header__container">
                <div className="logo"><span className="logo__icon">логотипчик</span></div>
                <nav className="header__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">База знаний</li>
                        <li className="menu__item">Тренировочное собеседование</li>
                        <li className="menu__item">Гайд по собеседованиям</li>
                    </ul>
                </nav>
                <nav className="header__user">
                    <img className="header__user-img" src="/img/user.png" alt="user" />
                    <span className="header__user-arrow"></span>
                </nav>
            </div>
        </div>
    );
}
