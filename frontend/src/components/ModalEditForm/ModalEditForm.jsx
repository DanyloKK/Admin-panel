import React, {useContext} from 'react';
import {Form} from 'react-final-form';
import ModalForm from '../ModalForm/ModalForm.jsx';
import {validateAll} from "../../validators/validateGoods.js";
import {fetchPosts} from "../../../redux/formSlicer/formSlicer.js";
import {formUpdate} from "../../../redux/formSlicer/formSlicer.js";
import {useDispatch} from "react-redux";
import {ModalContext} from "../../context/modalContext.jsx";

const ModalEditForm = ({handleModalClose}) => {
    const {editData,formData,productId} = useContext(ModalContext);
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log("Форма сабмитится");
        console.log(values);
        if(editData){
            dispatch(formUpdate({ id: productId, values: values }))
            console.log(productId,values)
        }else if(!editData){
            dispatch(fetchPosts(values))
        }
        handleModalClose()
    }
    return (
        <Form
            initialValues={{
                category: editData ? formData.category : "",
                name: editData ? formData.name : "",
                quantity: editData ? formData.quantity : "",
                price: editData ? formData.price : "",
                image: editData ? formData.image : "",
            }}
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