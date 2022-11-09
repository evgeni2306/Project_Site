import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import Header from '@/Components/Header/header';
import SphereDirection from '@/Components/SphereDirection/sphereDirection';

import './interviewSpheres.scss';

export default function InterviewSpheres({spheres}) {

    return (
        <div className="spheres">
            <Head title="Interview Spheres" />
            <Header />
            <h1 className="spheres__title">Выберите IT-сферу, в котором хотите пройти собеседование</h1>
            {/* <div className="spheres__cards"> */}
                <SphereDirection spheres={spheres} />
            {/* </div> */}

        </div>
    );
}
