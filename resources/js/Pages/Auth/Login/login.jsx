import React, { useEffect } from "react";
import InputError from "@/Components/InputError/InputError";
import PrimaryButton from "@/Components/PrimaryButton/primaryButton";
import TextInput from "@/Components/TextInput/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import PasswordShowHide from "@/Components/PasswordShowHide/passwordShowHide";

import "../Register/register.scss";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="container">
            <Head title="Log in" />
            <div className="logo-register">
                <div className="logo-register__wrapper">
                    <img
                        className="logo-register__icon"
                        src="/img/logo.svg"
                        alt="logo"
                    />
                    <span className="logo-register__name">JobInterview</span>
                </div>
            </div>
            {status && <div className="">{status}</div>}
            <div className="form__container">
                <h1 className="register__title">Войти в аккаунт</h1>
                <form className="form" onSubmit={submit}>
                    <TextInput
                        type="text"
                        name="login"
                        value={data.login}
                        placeholder="Логин"
                        className="form__input"
                        handleChange={onHandleChange}
                    />

                    <InputError
                        message={errors.email}
                        className="form__error"
                    />

                    <PasswordShowHide
                        setData={setData}
                        password={data.password}
                    />

                    <InputError
                        message={errors.password}
                        className="form__error"
                    />

                    <PrimaryButton
                        className="primary-button"
                        processing={processing}
                    >
                        Войти
                    </PrimaryButton>
                </form>
                <div className="register__to-auth">
                    Еще нет аккаунта?{" "}
                    <Link
                        className="register__to-auth_link"
                        href={route("registration")}
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
    );
}
