import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header/header';
import InfoCard from '@/Components/InfoCard/infoCard';

import './interviewTechnologies.scss';

export default function InterviewTechnologies({technologies}) {

    return (
        <div className="technologies">
            <Head title="Interview Technologies" />
            <Header />
            <h1 className="technologies__title">Выберите технологию</h1>
            <InfoCard data={technologies}/>
        </div>
    )
}
