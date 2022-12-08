import Header from "@/Components/Header/header";
import PrimaryButton from "@/Components/PrimaryButton/primaryButton";
import SecondaryButton from "@/Components/SecondaryButton/secondaryButton";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./interviewQuestion.scss";

export default function InterviewQuestion(question) {
    const [answerIsShown, setAnswerIsShown] = useState(false);
    const [nextQuestionIsShown, setNextQuestionIsShown] = useState(false);

    const toggleShow = () => {
        setAnswerIsShown(!answerIsShown);
    };

    const onBtnClick = (answer) => {
        axios.get(`question/answer=${answer}`).then((response) => {
            if (response.status === 200) setNextQuestionIsShown(true);
        });
    };

    return (
        <div className="question-page">
            <Head title="Interview Question" />
            <Header />
            <div className="question-page__header">
                <div className="question-page__header-title">
                    Собеседование iOS-разработчик
                </div>
                <div className="question-page__header-progress"></div>
                <div className="question-page__header-btn">
                    <SecondaryButton>Завершить</SecondaryButton>
                </div>
            </div>
            {answerIsShown === false ? (
                <div className="question-page__container">
                    <div className="question-page__question-block question">
                        <img
                            className="question__avatar"
                            src="/img/user.png"
                            alt="interviewer"
                        />
                        <div className="question__container">
                            <div className="question__top">
                                <div className="question__top-tags">
                                    <div className="question__top-tag">
                                        {question.question.category}
                                    </div>
                                </div>
                                <div className="question__top-favourites">
                                    <div className="question__top-favourites__icon">
                                        <img
                                            src="/img/previewIcons/favourites.svg"
                                            alt="favourites"
                                            width="16px"
                                            height="15px"
                                        />
                                    </div>
                                    <button className="question__top-favourites__btn">
                                        Добавить в избранное
                                    </button>
                                </div>
                            </div>
                            <div className="question__body">
                                {question.question.question}
                            </div>
                        </div>
                    </div>
                    <div className="question-page__answer-block answer">
                        <div className="answer__container">
                            <PrimaryButton
                                type="button"
                                onClick={() => toggleShow()}
                            >
                                <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Смотреть правильный ответ
                            </PrimaryButton>
                        </div>
                        <img
                            className="answer__avatar"
                            src="/img/user.png"
                            alt="interviewer"
                        />
                    </div>
                </div>
            ) : (
                <div className="question-page__container">
                    <div className="show-answer">
                        <div className="question__top">
                            <div className="question__top-tags">
                                <div className="question__top-tag">
                                    {question.question.category}
                                </div>
                            </div>
                            <div className="question__top-favourites">
                                <div className="question__top-favourites__icon">
                                    <img
                                        src="/img/previewIcons/favourites.svg"
                                        alt="favourites"
                                        width="16px"
                                        height="15px"
                                    />
                                </div>
                                <button className="question__top-favourites__btn">
                                    Добавить в избранное
                                </button>
                            </div>
                        </div>
                        <div className="question__body">
                            {question.question.question}
                        </div>
                        <div className="show-answer__answer-text">
                            {question.question.answer}
                        </div>
                        {nextQuestionIsShown ? (
                            <div className="show-answer__correct-block">
                                <div className="show-answer__correct-block__title">
                                    Готовы к следующему вопросу?
                                </div>
                                <div className="show-answer__correct-block__buttons">
                                    <Link href={route("interviewQuestion")}>
                                        <PrimaryButton>
                                            <img src="/img/arrow.svg" />
                                            Перейти далее
                                        </PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="show-answer__correct-block">
                                <div className="show-answer__correct-block__title">
                                    Ваш ответ совпал?
                                </div>
                                <div className="show-answer__correct-block__buttons">
                                    <button
                                        className="btn-answer"
                                        onClick={() => {
                                            onBtnClick(false);
                                        }}
                                    >
                                        <img
                                            src="/img/answerNo.svg"
                                            alt="sad"
                                        />
                                        <span className="btn-answer__text">
                                            Нет
                                        </span>
                                    </button>
                                    <button
                                        className="btn-answer"
                                        onClick={() => {
                                            onBtnClick(true);
                                        }}
                                    >
                                        <img
                                            src="/img/answerYes.svg"
                                            alt="happy"
                                        />
                                        <span className="btn-answer__text">
                                            Да
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
