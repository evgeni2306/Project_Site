import Header from "@/Components/Header/header";
import PrimaryButton from "@/Components/PrimaryButton/primaryButton";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useState } from "react";

import "./interviewTemplate.scss";

export default function InterviewTemplate(templates) {
    const templatesArr = templates.templates;
    const [items, setItems] = useState([...templatesArr]);

    const onDeleteClick = (id) => {
        axios.get(route("deleteTemplate", id)).then((response) => {
            if (response.status === 200)
                setItems((prevState) => prevState.filter((el) => el.id !== id));
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
                <div>
                    {items.map((template) => (
                        <div className="template__row" key={template.id}>
                            <Link
                                className="template__cell"
                                href={route(
                                    template.url,
                                    template.professionId
                                )}
                            >
                                <span className="template__cell-name">
                                    {template.name}
                                </span>
                                <span className="template__cell-arrow" />
                            </Link>
                            <button
                                className="template__row-delete"
                                onClick={() => {
                                    onDeleteClick(template.id);
                                }}
                            >
                                <img src="/img/basket.svg" alt="basket" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="template__btn-new">
                    <Link href={route("interviewSphere")}>
                        <PrimaryButton>Выбрать новую профессию</PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
