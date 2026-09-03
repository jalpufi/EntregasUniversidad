function validarCampoObligatorioYLongitud(campo, errorElement, exitoElement, min, max, mensaje) {
    const valor = campo.value.trim();

    // 1. Campo obligatorio
    if (valor === '') {
        errorElement.textContent = 'Este campo es obligatorio';
        exitoElement.textContent = '';
        return false;
    }

    // 2. Longitud
    if (valor.length < min || valor.length > max) {
        errorElement.textContent = mensaje;
        exitoElement.textContent = '';
        return false;
    }

    // 3. Válido
    errorElement.textContent = '';
    exitoElement.textContent = 'Campo válido';
    return true;
}

function validarGenero(genero, errorElement, exitoElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        errorElement.textContent = mensaje;
        exitoElement.textContent = '';

        return false;
    } else {
        errorElement.textContent = '';
        exitoElement.textContent = 'Campo valido';

        return true;
    }
}

function mostrarMensajeExitoPaciente() {
    Toastify({
        text: "¡Registro exitoso!",
        duration: 3000,            // Duración: 3 segundos
        gravity: "top",             // Posición: arriba
        position: "right",          // Alineación: derecha
        style: {
            background: "rgba(0, 128, 0, 0.8)",  // Verde con transparencia
            color: "#fff",                      // Texto blanco
            borderRadius: "12px",               // Esquinas redondeadas
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Sombra ligera
            padding: "12px 20px"               // Más relleno
        },
        stopOnFocus: true, // No desaparecer al pasar el mouse
    }).showToast();
}

function validarFormularioPaciente() {

    const inputNombresPaciente = document.getElementById('nombresPaciente');
    const inputApellidosPaciente = document.getElementById('apellidosPaciente');
    const inputGeneroPaciente = document.getElementsByName('genero');

    const labelErrorNombresPaciente = document.getElementById('errorNombrePaciente');
    const labelErrorApellidosPaciente = document.getElementById('errorApellidoPaciente');
    const labelErrorGeneroPaciente = document.getElementById('errorGenero');

    const labelExitoNombresPaciente = document.getElementById('exitoNombrePaciente');
    const labelExitoApellidosPaciente = document.getElementById('exitoApellidoPaciente');
    const labelExitoGeneroPaciente = document.getElementById('exitoGenero');

    const nombresPacienteValido = validarCampoObligatorioYLongitud(inputNombresPaciente, labelErrorNombresPaciente, labelExitoNombresPaciente, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    const apellidosPacienteValido = validarCampoObligatorioYLongitud(inputApellidosPaciente, labelErrorApellidosPaciente, labelExitoApellidosPaciente, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    const generoPacienteValido = validarGenero(inputGeneroPaciente, labelErrorGeneroPaciente, labelExitoGeneroPaciente, 'El género es obligatorio');

    if (nombresPacienteValido && apellidosPacienteValido && generoPacienteValido) {
        mostrarMensajeExitoPaciente();
        const formulario = document.getElementById('formPaciente');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" })
        setTimeout(() => {
            formulario.reset();
        }, 2000);
        return true;
    } else {
        alert('Por favor, complete correctamente el formulario.');
        return false;
    }
}

function validarCamposAlCambiarFocoPaciente() {

    const inputNombresPaciente = document.getElementById('nombresPaciente');
    const inputApellidosPaciente = document.getElementById('apellidosPaciente');
    const inputGeneroPaciente = document.getElementsByName('genero');

    const labelErrorNombresPaciente = document.getElementById('errorNombrePaciente');
    const labelErrorApellidosPaciente = document.getElementById('errorApellidoPaciente');
    const labelErrorGeneroPaciente = document.getElementById('errorGenero');

    const labelExitoNombresPaciente = document.getElementById('exitoNombrePaciente');
    const labelExitoApellidosPaciente = document.getElementById('exitoApellidoPaciente');
    const labelExitoGeneroPaciente = document.getElementById('exitoGenero');

    inputNombresPaciente.addEventListener('blur', () => validarCampoObligatorioYLongitud(inputNombresPaciente, labelErrorNombresPaciente, labelExitoNombresPaciente, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres'));
    inputApellidosPaciente.addEventListener('blur', () => validarCampoObligatorioYLongitud(inputApellidosPaciente, labelErrorApellidosPaciente, labelExitoApellidosPaciente, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres'));
    Array.from(inputGeneroPaciente).forEach(input => input.addEventListener('blur', () => validarGenero(inputGeneroPaciente, labelErrorGeneroPaciente, labelExitoGeneroPaciente, 'El género es obligatorio')));
}
document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFocoPaciente);