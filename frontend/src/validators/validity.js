export const validate = (values) => {
    const regPasswordExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]).{8,}$/;
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length <= 3) {
        errors.username = 'Username is too short';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length <= 8) {
        errors.password = 'Password must contain at least 8 characters';
    } else if (!regPasswordExp.test(values.password)) {
        errors.password = 'Password must contain a title letter or at least 1 digit';
    }

    return errors;
};