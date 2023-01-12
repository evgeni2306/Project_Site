import Header from "@/Components/Header/header";
import PrimaryButton from "@/Components/PrimaryButton/primaryButton";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import "./interviewGetResults.scss";

export default function InterviewGetResults(results) {
    let res = results.results;

    const [style, setStyle] = useState({});

    let done = Math.round(
        (res.countRight * 100) / (res.countRight + res.countWrong)
    );

    const [isFavWrongQuest, setIsFavWrongQuest] = useState(0);

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        };

        setStyle(newStyle);
    }, 1000);

    const onFavoriteClickAdd = (questionId) => {
        axios.get(route("questionFavoriteAdd", questionId)).then((response) => {
            if (response.status === 200) {
                for (let i = 0; i < res.wrongQuestions.length; i++) {
                    if (res.wrongQuestions[i].questionId === questionId) {
                        res.wrongQuestions[i].isFavorite = 1;
                        setIsFavWrongQuest(1);
                        res.wrongQuestions[i].favoriteId = response.data;
                    }
                }
            }
        });
    };

    const onFavoriteClickDelete = (favoriteId) => {
        axios.get(route("questionFavoriteDel", favoriteId)).then((response) => {
            if (response.status === 200) {
                for (let i = 0; i < res.wrongQuestions.length; i++) {
                    if (res.wrongQuestions[i].favoriteId === favoriteId) {
                        res.wrongQuestions[i].isFavorite = 0;
                        setIsFavWrongQuest(0);
                        res.wrongQuestions[i].favoriteId = 0;
                    }
                }
            }
        });
    };

    return (
        <div className="results-page">
            <Head title="Interview Results" />
            <Header />
            <h1 className="results-page__title">Результат собеседования</h1>
            <div className="results-page__container">
                <div className="results-page__progress">
                    <div className="results-page__progress-top">
                        <div className="results-page__progress-top-name">
                            Правильные ответы
                        </div>
                        <div className="results-page__progress-top-count">
                            {res.countRight}/{res.countRight + res.countWrong}
                        </div>
                    </div>
                    <div className="results-page__progress-bar">
                        <div
                            className="results-page__progress-bar-done"
                            style={style}
                        >
                            <div className="percent-count">
                                {done > 0 ? done + "%" : ""}
                            </div>
                        </div>
                    </div>
                </div>
                {done === 100 ? (
                    ""
                ) : (
                    <h2 className="results-page__title-sec">
                        Вам следует обратить внимание на эти вопросы
                    </h2>
                )}

                <div className="results-page__questions">
                    {res.wrongQuestions.map((wrongQuestion) => (
                        <div
                            className="results-page__question"
                            key={wrongQuestion.questionId}
                        >
                            <div className="results-page__question-top">
                                <div className="results-page__question-top-tag">
                                    {wrongQuestion.category}
                                </div>
                                {wrongQuestion.isFavorite === 0 ? (
                                    <div className="results-page__question-top-favourites">
                                        <div className="results-page__question-top-favourites__icon">
                                            <img
                                                src="/img/previewIcons/favourites.svg"
                                                alt="favourites"
                                                width="16px"
                                                height="15px"
                                            />
                                        </div>
                                        <button
                                            className="results-page__question-top-favourites__btn"
                                            onClick={() => {
                                                onFavoriteClickAdd(
                                                    wrongQuestion.questionId,
                                                    wrongQuestion.favoriteId
                                                );
                                            }}
                                        >
                                            Добавить в избранное
                                        </button>
                                    </div>
                                ) : (
                                    <div className="results-page__question-top-favourites">
                                        <div className="results-page__question-top-favourites__icon">
                                            <img src="/img/previewIcons/fillFavourites.svg" />
                                        </div>
                                        <button
                                            className="results-page__question-top-favourites__btn"
                                            onClick={() => {
                                                onFavoriteClickDelete(
                                                    wrongQuestion.favoriteId
                                                );
                                            }}
                                        >
                                            Добавлено в избранное
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="results-page__question__body">
                                {wrongQuestion.question}
                            </div>
                        </div>
                    ))}
                </div>
                <Link href={route(res.url, res.professionId)}>
                    <PrimaryButton>Попробовать еще раз</PrimaryButton>
                </Link>
            </div>
        </div>
    );
}
