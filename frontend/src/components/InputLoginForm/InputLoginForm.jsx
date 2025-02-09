import TextField from '@mui/material/TextField';
import styles from "./InputLoginForm.module.css"
import authSelector from "../../../redux/formSlicer/authSelector.js";
import {useSelector} from "react-redux";

const InputLoginForm = ({ label, input, meta, name, ...rest }) => {
    const selector = useSelector(authSelector.auth)
    return (
        <TextField
            {...input}
            label={label}
            className={styles.data__form__field}
            name={name}
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error ? meta.error : <span className={styles.data__form_login}>{selector}</span> || ''}
            {...rest}
        />
    );
};
export default InputLoginForm;