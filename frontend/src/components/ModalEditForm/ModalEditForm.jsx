import React from 'react';
import {Form} from 'react-final-form';
import ModalForm from '../ModalForm/ModalForm.jsx';
import {validateAll} from "../../validators/validateGoods.js";
import {fetchPosts} from "../../../redux/formSlicer/formSlicer.js";
import {useDispatch} from "react-redux";

const ModalEditForm = ({handleModalClose}) => {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log("Форма сабмитится");
        console.log(values);
        dispatch(fetchPosts(values))
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
                    image: "",
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