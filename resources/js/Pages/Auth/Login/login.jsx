import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError/InputError';
import PrimaryButton from '@/Components/PrimaryButton/PrimaryButton';
import TextInput from '@/Components/TextInput/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status,  }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => { 
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="container">
            <Head title="Log in" />
            <div className="logo"><span className="logo__icon">логотипчик</span></div>
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

                    <InputError message={errors.email} className="form__error" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Пароль"
                        className="form__input"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="form__error" />

                    <PrimaryButton className="submit-button" processing={processing}>
                        Войти
                    </PrimaryButton>
                </form>
                <div className="register__to-auth">Еще нет аккаунта? <Link className="register__to-auth_link" href={route('register')}>Зарегистрироваться</Link></div>
            </div>
        </div>
    );
}
