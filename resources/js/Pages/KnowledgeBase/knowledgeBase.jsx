import Dropdown from "@/Components/Dropdown/dropdown";
import Header from "@/Components/Header/header";
import Popup from "@/Components/Popup/popup";
import { Head } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useState } from "react";

import "./knowledgeBase.scss";

export default function KnowledgeBase(professions) {
    const [questionsArr, setQuestionsArr] = useState([]);
    const [isFavQuest, setIsFavQuest] = useState(0);
    const [popupActive, setPopupActive] = useState(false);
    const [target, setTarget] = useState({});

    const options = [];

    for (let i = 0; i < professions.professions.length; i++) {
        let item = professions.professions[i];
        options.push(item);
    }

    const onFavoriteClickAdd = (questionId) => {
        axios.get(route("questionFavoriteAdd", questionId)).then((response) => {
            if (response.status === 200) {
                for (let i = 0; i < questionsArr.length; i++) {
                    if (questionsArr[i].questionId === questionId) {
                        questionsArr[i].isFavorite = 1;
                        setIsFavQuest(1);
                        questionsArr[i].favoriteId = response.data;
                    }
                }
            }
        });
    };

    const onFavoriteClickDelete = (favoriteId) => {
        axios.get(route("questionFavoriteDel", favoriteId)).then((response) => {
            if (response.status === 200) {
                for (let i = 0; i < questionsArr.length; i++) {
                    if (questionsArr[i].favoriteId === favoriteId) {
                        questionsArr[i].isFavorite = 0;
                        setIsFavQuest(0);
                        questionsArr[i].favoriteId = 0;
                    }
                }
            }
        });
    };

    return (
        <div className="knowledge-base">
            <Head title="Knowledge Base" />
            <Header />
            <h1 className="knowledge-base__title">База знаний</h1>
            <p className="knowledge-base__subtitle">
                Знаете вопрос, который могут задать на собеседовании, но его нет
                в базе?
                <span className="knowledge-base__link">
                    Пополнить базу знаний
                </span>
            </p>
            <div className="knowledge-base__container">
                <div className="knowledge-base__professions">
                    <Dropdown
                        placeHolder="Выберите профессию"
                        options={options}
                        isSearchable
                        toChild={questionsArr}
                        sendToParent={setQuestionsArr}
                    ></Dropdown>
                    <div className="knowledge-base__professions-found">
                        {questionsArr.length !== 0
                            ? `Найдено вопросов: ${questionsArr.length}`
                            : ""}
                    </div>
                </div>
                <div className="knowledge-base__questions">
                    {questionsArr !== []
                        ? questionsArr.map((question) => (
                              <div
                                  className="knowledge-base__wrapper"
                                  key={question.questionId}
                                  id={question.questionId}
                                  onClick={(e) => {
                                      setTarget(question);
                                      setPopupActive(!popupActive);
                                  }}
                              >
                                  <div className="knowledge-base__question">
                                      <div className="knowledge-base__question-top">
                                          <div className="knowledge-base__question-top-tag">
                                              {question.category}
                                          </div>
                                          {question.isFavorite === 0 ? (
                                              <div className="knowledge-base__question-top-favourites">
                                                  <button
                                                      className="knowledge-base__question-top-favourites__btn"
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          onFavoriteClickAdd(
                                                              question.questionId,
                                                              question.favoriteId
                                                          );
                                                      }}
                                                  >
                                                      <div className="knowledge-base__question-top-favourites__icon">
                                                          <img
                                                              src="/img/previewIcons/emptyFavourites.svg"
                                                              alt="favourites"
                                                              width="16px"
                                                              height="15px"
                                                          />
                                                      </div>
                                                  </button>
                                              </div>
                                          ) : (
                                              <div className="knowledge-base__question-top-favourites">
                                                  <button
                                                      className="knowledge-base__question-top-favourites__btn"
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          onFavoriteClickDelete(
                                                              question.favoriteId
                                                          );
                                                      }}
                                                  >
                                                      <div className="knowledge-base__question-top-favourites__icon">
                                                          <img src="/img/previewIcons/fillFavourites.svg" />
                                                      </div>
                                                  </button>
                                              </div>
                                          )}
                                      </div>
                                      <div className="knowledge-base__question__body">
                                          {question.question.length > 53
                                              ? question.question.substring(
                                                    0,
                                                    question.question.length -
                                                        question.question
                                                            .length /
                                                            3
                                                ) + "..."
                                              : question.question}
                                      </div>
                                  </div>
                              </div>
                          ))
                        : ""}
                    <Popup
                        active={popupActive}
                        setActive={setPopupActive}
                        category={target.category}
                        question={target.question}
                        answer={target.answer}
                    />
                </div>
            </div>
        </div>
    );
}
