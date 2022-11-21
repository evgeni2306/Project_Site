import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header/header";
import InfoCard from "@/Components/InfoCard/infoCard";

import "./interviewProfessions.scss";

export default function InterviewProfessions({ professions }) {
    return (
        <div className="professions">
            <Head title="Interview Professions" />
            <Header />
            <h1 className="professions__title">Выберите профессию</h1>
            <InfoCard data={professions} />
        </div>
    );
}
