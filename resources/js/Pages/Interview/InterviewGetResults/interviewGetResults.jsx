import Header from "@/Components/Header/header";
import PrimaryButton from "@/Components/PrimaryButton/primaryButton";
import SecondaryButton from "@/Components/SecondaryButton/secondaryButton";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./interviewGetResults.scss";

export default function InterviewGetResults(results) {
    let res = results.results;

    let done = Math.round(
        (res.countRight * 100) / (res.countRight + res.countWrong)
    );
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        };

        setStyle(newStyle);
    }, 1000);
    console.log(done);

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
                            <div className="percent-count">{done}%</div>
                        </div>
                    </div>
                </div>
                <h2 className="results-page__title-sec">
                    Вам следует обратить внимание на эти вопросы
                </h2>
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
                                <div className="results-page__question-top-favourites">
                                    <div className="results-page__question-top-favourites__icon">
                                        <img
                                            src="/img/previewIcons/favourites.svg"
                                            alt="favourites"
                                            width="16px"
                                            height="15px"
                                        />
                                    </div>
                                    <button className="results-page__question-top-favourites__btn">
                                        Добавить в избранное
                                    </button>
                                </div>
                            </div>
                            <div className="results-page__question__body">
                                {wrongQuestion.question}
                            </div>
                        </div>
                    ))}
                </div>
                {/* <Link href={route("")}> */}
                <PrimaryButton>
                    {/* <img src="/img/return.svg" /> */}
                    Попробовать еще раз
                </PrimaryButton>
                {/* </Link> */}
            </div>
        </div>
    );
}
