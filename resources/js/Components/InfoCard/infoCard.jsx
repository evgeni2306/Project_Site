import React from 'react';
import { Link } from '@inertiajs/inertia-react';

import './infoCard.scss';

export default function InfoCard(data) {

    let info = data.data;

    return (
        <div className="info-card">
            {info.map(card => <Link href={route(card.url, card.id)} key={card.id}>
                <div className="info-card__container">
                    <div className="info-card__name">{card.name}</div>
                </div>
            </Link>)}
        </div>
    )
}