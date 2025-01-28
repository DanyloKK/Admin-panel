export const validateAll = (values) => {
    const errors = {};

    if (!values.category) {
        errors.category = 'Выберите категорию';
    } else if (values.category.length <= 1) {
        errors.category = 'Категория слишком короткая';
    }


    if (!values.name) {
        errors.name = 'Введите имя';
    } else if (values.name.length < 2) {
        errors.name = 'Имя должно содержать не менее 2 символов';
    }


    if (!values.quantity) {
        errors.quantity = 'Введите количество товаров';
    } else {
        const quantity = Number(values.quantity);
        if (isNaN(quantity)) {
            errors.quantity = 'Это должно быть число!';
        } else if (quantity <= 0) {
            errors.quantity = 'Количество не может быть отрицательным или нулевым!';
        }
    }

    if (!values.price) {
        errors.price = 'Введите цену';
    } else {
        const price = Number(values.price);
        if (isNaN(price)) {
            errors.price = 'Это должно быть число!';
        } else if (price <= 0) {
            errors.price = 'Цена не может быть отрицательной или нулевой!';
        }
    }

    return errors;
};