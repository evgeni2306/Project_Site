import React, { useEffect } from 'react';
import InputError from '@/Components/InputError/InputError';
import PrimaryButton from '@/Components/PrimaryButton/PrimaryButton';
import TextInput from '@/Components/TextInput/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register({errorMessage}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        errorMessage: errorMessage,
        name: '',
        surname: '',
        login: '',
        password: '',
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

        post(route('register'));
    };

    return (
        <div className="container">
            <div className="logo"><span className="logo__icon">логотипчик</span></div>
            <div className="form__container">
                <Head title="Register" />
                <h1 className="register__title">Регистрация</h1>
                <form className="form" onSubmit={submit}>
                    <div className="form__names">

                        <TextInput
                            type="text"
                            name="name"
                            value={data.name}
                            placeholder="Имя"
                            className="form__input name"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError className="form__error" message={errors.name}/>

                        <TextInput
                            type="text"
                            name="surname"
                            value={data.surname}
                            placeholder="Фамилия"
                            className="form__input surname"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError className="form__error" message={errors.surname}/>
                    </div>

                    <TextInput
                        type="text"
                        name="login"
                        value={data.login}
                        placeholder="Логин"
                        className="form__input"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError className="form__error" message={errorMessage}/>

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Пароль"
                        className="form__input"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError className="form__error" message={errors.password}/>

                    <PrimaryButton className="submit-button" processing={processing}>Зарегистрироваться</PrimaryButton>
                </form>
                <div className="register__to-auth">Уже есть аккаунт? <Link className="register__to-auth_link" href={route('login')}>Войти</Link></div>
            </div>
        </div>
    );
}
