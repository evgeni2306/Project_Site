import React from 'react';
import { Link } from '@inertiajs/inertia-react';

import './header.scss';
import PrimaryButton from '../PrimaryButton/primaryButton';
import SecondaryButton from '../SecondaryButton/secondaryButton';

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
                <div className="header__buttons">
                    <Link href={route('login')}><SecondaryButton>Войти</SecondaryButton></Link>
                    <Link href={route('registration')}><PrimaryButton>Зарегистрироваться</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
}
