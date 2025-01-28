import React from 'react';
import {Form, Field} from 'react-final-form';
import UserForm from "../UserForm/UserForm.jsx";
import {validate} from "../../validators/validity.js";
import {useNavigate} from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log(values);
        navigate("/main/content");
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