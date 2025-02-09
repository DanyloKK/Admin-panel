import InputLoginForm from "../InputLoginForm/InputLoginForm.jsx";
import { Field } from "react-final-form";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import styles from "./UserForm.module.css";
import logo from "../../assets/img/Rozetka-logo.svg";

const UserForm = (props) => {
    const { handleSubmit } = props;
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordHide = () => {
        setShowPassword((prevShow) => !prevShow);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.data__form} method="POST">
            <div>
                <img className={styles.data__form__img} src={logo} alt="logo" />
            </div>
            <Field
                component={InputLoginForm}
                name="username"
                label="Username"
            />
            <Field
                component={InputLoginForm}
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handlePasswordHide} edge="end">
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Button variant="contained" color="success" type="submit" className={styles.data__form__button}>
                Login
            </Button>
        </form>
    );
};

export default UserForm;