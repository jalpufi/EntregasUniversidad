// ===================================================================
// Validación del formulario de registro - Clínica YOYO
// Sigue el mismo patrón del ejemplo de la práctica 4:
// funciones de validación reutilizables + validación en blur y en submit
// ===================================================================

function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
    if (campo.value.trim().length < min || campo.value.trim().length > max) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarCorreo(campo, errorElement, mensaje) {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(campo.value.trim())) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarTelefono(campo, errorElement, mensaje) {
    const telefonoRegex = /^[0-9]{7,10}$/;
    if (!telefonoRegex.test(campo.value.trim())) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarContrasena(campo, errorElement, mensaje) {
    if (campo.value.length < 8) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarConfirmacionContrasena(campoContrasena, campoConfirmar, errorElement, mensaje) {
    if (campoConfirmar.value === '' || campoConfirmar.value !== campoContrasena.value) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarGenero(genero, errorElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarCheckbox(campo, errorElement, mensaje) {
    if (!campo.checked) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function mostrarMensajeExito() {
    Toastify({
        text: "✅ ¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.",
        duration: 4000,
        gravity: "top",
        position: "right",
        style: {
            background: "rgba(39, 75, 70, 0.95)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
}

// Referencias a los campos y a sus respectivos labels de error
function obtenerCamposFormulario() {
    return {
        inputNombres: document.getElementById('nombres'),
        inputApellidos: document.getElementById('apellidos'),
        inputCorreo: document.getElementById('correo'),
        inputTelefono: document.getElementById('telefono'),
        inputEspecialidad: document.getElementById('especialidadInteres'),
        inputFechaNacimiento: document.getElementById('fechaNacimiento'),
        inputContrasena: document.getElementById('contrasena'),
        inputConfirmarContrasena: document.getElementById('confirmarContrasena'),
        inputGenero: document.getElementsByName('genero'),
        inputTerminos: document.getElementById('terminos'),

        errorNombres: document.getElementById('errorNombres'),
        errorApellidos: document.getElementById('errorApellidos'),
        errorCorreo: document.getElementById('errorCorreo'),
        errorTelefono: document.getElementById('errorTelefono'),
        errorEspecialidad: document.getElementById('errorEspecialidad'),
        errorFechaNacimiento: document.getElementById('errorFechaNacimiento'),
        errorContrasena: document.getElementById('errorContrasena'),
        errorConfirmarContrasena: document.getElementById('errorConfirmarContrasena'),
        errorGenero: document.getElementById('errorGenero'),
        errorTerminos: document.getElementById('errorTerminos'),
    };
}

// Función principal que valida todo el formulario (se llama al hacer click en Registrar)
function validarFormulario() {
    const c = obtenerCamposFormulario();

    const nombresValidos = validarLongitud(c.inputNombres, c.errorNombres, 1, 40, 'El nombre debe tener entre 1 y 40 caracteres.');
    const apellidosValidos = validarLongitud(c.inputApellidos, c.errorApellidos, 1, 40, 'El apellido debe tener entre 1 y 40 caracteres.');
    const correoValido = validarCorreo(c.inputCorreo, c.errorCorreo, 'Ingresa un correo electrónico válido.');
    const telefonoValido = validarTelefono(c.inputTelefono, c.errorTelefono, 'Ingresa un teléfono válido (7 a 10 dígitos).');
    const especialidadValida = validarCampoObligatorio(c.inputEspecialidad, c.errorEspecialidad, 'Selecciona una especialidad de interés.');
    const fechaValida = validarCampoObligatorio(c.inputFechaNacimiento, c.errorFechaNacimiento, 'Ingresa tu fecha de nacimiento.');
    const contrasenaValida = validarContrasena(c.inputContrasena, c.errorContrasena, 'La contraseña debe tener al menos 8 caracteres.');
    const confirmacionValida = validarConfirmacionContrasena(c.inputContrasena, c.inputConfirmarContrasena, c.errorConfirmarContrasena, 'Las contraseñas no coinciden.');
    const generoValido = validarGenero(c.inputGenero, c.errorGenero, 'Selecciona un género.');
    const terminosValidos = validarCheckbox(c.inputTerminos, c.errorTerminos, 'Debes aceptar los términos para continuar.');

    if (nombresValidos && apellidosValidos && correoValido && telefonoValido && especialidadValida &&
        fechaValida && contrasenaValida && confirmacionValida && generoValido && terminosValidos) {

        mostrarMensajeExito();
        const formulario = document.getElementById('formularioRegistro');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
            formulario.reset();
        }, 2000);
        return false; // Evita el envío real del formulario (no hay backend)
    } else {
        alert('Por favor, completa correctamente todos los campos obligatorios.');
        return false;
    }
}

// Validación de cada campo al cambiar el foco (blur)
function validarCamposAlCambiarFoco() {
    const c = obtenerCamposFormulario();

    c.inputNombres.addEventListener('blur', () => validarLongitud(c.inputNombres, c.errorNombres, 1, 40, 'El nombre debe tener entre 1 y 40 caracteres.'));
    c.inputApellidos.addEventListener('blur', () => validarLongitud(c.inputApellidos, c.errorApellidos, 1, 40, 'El apellido debe tener entre 1 y 40 caracteres.'));
    c.inputCorreo.addEventListener('blur', () => validarCorreo(c.inputCorreo, c.errorCorreo, 'Ingresa un correo electrónico válido.'));
    c.inputTelefono.addEventListener('blur', () => validarTelefono(c.inputTelefono, c.errorTelefono, 'Ingresa un teléfono válido (7 a 10 dígitos).'));
    c.inputEspecialidad.addEventListener('blur', () => validarCampoObligatorio(c.inputEspecialidad, c.errorEspecialidad, 'Selecciona una especialidad de interés.'));
    c.inputFechaNacimiento.addEventListener('blur', () => validarCampoObligatorio(c.inputFechaNacimiento, c.errorFechaNacimiento, 'Ingresa tu fecha de nacimiento.'));
    c.inputContrasena.addEventListener('blur', () => validarContrasena(c.inputContrasena, c.errorContrasena, 'La contraseña debe tener al menos 8 caracteres.'));
    c.inputConfirmarContrasena.addEventListener('blur', () => validarConfirmacionContrasena(c.inputContrasena, c.inputConfirmarContrasena, c.errorConfirmarContrasena, 'Las contraseñas no coinciden.'));
    Array.from(c.inputGenero).forEach(input => input.addEventListener('blur', () => validarGenero(c.inputGenero, c.errorGenero, 'Selecciona un género.')));
    c.inputTerminos.addEventListener('blur', () => validarCheckbox(c.inputTerminos, c.errorTerminos, 'Debes aceptar los términos para continuar.'));
}

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);