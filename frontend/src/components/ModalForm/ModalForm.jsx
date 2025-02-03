import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ModalFormInput from "../ModalFormInput/ModalFormInput.jsx";
import {Field} from "react-final-form";
import ModalTextArea from "../ModalTextArea/ModalTextArea.jsx";
import styles from "./ModalForm.module.css";
import CloseIcon from '@mui/icons-material/Close';

const ModalForm = ({handleModalClose, handleSubmit}) => {

    return (
        <div>
            <div className={styles.modal__title__block}>
                <h2 className={styles.modal__title}>Add/Edit goods</h2>
                <CloseIcon onClick={handleModalClose} sx={{color: 'red', fontSize: 40, marginTop: 1, marginRight: 2}}/>
            </div>
            <form onSubmit={handleSubmit} className={styles.modal__form} method="POST" encType="multipart/form-data" noValidate>
                <Field
                    className={styles.modal__input}
                    component={ModalFormInput}
                    name="category"
                    label="Category"
                />
                <Field
                    className={styles.modal__input}
                    component={ModalFormInput}
                    name="name"
                    label="Name"
                />
                <Field
                    className={styles.modal__input}
                    component={ModalFormInput}
                    name="quantity"
                    label="Quantity"
                />
                <Field
                    className={styles.modal__input}
                    component={ModalFormInput}
                    label="Price"
                    name="price"

                />
                <Field
                    className={styles.modal__input}
                    component={ModalFormInput}
                    label="Image"
                    name="image"
                    type="file"

                />
                <Field
                    className={styles.modal__text__area}
                    component={ModalTextArea}
                    name="textArea"
                />
                <Stack className={styles.modal__button__block}>
                    <Button
                        onClick={handleModalClose}
                        variant="contained"
                        color="success"
                        sx={{
                            backgroundColor: '#B0B0B0',
                            color: '#fff',
                        }}
                    >
                        Cancel
                    </Button>
                    <Button  variant="contained" color="success" type="submit">
                        Submit
                    </Button>
                </Stack>

            </form>
        </div>


    );
}
export default ModalForm;