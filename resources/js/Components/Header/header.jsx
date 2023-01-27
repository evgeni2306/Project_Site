import React from "react";

import "./header.scss";

export default function Header({}) {
    return (
        <div className="header">
            <div className="header__container">
                <div className="logo">
                    <img
                        className="logo__icon"
                        src="/img/logo.svg"
                        alt="logo"
                    />
                    <span className="logo__name">JobInterview</span>
                </div>
                <nav className="header__menu menu">
                    <ul className="menu__list">

                        <li className="menu__item">
                                <a href={route('interviewSphere')}>
                                    <div className="linkItem" >
                                        Тренировочное собеседование
                                    </div>
                                </a>
                        </li>
                        <li className="menu__item">
                            <a href={route('getProfessionsForKnowledgeBase')}>
                                <div className="linkItem" >
                                    База знаний
                                </div>
                            </a>
                        </li>

                    </ul>
                </nav>
                <nav className="header__user">
                    {/*<img*/}
                    {/*    className="header__user-img"*/}
                    {/*    src="/img/user.png"*/}
                    {/*    alt="user"*/}
                    {/*/>*/}
                    {/*<span className="header__user-arrow"></span>*/}
                </nav>
            </div>
        </div>
    );
}
