import React from 'react';
import {Form} from 'react-final-form';
import ModalForm from '../ModalForm/ModalForm.jsx';
import {validateAll} from "../../validators/validateGoods.js";

const ModalEditForm = ({handleModalClose}) => {
    const handleSubmit = (values, form) => {
        console.log("Форма сабмитится");
        console.log(values);
        handleModalClose()
    }
    return (
        <Form
            initialValues={
                {
                    category: "",
                    name: "",
                    quantity: "",
                    price: "",
                }
            }
            onSubmit={handleSubmit}
            validate={validateAll}
            render={({handleSubmit}) => (
                <ModalForm
                    handleModalClose={handleModalClose}
                    handleSubmit={handleSubmit}/>
            )}

        />
    )
}
export default ModalEditForm;