// Información extraida de https://firebase.google.com/docs/auth/admin/errors?hl=es-419

const manejoErrores = (errorCode,errorDescription) => {
    let descripcionError="";
    switch (errorCode) {
        case "auth/claims-too-large":
            descripcionError = "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.";
            break;
        case "auth/ -already-exists":
            descripcionError = "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.";
            break;
        case "auth/id-token-expired":
            descripcionError = "El token de ID de Firebase que se proporcionó está vencido.";
            break;
        case "auth/id-token-revoked":
            descripcionError = "Se revocó el token de ID de Firebase.";
            break;
        case "auth/insufficient-permission":
            descripcionError = "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de Authentication solicitado. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar una credencial con los permisos apropiados y usarla a fin de autenticar los SDK de Admin.";
            break;
        case "auth/internal-error":
            descripcionError = "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud. Para obtener información adicional, revisa la respuesta del servidor de autenticación, que debería estar incluida en el mensaje de error. Si el error persiste, avísanos mediante nuestro canal de asistencia de informe de errores.";
            break;
        case "auth/invalid-argument":
            descripcionError = "Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debe incluir información adicional.";
            break;
        case "auth/invalid-claims":
            descripcionError = "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.";
            break;
        case "auth/invalid-continue-uri":
            descripcionError = "La URL de continuación debe ser una string de URL válida.";
            break;
        case "auth/invalid-creation-time":
            descripcionError = "La hora de creación debe ser una string de fecha en formato UTC válida.";
            break;
        case "auth/invalid-credential":
            descripcionError = "La credencial que se usa para autenticar los SDK de Admin no se puede emplear a fin de realizar la acción deseada. Algunos métodos de autenticación, como createCustomToken() y verifyIdToken(), requieren que los SDK se inicialicen con una credencial de certificado en lugar de un token de actualización o una credencial predeterminada de la aplicación. Consulta Inicializa el SDK para ver documentación sobre cómo autenticar el SDK de Admin con una credencial de certificado.";
            break;
        case "auth/invalid-disabled-field":
            descripcionError = "El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.";
            break;
        case "auth/invalid-display-name":
            descripcionError = "El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.";
            break;
        case "auth/invalid-dynamic-link-domain":
            descripcionError = "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.";
            break;
        case "auth/invalid-email":
            descripcionError = "El valor que se proporcionó para la propiedad del usuario email no es válido. Debe ser una dirección de correo electrónico de string.";
            break;
        case "auth/invalid-email-verified":
            descripcionError = "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.";
            break;
        case "auth/invalid-hash-algorithm":
            descripcionError = "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.";
            break;
        case "auth/invalid-hash-block-size":
            descripcionError = "El tamaño del conjunto de hash debe ser un número válido.";
            break;
        case "auth/invalid-hash-derived-key-length":
            descripcionError = "La longitud de la clave derivada de hash debe ser un número válido.";
            break;
        case "auth/invalid-hash-key":
            descripcionError = "La clave de hash debe ser un búfer de bytes válido.";
            break;
        case "auth/invalid-hash-memory-cost":
            descripcionError = "El costo de la memoria de hash debe ser un número válido.";
            break;
        case "auth/invalid-hash-parallelization":
            descripcionError = "La paralelización de hash debe ser un número válido.";
            break;
        case "auth/invalid-hash-rounds":
            descripcionError = "Las rondas de hash deben ser un número válido.";
            break;
        case "auth/invalid-hash-salt-separator":
            descripcionError = "El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.";
            break;
        case "auth/invalid-id-token":
            descripcionError = "El token de ID que se proporcionó no es un token de ID de Firebase válido.";
            break;
        case "auth/invalid-last-sign-in-time":
            descripcionError = "La hora del último acceso debe ser una string de fecha en formato UTC válida.";
            break;
        case "auth/invalid-page-token":
            descripcionError = "El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.";
            break;
        case "auth/invalid-password":
            descripcionError = "El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres.";
            break;
        case "auth/invalid-password-hash":
            descripcionError = "El hash de contraseñas debe ser un búfer de bytes válidos.";
            break;
        case "auth/invalid-password-salt":
            descripcionError = "La contraseña con sal debe ser un búfer de bytes válido.";
            break;
        case "auth/invalid-phone-number":
            descripcionError = "El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164.";
            break;
        case "auth/invalid-photo-url":
            descripcionError = "El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string.";
            break;
        case "auth/invalid-provider-data":
            descripcionError = "providerData debe ser una serie de objetos UserInfo.";
            break;
        case "auth/invalid-provider-id":
            descripcionError = "providerId debe ser una string del identificador del proveedor compatible válida.";
            break;
        case "auth/invalid-oauth-responsetype":
            descripcionError = "Se debe configurar solo un responseType de OAuth como verdadera.";
            break;
        case "auth/invalid-session-cookie-duration":
            descripcionError = "La duración de la cookie de sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.";
            break;
        case "auth/invalid-uid":
            descripcionError = "El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.";
            break;
        case "auth/invalid-user-import":
            descripcionError = "El registro de usuarios para importar no es válido.";
            break;
        case "auth/maximum-user-count-exceeded":
            descripcionError = "Se excedió la cantidad máxima de usuarios permitidos para importar.";
            break;
        case "auth/missing-android-pkg-name":
            descripcionError = "Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android.";
            break;
        case "auth/missing-continue-uri":
            descripcionError = "Se debe proporcionar una URL de continuación válida en la solicitud.";
            break;
        case "auth/missing-hash-algorithm":
            descripcionError = "Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros.";
            break;
        case "auth/missing-ios-bundle-id":
            descripcionError = "Falta un ID del paquete en la solicitud.";
            break;
        case "auth/missing-uid":
            descripcionError = "Se requiere un identificador uid para la operación actual.";
            break;
        case "auth/missing-oauth-client-secret":
            descripcionError = "El secreto de cliente de la configuración de OAuth es obligatorio para habilitar el flujo de código de OIDC.";
            break;
        case "auth/operation-not-allowed":
            descripcionError = "El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.";
            break;
        case "auth/phone-number-already-exists":
            descripcionError = "Otro usuario ya utiliza el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único.";
            break;
        case "auth/project-not-found":
            descripcionError = "No se encontró ningún proyecto de Firebase para la credencial que se usó para inicializar los SDK de Admin. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar la credencial de tu proyecto y usarla a fin de autenticar los SDK de Admin.";
            break;
        case "auth/reserved-claims":
            descripcionError = "Una o más reclamaciones personalizadas de usuarios que se entregaron a setCustomUserClaims() están reservadas. Por ejemplo, no deben usarse reclamos específicos de OIDC (p. ej., sub, iat, iss, exp, aud o auth_time) como claves para reclamos personalizados.";
            break;
        case "auth/session-cookie-expired":
            descripcionError = "La cookie proporcionada de la sesión de Firebase venció.";
            break;
        case "auth/session-cookie-revoked":
            descripcionError = "Se revocaron las cookies de la sesión de Firebase.";
            break;
        case "auth/too-many-requests":
            descripcionError = "La cantidad de solicitudes supera el máximo permitido.";
            break;
        case "auth/uid-already-exists":
            descripcionError = "Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.";
            break;
        case "auth/unauthorized-continue-uri":
            descripcionError = "El dominio de la URL de continuación no está en la lista blanca. Inclúyelo en la lista en Firebase console.";
            break;
        case "auth/user-not-found":
            descripcionError = "No existe ningún registro de usuario que corresponda al identificador proporcionado.";
            break;
        case "auth/requires-recent-login":  // No estaba documentado
            descripcionError = "Se requiere que vuelva a ingresa a la aplicación"; 
            break;
        case "auth/email-already-in-use":  // No estaba documentado
            descripcionError = "La dirección de correo ya está registrada"; 
            break;
        default:
            descripcionError = "Error no catalogado:" + errorDescription;
            break;
    }
    return descripcionError;
}

export default manejoErrores;