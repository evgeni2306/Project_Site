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
    const [isFav, setIsFav] = useState(0);

    const toggleShow = () => {
        setAnswerIsShown(!answerIsShown);
    };

    const onBtnClick = (answer) => {
        axios.get(`question/answer=${answer}`).then((response) => {
            if (response.status === 200) setNextQuestionIsShown(true);
        });
    };

    const onFavoriteClickAdd = (questionId) => {
        axios.get(route("questionFavoriteAdd", questionId)).then((response) => {
            if (response.status === 200) {
                question.question.isFavorite = 1;
                setIsFav(1);
                question.question.favoriteId = response.data;
            }
        });
    };

    const onFavoriteClickDelete = (favoriteId) => {
        axios.get(route("questionFavoriteDel", favoriteId)).then((response) => {
            if (response.status === 200) {
                question.question.isFavorite = 0;
                setIsFav(0);
                question.question.favoriteId = 0;
            }
        });
    };

    console.log(question.question.isFavorite);

    return (
        <div className="question-page">
            <Head title="Interview Question" />
            <Header />
            <div className="question-page__header">
                <div className="question-page__header-title">
                    {question.question.profName}
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
                                {question.question.isFavorite === 0 ? (
                                    <div className="question__top-favourites">
                                        <div className="question__top-favourites__icon">
                                            <svg
                                                width="16"
                                                height="15"
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.7785 23.4037C19.1401 23.415 19.4892 23.2667 19.7342 22.9975C19.9792 22.728 20.0963 22.3644 20.0553 22.0008L19.2663 15.1581L23.8815 10.0912C24.0822 9.87096 24.1982 9.58571 24.2098 9.28649C24.2212 8.98755 24.1271 8.69414 23.9441 8.4587C23.7611 8.22357 23.5015 8.06186 23.2113 8.00242L16.5304 6.64347L13.1919 0.64253C13.0465 0.381467 12.814 0.181299 12.536 0.0775749C12.2581 -0.0258583 11.9527 -0.0258583 11.6747 0.0775749C11.3968 0.181299 11.1643 0.381467 11.0189 0.64253L7.6804 6.64347L0.999427 8.00242C0.709229 8.06186 0.44962 8.22356 0.266645 8.4587C0.0836698 8.69411 -0.0104397 8.98752 0.000920285 9.28649C0.0125749 9.58572 0.128827 9.87068 0.329577 10.0909L4.9448 15.1578L4.15579 22.0005C4.12199 22.2977 4.19338 22.5978 4.35799 22.8463C4.52261 23.0951 4.7694 23.2764 5.05406 23.358C5.33873 23.4395 5.64291 23.4159 5.91214 23.2915L12.1054 20.4172L18.2986 23.2915C18.4495 23.3609 18.6127 23.399 18.7785 23.4037ZM17.3235 20.0643L12.6249 17.8875C12.2951 17.7345 11.9157 17.7348 11.5859 17.8878L6.88734 20.0646L7.4861 14.8733C7.52776 14.5091 7.41063 14.1449 7.16501 13.8751L3.66393 10.0305L8.73109 9.00432C9.08684 8.93207 9.39395 8.70684 9.57172 8.38722L12.1054 3.82913L14.6392 8.38692C14.8169 8.70655 15.124 8.93206 15.4798 9.00432L20.547 10.0305L17.0459 13.8748C16.8002 14.1443 16.6831 14.5091 16.7248 14.873L17.3235 20.0643Z"
                                                    fill="#345CEB"
                                                />
                                            </svg>
                                        </div>
                                        <button
                                            className="question__top-favourites__btn"
                                            onClick={() => {
                                                onFavoriteClickAdd(
                                                    question.question
                                                        .questionId,
                                                    question.question.favoriteId
                                                );
                                            }}
                                        >
                                            Добавить в избранное
                                        </button>
                                    </div>
                                ) : (
                                    <div className="question__top-favourites">
                                        <div className="question__top-favourites__icon">
                                            <img src="/img/previewIcons/fillFavourites.svg" />
                                        </div>
                                        <button
                                            className="question__top-favourites__btn"
                                            onClick={() => {
                                                onFavoriteClickDelete(
                                                    question.question.favoriteId
                                                );
                                            }}
                                        >
                                            Добавлено в избранное
                                        </button>
                                    </div>
                                )}
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
                            {question.question.isFavorite === 0 ? (
                                <div className="question__top-favourites">
                                    <div className="question__top-favourites__icon">
                                        <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.7785 23.4037C19.1401 23.415 19.4892 23.2667 19.7342 22.9975C19.9792 22.728 20.0963 22.3644 20.0553 22.0008L19.2663 15.1581L23.8815 10.0912C24.0822 9.87096 24.1982 9.58571 24.2098 9.28649C24.2212 8.98755 24.1271 8.69414 23.9441 8.4587C23.7611 8.22357 23.5015 8.06186 23.2113 8.00242L16.5304 6.64347L13.1919 0.64253C13.0465 0.381467 12.814 0.181299 12.536 0.0775749C12.2581 -0.0258583 11.9527 -0.0258583 11.6747 0.0775749C11.3968 0.181299 11.1643 0.381467 11.0189 0.64253L7.6804 6.64347L0.999427 8.00242C0.709229 8.06186 0.44962 8.22356 0.266645 8.4587C0.0836698 8.69411 -0.0104397 8.98752 0.000920285 9.28649C0.0125749 9.58572 0.128827 9.87068 0.329577 10.0909L4.9448 15.1578L4.15579 22.0005C4.12199 22.2977 4.19338 22.5978 4.35799 22.8463C4.52261 23.0951 4.7694 23.2764 5.05406 23.358C5.33873 23.4395 5.64291 23.4159 5.91214 23.2915L12.1054 20.4172L18.2986 23.2915C18.4495 23.3609 18.6127 23.399 18.7785 23.4037ZM17.3235 20.0643L12.6249 17.8875C12.2951 17.7345 11.9157 17.7348 11.5859 17.8878L6.88734 20.0646L7.4861 14.8733C7.52776 14.5091 7.41063 14.1449 7.16501 13.8751L3.66393 10.0305L8.73109 9.00432C9.08684 8.93207 9.39395 8.70684 9.57172 8.38722L12.1054 3.82913L14.6392 8.38692C14.8169 8.70655 15.124 8.93206 15.4798 9.00432L20.547 10.0305L17.0459 13.8748C16.8002 14.1443 16.6831 14.5091 16.7248 14.873L17.3235 20.0643Z"
                                                fill="#345CEB"
                                            />
                                        </svg>
                                    </div>
                                    <button
                                        className="question__top-favourites__btn"
                                        onClick={() => {
                                            onFavoriteClickAdd(
                                                question.question.questionId,
                                                question.question.favoriteId
                                            );
                                        }}
                                    >
                                        Добавить в избранное
                                    </button>
                                </div>
                            ) : (
                                <div className="question__top-favourites">
                                    <div className="question__top-favourites__icon">
                                        <img src="/img/previewIcons/fillFavourites.svg" />
                                    </div>
                                    <button
                                        className="question__top-favourites__btn"
                                        onClick={() => {
                                            onFavoriteClickDelete(
                                                question.question.favoriteId
                                            );
                                        }}
                                    >
                                        Добавлено в избранное
                                    </button>
                                </div>
                            )}
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
