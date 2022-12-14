import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header/header';
import SphereDirection from '@/Components/SphereDirection/sphereDirection';

import './interviewSpheres.scss';

export default function InterviewSpheres({spheres}) {

    return (
        <div className="spheres">
            <Head title="Interview Spheres" />
            <Header />
            <h1 className="spheres__title">Выберите IT-сферу, в которой хотите пройти собеседование</h1>
            <SphereDirection spheres={spheres} />
        </div>
    );
}
