import React from 'react';

export default function PrimaryButton({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={className}
            disabled={processing}
        >
            {children}
        </button>
    );
}
