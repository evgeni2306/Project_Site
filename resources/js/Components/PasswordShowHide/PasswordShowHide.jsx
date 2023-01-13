import React, { useState } from "react";
import "./passwordShowHide.scss";

export default function PasswordShowHide({ setData, password }) {
    const [isShown, setIsSHown] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setIsSHown((isShown) => !isShown);
    };

    return (
        <div className="password-container">
            <input
                type={isShown ? "text" : "password"}
                name="password"
                placeholder="Пароль"
                value={password}
                className="form__input"
                onInput={(e) => setData("password", e.target.value)}
                required
            />
            <button className="eye-btn" onClick={togglePassword}>
                {isShown ? (
                    <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                            stroke="#66676C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                            stroke="#66676C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.20016 16.8001C1.04668 16.8001 0.893067 16.7414 0.775878 16.6242C0.541504 16.3898 0.541504 16.0102 0.775878 15.7758L16.3759 0.175781C16.6103 -0.0585925 16.9899 -0.0585925 17.2243 0.175781C17.4587 0.410155 17.4587 0.789838 17.2243 1.02422L1.62431 16.6242C1.50726 16.7415 1.35364 16.8001 1.20016 16.8001Z"
                            fill="#66676C"
                        />
                        <path
                            d="M15.3757 4.42464L12.4452 7.35528C12.5454 7.68594 12.6004 8.03643 12.6004 8.39993C12.6004 10.3881 10.9886 11.9999 9.0004 11.9999C8.6369 11.9999 8.28657 11.9449 7.95575 11.8447L5.51196 14.2886C6.59546 14.7481 7.77132 14.9999 9.00054 14.9999C13.0401 14.9999 16.5064 12.2801 18.0005 8.39992C17.4074 6.85932 16.5032 5.50171 15.3758 4.42449L15.3757 4.42464Z"
                            fill="#66676C"
                        />
                        <path
                            d="M6.45449 10.9458C5.80306 10.2943 5.40007 9.39435 5.40007 8.4002C5.40007 6.41204 7.01191 4.8002 9.00007 4.8002C9.99422 4.8002 10.8942 5.2032 11.5456 5.85462L14.0451 3.35513C12.5721 2.36808 10.846 1.8002 9 1.8002C4.96046 1.8002 1.49417 4.52002 0 8.4002C0.811474 10.5074 2.20447 12.2724 3.9552 13.4453L11.5227 5.8778L6.45449 10.9458Z"
                            fill="#66676C"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}
