import Header from "@/Components/Header/header";
import PrimaryButton from "@/Components/PrimaryButton/primaryButton";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

import "./interviewPreview.scss";

export default function InterviewPreview({ previewPageInfo }) {
    return (
        <div className="preview">
            <Head title="Interview Preview" />
            <Header />
            <div className="preview__container">
                <div className="preview-card">
                    <div className="preview-card__top">
                        <h1 className="preview-card__title">
                            {previewPageInfo.name}
                        </h1>
                        <h2 className="preview-card__subtitle">
                            Тренировочное собеседование
                        </h2>
                    </div>
                    <div className="preview-card__main">
                        <div className="preview-card__infoblock infoblock">
                            <div className="infoblock__icon">
                                <img
                                    src="/img/previewIcons/question.svg"
                                    alt="question"
                                />
                            </div>
                            <div className="infoblock__text">
                                <span className="infoblock__title">
                                    {previewPageInfo.count} вопросов
                                </span>
                                <div className="infoblock__subtitle">
                                    Тренировочное собеседование состоит из
                                    вопросов персонального, ситуационного и
                                    технического характера.
                                </div>
                            </div>
                        </div>
                        <div className="preview-card__infoblock infoblock">
                            <div className="infoblock__icon">
                                <img
                                    src="/img/previewIcons/cloud.svg"
                                    alt="cloud"
                                />
                            </div>
                            <div className="infoblock__text">
                                <span className="infoblock__title">
                                    Продумывайте и проговаривайте ответы
                                </span>
                                <div className="infoblock__subtitle">
                                    Рекомендуем практиковаться в ответах
                                    на вопросы, произнося их вслух. Во время
                                    решения задач также озвучивайте свои мысли
                                    и ход решения.
                                </div>
                            </div>
                        </div>
                        <div className="preview-card__infoblock infoblock">
                            <div className="infoblock__icon">
                                <img
                                    src="/img/previewIcons/check.svg"
                                    alt="check"
                                />
                            </div>
                            <div className="infoblock__text">
                                <span className="infoblock__title">
                                    Проверяйте себя
                                </span>
                                <div className="infoblock__subtitle">
                                    Сравнивайте свой ответ с предложенным, нажав
                                    на кнопку «Смотреть ответ».
                                </div>
                            </div>
                        </div>
                        <div className="preview-card__infoblock infoblock">
                            <div className="infoblock__icon">
                                <img
                                    src="/img/previewIcons/favourites.svg"
                                    alt="favourites"
                                />
                            </div>
                            <div className="infoblock__text">
                                <span className="infoblock__title">
                                    Сохраняйте вопросы в избранное
                                </span>
                                <div className="infoblock__subtitle">
                                    Сложные вопросы добавляйте в избранное,
                                    чтобы вернуться к ним позже еще раз.
                                </div>
                            </div>
                        </div>
                        <div className="preview-card__start">
                            <Link
                                href={route(
                                    previewPageInfo.url,
                                    previewPageInfo.id
                                )}
                                id={previewPageInfo.id}
                            >
                                <PrimaryButton>
                                    <svg
                                        width="13"
                                        height="15"
                                        viewBox="0 0 13 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.5 12.0439V2.07727C1.5 1.28701 2.37344 0.809004 3.03905 1.23499L11.3446 6.55052C11.9808 6.95771 11.9532 7.89622 11.2941 8.2653L2.9886 12.9164C2.32202 13.2897 1.5 12.8079 1.5 12.0439Z"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    Начать собеседование
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="preview-recomendation">
                    <img src="/img/previewIcons/book.svg" alt="book" />
                    <div className="preview-recomendation__text-cont">
                        <div className="preview-recomendation__text">
                            Перед началом собеседования рекомендуем ознакомиться
                            с 
                            <Link className="preview-recomendation__textlink">
                                гайдом по подготовке.
                            </Link>
                            В нем собрана информация о том, какие бывают этапы
                            отбора в различных компаниях, для чего они нужны,
                            с кем предстоит пообщаться, а также много
                            практических советов.
                        </div>
                        <Link className="preview-recomendation__link">
                            Читать гайд
                            <div className="preview-recomendation__link-arrow"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
