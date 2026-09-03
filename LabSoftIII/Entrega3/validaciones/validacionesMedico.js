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

function validarCampoObligatorio(campo, errorElement, exitoElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        exitoElement.textContent = '';
        return false;
    } else {
        errorElement.textContent = '';
        exitoElement.textContent = 'Campo valido'
        return true;
    }
}

function validarHorarioMedico(inputHoraInicio, inputHoraFin, errorElementInicio, exitoElementInicio, errorElementFin, exitoElementFin) {
    const horaInicio = inputHoraInicio.value;
    const horaFin = inputHoraFin.value;

    let inicioValido = true;
    let finValido = true;

    // Validar Hora Inicio (obligatoria)
    if (horaInicio === '') {
        errorElementInicio.textContent = 'Debe ingresar la hora de inicio';
        exitoElementInicio.textContent = '';
        inicioValido = false;
    } else {
        errorElementInicio.textContent = '';
        exitoElementInicio.textContent = 'Hora válida';
    }

    // Validar Hora Fin (obligatoria)
    if (horaFin === '') {
        errorElementFin.textContent = 'Debe ingresar la hora de fin';
        exitoElementFin.textContent = '';
        finValido = false;
    } else {
        errorElementFin.textContent = '';
        exitoElementFin.textContent = 'Hora válida';
    }

    // Validar coherencia solo si ambas tienen valor
    if (inicioValido && finValido && horaFin <= horaInicio) {
        errorElementFin.textContent = 'La hora fin debe ser mayor a la hora de inicio';
        exitoElementFin.textContent = '';
        finValido = false;
    }

    return inicioValido && finValido;
}

function controlarHabilitacionHoraFin(inputHoraInicio, inputHoraFin) {
    if (inputHoraInicio.value !== '') {
        inputHoraFin.disabled = false;
    } else {
        inputHoraFin.disabled = true;
        inputHoraFin.value = ''; // limpia Hora Fin si borran Hora Inicio
    }
}

function validarBibliografia(campo, errorElement, exitoElement, min, max) {
    const valor = campo.value.trim();

    // 1. Campo obligatorio
    if (valor === '') {
        errorElement.textContent = 'La bibliografía es obligatoria';
        exitoElement.textContent = '';
        return false;
    }

    // 2. Longitud mínima y máxima
    if (valor.length < min || valor.length > max) {
        errorElement.textContent = `La bibliografía debe tener entre ${min} y ${max} caracteres`;
        exitoElement.textContent = '';
        return false;
    }

    errorElement.textContent = '';
    exitoElement.textContent = 'Campo valido';
    return true;
}

function mostrarMensajeExito() {
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

function validarFormularioMedico() {

    const inputNombresMedicos = document.getElementById('nombreMedico');
    const inputApellidosMedicos = document.getElementById('apellidoMedico');
    const inputEspecialidadMedico = document.getElementById('especialidadMedico');
    const inputHoraInicio = document.getElementById('horaInicioMedico');
    const inputHoraFin = document.getElementById('horaFinMedico');
    const inputAniosExperiencia = document.getElementById('aniosExperienciaMedico');
    const inputBibliografia = document.getElementById('bibliografiaMedico');

    const labelErrorNombresMedicos = document.getElementById('errorNombreMedico');
    const labelErrorApellidosMedicos = document.getElementById('errorApellidoMedico');
    const labelErrorEspecialidadMedico = document.getElementById('errorEspecialidadMedico');
    const labelErrorHoraInicio = document.getElementById('errorHoraInicioMedico');
    const labelErrorHoraFin = document.getElementById('errorHoraFinMedico');
    const labelErrorAniosExperiencia = document.getElementById('errorAniosExperiencia');
    const labelErrorBibliografia = document.getElementById('errorBibliografia');


    const labelExitoNombresMedicos = document.getElementById('exitoNombreMedico');
    const labelExitoApellidosMedicos = document.getElementById('exitoApellidoMedico');
    const labelExitoEspecialidadMedico = document.getElementById('exitoEspecialidadMedico');
    const labelExitoHoraInicio = document.getElementById('exitoHoraInicioMedico');
    const labelExitoHoraFin = document.getElementById('exitoHoraFinMedico');
    const labelExitoAniosExperiencia = document.getElementById('exitoAniosExperiencia');
    const labelExitoBibliografia = document.getElementById('exitoBilibiografia');

    const nombresMedicosValidos = validarCampoObligatorioYLongitud(inputNombresMedicos, labelErrorNombresMedicos, labelExitoNombresMedicos, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    const apellidosMedicosValidos = validarCampoObligatorioYLongitud(inputApellidosMedicos, labelErrorApellidosMedicos, labelExitoApellidosMedicos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    const especialidadValida = validarCampoObligatorio(inputEspecialidadMedico, labelErrorEspecialidadMedico, labelExitoEspecialidadMedico, 'Este campo es obligatorio');
    const horarioValido = validarHorarioMedico(inputHoraInicio, inputHoraFin, labelErrorHoraInicio, labelExitoHoraInicio, labelErrorHoraFin, labelExitoHoraFin);
    const aniosExperienciaValido = validarCampoObligatorio(inputAniosExperiencia, labelErrorAniosExperiencia, labelExitoAniosExperiencia, 'Este campo es obligatorio');
    const bibliografiaValida = validarBibliografia(inputBibliografia, labelErrorBibliografia, labelExitoBibliografia, 20, 500);

    if (nombresMedicosValidos && apellidosMedicosValidos && especialidadValida && horarioValido && aniosExperienciaValido && bibliografiaValida) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formMedico');
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

function validarCamposAlCambiarFocoMedico() {

    const inputNombresMedicos = document.getElementById('nombreMedico');
    const inputApellidosMedicos = document.getElementById('apellidoMedico');
    const inputEspecialidadMedico = document.getElementById('especialidadMedico');
    const inputHoraInicio = document.getElementById('horaInicioMedico');
    const inputHoraFin = document.getElementById('horaFinMedico');
    const inputAniosExperiencia = document.getElementById('aniosExperienciaMedico');
    const inputBibliografia = document.getElementById('bibliografiaMedico');

    const labelErrorNombresMedicos = document.getElementById('errorNombreMedico');
    const labelErrorApellidosMedicos = document.getElementById('errorApellidoMedico');
    const labelErrorEspecialidadMedico = document.getElementById('errorEspecialidadMedico');
    const labelErrorHoraInicio = document.getElementById('errorHoraInicioMedico');
    const labelErrorHoraFin = document.getElementById('errorHoraFinMedico');
    const labelErrorAniosExperiencia = document.getElementById('errorAniosExperiencia');
    const labelErrorBibliografia = document.getElementById('errorBibliografia');


    const labelExitoNombresMedicos = document.getElementById('exitoNombreMedico');
    const labelExitoApellidosMedicos = document.getElementById('exitoApellidoMedico');
    const labelExitoEspecialidadMedico = document.getElementById('exitoEspecialidadMedico');
    const labelExitoHoraInicio = document.getElementById('exitoHoraInicioMedico');
    const labelExitoHoraFin = document.getElementById('exitoHoraFinMedico');
    const labelExitoAniosExperiencia = document.getElementById('exitoAniosExperiencia');
    const labelExitoBibliografia = document.getElementById('exitoBilibiografia');

    inputNombresMedicos.addEventListener('blur', () => validarCampoObligatorioYLongitud(inputNombresMedicos, labelErrorNombresMedicos, labelExitoNombresMedicos, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres'));
    inputApellidosMedicos.addEventListener('blur', () => validarCampoObligatorioYLongitud(inputApellidosMedicos, labelErrorApellidosMedicos, labelExitoApellidosMedicos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres'));
    inputEspecialidadMedico.addEventListener('blur', () => validarCampoObligatorio(inputEspecialidadMedico, labelErrorEspecialidadMedico, labelExitoEspecialidadMedico, 'Este campo es obligatorio'));
    inputHoraInicio.addEventListener('input', () => controlarHabilitacionHoraFin(inputHoraInicio, inputHoraFin));
    inputHoraInicio.addEventListener('blur', () => validarHorarioMedico(inputHoraInicio, inputHoraFin, labelErrorHoraInicio, labelExitoHoraInicio, labelErrorHoraFin, labelExitoHoraFin));
    inputHoraFin.addEventListener('blur', () => validarHorarioMedico(inputHoraInicio, inputHoraFin, labelErrorHoraInicio, labelExitoHoraInicio, labelErrorHoraFin, labelExitoHoraFin));
    inputAniosExperiencia.addEventListener('blur', () => validarCampoObligatorio(inputAniosExperiencia, labelErrorAniosExperiencia, labelExitoAniosExperiencia, 'Este campo es obligatorio'));
    inputBibliografia.addEventListener('blur', () => validarBibliografia(inputBibliografia, labelErrorBibliografia, labelExitoBibliografia, 20, 500));
}
document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFocoMedico);