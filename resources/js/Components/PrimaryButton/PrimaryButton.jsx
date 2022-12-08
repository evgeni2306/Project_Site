import React from "react";
import "./primaryButton.scss";

export default function PrimaryButton({
    type = "submit",
    processing,
    children,
    onClick,
}) {
    return (
        <button
            type={type}
            className="primary-button"
            disabled={processing}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
