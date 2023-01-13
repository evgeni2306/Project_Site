import Header from "@/Components/Header/header";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./knowledgeBase.scss";

export default function KnowledgeBase(professions) {
    let names = professions.professions.map((profession) => {
        return profession.name;
    });

    console.log(names);

    const options = names;
    const defaultOption = "Выберите профессию";
    const arrowClosed = <span className="dropdown__arrow-closed" />;
    const arrowOpen = <span className="dropdown__arrow-open" />;

    return (
        <div className="knowledge-base">
            <Head title="Knowledge Base" />
            <Header />
            <h1 className="knowledge-base__title">База знаний</h1>
            <div className="knowledge-base__container">
                <div className="knowledge-base__professions">
                    <Dropdown
                        className="dropdown"
                        arrowClassName="dropdown__arrow"
                        controlClassName="dropdown__control"
                        menuClassName="dropdown__menu"
                        arrowClosed={arrowClosed}
                        arrowOpen={arrowOpen}
                        options={options}
                        value={defaultOption}
                    />
                    <div className="knowledge-base__professions-found">
                        Найдено вопросов:
                    </div>
                </div>
                <div className="knowledge-base__questions"></div>
            </div>
        </div>
    );
}
