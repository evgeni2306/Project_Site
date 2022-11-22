import React from "react";
import "./primaryButton.scss";

export default function PrimaryButton({
    type = "submit",
    className = "",
    processing,
    children,
}) {
    return (
        <button type={type} className="primary-button" disabled={processing}>
            {children}
        </button>
    );
}
