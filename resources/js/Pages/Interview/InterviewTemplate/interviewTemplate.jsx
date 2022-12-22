import Header from "@/Components/Header/header";
import PrimaryButton from "@/Components/PrimaryButton/primaryButton";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useState } from "react";

import "./interviewTemplate.scss";

export default function InterviewTemplate(templates) {
    const templatesArr = templates.templates;
    const [isDeleted, setIsDeleted] = useState(false);

    const onDeleteClick = () => {
        axios.get(``).then((response) => {
            if (response.status === 200) setIsDeleted(true);
        });
    };

    return (
        <div className="template">
            <Head title="Interview Template" />
            <Header />
            <h1 className="template__title">Симуляция собеседования</h1>
            <p className="template__subtitle">
                Вы можете пройти симуляцию собеседования по одной из выбранных
                ранее профессий или выбрать новую.
            </p>
            <div className="template__container">
                {isDeleted === false ? (
                    <div>
                        {templatesArr.map((template) => (
                            <div className="template__row">
                                <Link
                                    className="template__cell"
                                    href={route(template.url, template.professionId)}
                                    key={template.id}
                                >
                                    <span className="template__cell-name">
                                        {template.name}
                                    </span>
                                    <span className="template__cell-arrow" />
                                </Link>
                                <button
                                    className="template__row-delete"
                                    onClick={() => {
                                        onDeleteClick();
                                    }}
                                >
                                    <img src="/img/basket.svg" alt="basket" />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    ""
                )}
                <div className="template__btn-new">
                    <Link href={route("interviewSphere")}>
                        <PrimaryButton>Выбрать новую профессию</PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
