import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header/header';
import InfoCard from '@/Components/InfoCard/infoCard';

import './interviewDirections.scss';

export default function InterviewDirections({directions}) {

    return (
        <div className="directions">
            <Head title="Interview Directions" />
            <Header />
            <h1 className="directions__title">Выберите направление разработки</h1>
            <InfoCard data={directions}/>
        </div>
    )
}
