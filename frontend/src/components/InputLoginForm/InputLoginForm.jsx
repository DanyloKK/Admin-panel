import TextField from '@mui/material/TextField';
import styles from "./InputLoginForm.module.css"

const InputLoginForm = ({ label, input, meta, name, ...rest }) => {
    return (
        <TextField
            {...input} // передаем input, который включает в себя value, onChange и onBlur
            label={label}
            className={styles.data__form__field}
            name={name}
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error ? meta.error : ''}
            {...rest} // передаем другие пропсы, такие как type или другие
        />
    );
};
export default InputLoginForm;