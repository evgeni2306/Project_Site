import React from "react";
import "./popup.scss";

const Popup = (props) => {
    return (
        <div
            className={props.active ? "popup active" : "popup"}
            onClick={() => props.setActive(false)}
        >
            <div
                className={
                    props.active ? "popup__content active" : "popup__content"
                }
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    className="popup__close-btn"
                    src="/img/closePopup.svg"
                    alt=""
                    onClick={() => props.setActive(false)}
                />
                <div className="popup__top">
                    <div className="popup__top-tag">{props.category}</div>
                </div>
                <div className="popup__body">
                    <div className="popup__body-quest">{props.question}</div>
                    <div className="popup__body-answer">{props.answer}</div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
