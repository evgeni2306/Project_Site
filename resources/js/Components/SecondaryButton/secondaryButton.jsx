import React from 'react';
import './secondaryButton.scss';

export default function SecondaryButton({ type = '', className = '', processing, children }) {
    return (
        <button
            type={type}
            className="secondary-button"
            disabled={processing}
        >
            {children}
        </button>
    );
}