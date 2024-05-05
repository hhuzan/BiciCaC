const validarCorreoElectronico = (correo) => {
    // Expresión regular para validar el formato de un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

export default validarCorreoElectronico;