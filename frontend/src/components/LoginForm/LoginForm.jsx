import React from 'react';
import {Form} from 'react-final-form';
import UserForm from "../UserForm/UserForm.jsx";
import {validate} from "../../validators/validity.js";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {createUser} from "../../../redux/formSlicer/authReducer.js";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        dispatch(createUser(values))
            .unwrap()
            .then(() => {
                // Перенаправление на другую страницу после успешной регистрации
                navigate('/main/content');
            })
            .catch((error) => {
                console.log('Ошибка при отправке данных:', error);
            });
    }
    return (
        <Form
            initialValues={{username: "", password: ""}}
            onSubmit={handleSubmit}
            validate={validate}
            render={UserForm}/>
    );
}
export default LoginForm