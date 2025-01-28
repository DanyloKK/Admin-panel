import React from 'react';
import {Form} from 'react-final-form';
import ModalForm from '../ModalForm/ModalForm.jsx';
import {validateAll} from "../../validators/validateGoods.js";
import {addFormValue} from "../../../redux/formSlicer/formSlicer.js";
import {useDispatch} from "react-redux";

const ModalEditForm = ({handleModalClose}) => {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log("Форма сабмитится");
        console.log(values);
        dispatch(addFormValue(values))
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