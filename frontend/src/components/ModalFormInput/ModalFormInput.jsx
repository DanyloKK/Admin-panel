import TextField from "@mui/material/TextField";
import styles from "./ModalFormInput.module.css";

const ModalFormInput = ({label, meta, name, input,...rest}) => {
    return (
        <TextField
            label={label}
            className={styles.modal__input__inner}
            name={name}
            error={Boolean(meta.error && meta.touched)}
            helperText={meta.touched && meta.error ? meta.error : ''}
            {...input}
            {...rest}
        />


    )
}
export default ModalFormInput;