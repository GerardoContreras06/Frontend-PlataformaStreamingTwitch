
export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/;
    return regex.test(username);
}

export const validateUsernameMessage = 'El nombre de usuario debe tener entre 3 y 8 caracteres y no debe contener espacios';