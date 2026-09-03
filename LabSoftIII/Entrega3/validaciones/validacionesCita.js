function validarSelectObligatorio(select, errorElement, exitoElement, mensaje) {
    if (select.value === '') {
        errorElement.textContent = mensaje;
        exitoElement.textContent = '';
        return false;
    } else {
        errorElement.textContent = '';
        exitoElement.textContent = 'Campo válido';
        return true;
    }
}

function validarFecha(inputFecha, errorElement, exitoElement) {
    const valor = inputFecha.value;

    if (valor === '') {
        errorElement.textContent = 'Debe ingresar la fecha de la cita';
        exitoElement.textContent = '';
        return false;
    }

    const fechaSeleccionada = new Date(valor + 'T00:00:00');
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < hoy) {
        errorElement.textContent = 'La fecha no puede ser anterior a hoy';
        exitoElement.textContent = '';
        return false;
    }

    errorElement.textContent = '';
    exitoElement.textContent = 'Fecha válida';
    return true;
}

function validarHorarioCita(inputHoraInicio, inputHoraFin, errorElementInicio, exitoElementInicio, errorElementFin, exitoElementFin) {
    const horaInicio = inputHoraInicio.value;
    const horaFin = inputHoraFin.value;

    let inicioValido = true;
    let finValido = true;

    if (horaInicio === '') {
        errorElementInicio.textContent = 'Debe ingresar la hora de inicio';
        exitoElementInicio.textContent = '';
        inicioValido = false;
    } else {
        errorElementInicio.textContent = '';
        exitoElementInicio.textContent = 'Hora válida';
    }

    if (horaFin === '') {
        errorElementFin.textContent = 'Debe ingresar la hora de fin';
        exitoElementFin.textContent = '';
        finValido = false;
    } else {
        errorElementFin.textContent = '';
        exitoElementFin.textContent = 'Hora válida';
    }

    if (inicioValido && finValido && horaFin <= horaInicio) {
        errorElementFin.textContent = 'La hora fin debe ser mayor a la hora de inicio';
        exitoElementFin.textContent = '';
        finValido = false;
    }

    return inicioValido && finValido;
}

function mostrarMensajeExitoCita() {
    Toastify({
        text: "¡Cita registrada con éxito!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
}

function validarFormularioCita() {

    const inputFecha = document.getElementById('fecha');
    const inputHoraInicio = document.getElementById('horaInicio');
    const inputHoraFin = document.getElementById('horaFin');
    const selectMedico = document.getElementById('MedicoSelect');
    const selectPaciente = document.getElementById('pacienteSelect');

    const labelErrorFecha = document.getElementById('errorFecha');
    const labelErrorHoraInicio = document.getElementById('errorHoraInicioCita');
    const labelErrorHoraFin = document.getElementById('errorHoraFinCita');
    const labelErrorMedico = document.getElementById('errorMedicoSelect');
    const labelErrorPaciente = document.getElementById('errorPacienteSelect');

    const labelExitoFecha = document.getElementById('exitoFecha');
    const labelExitoHoraInicio = document.getElementById('exitoHoraInicioCita');
    const labelExitoHoraFin = document.getElementById('exitoHoraFinCita');
    const labelExitoMedico = document.getElementById('exitoMedicoSelect');
    const labelExitoPaciente = document.getElementById('exitoPacienteSelect');

    const fechaValida = validarFecha(inputFecha, labelErrorFecha, labelExitoFecha);
    const horarioValido = validarHorarioCita(inputHoraInicio, inputHoraFin, labelErrorHoraInicio, labelExitoHoraInicio, labelErrorHoraFin, labelExitoHoraFin);
    const medicoValido = validarSelectObligatorio(selectMedico, labelErrorMedico, labelExitoMedico, 'Debe seleccionar un médico');
    const pacienteValido = validarSelectObligatorio(selectPaciente, labelErrorPaciente, labelExitoPaciente, 'Debe seleccionar un paciente');

    if (fechaValida && horarioValido && medicoValido && pacienteValido) {
        mostrarMensajeExitoCita();
        const formulario = document.getElementById('formCitas');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
            formulario.reset();
        }, 2000);
        return true;
    } else {
        return false;
    }
}

function validarCamposAlCambiarFocoCita() {

    const inputFecha = document.getElementById('fecha');
    const inputHoraInicio = document.getElementById('horaInicio');
    const inputHoraFin = document.getElementById('horaFin');
    const selectMedico = document.getElementById('MedicoSelect');
    const selectPaciente = document.getElementById('pacienteSelect');

    const labelErrorFecha = document.getElementById('errorFecha');
    const labelErrorHoraInicio = document.getElementById('errorHoraInicioCita');
    const labelErrorHoraFin = document.getElementById('errorHoraFinCita');
    const labelErrorMedico = document.getElementById('errorMedicoSelect');
    const labelErrorPaciente = document.getElementById('errorPacienteSelect');

    const labelExitoFecha = document.getElementById('exitoFecha');
    const labelExitoHoraInicio = document.getElementById('exitoHoraInicioCita');
    const labelExitoHoraFin = document.getElementById('exitoHoraFinCita');
    const labelExitoMedico = document.getElementById('exitoMedicoSelect');
    const labelExitoPaciente = document.getElementById('exitoPacienteSelect');

    inputFecha.addEventListener('blur', () => validarFecha(inputFecha, labelErrorFecha, labelExitoFecha));
    inputHoraInicio.addEventListener('blur', () => validarHorarioCita(inputHoraInicio, inputHoraFin, labelErrorHoraInicio, labelExitoHoraInicio, labelErrorHoraFin, labelExitoHoraFin));
    inputHoraFin.addEventListener('blur', () => validarHorarioCita(inputHoraInicio, inputHoraFin, labelErrorHoraInicio, labelExitoHoraInicio, labelErrorHoraFin, labelExitoHoraFin));
    selectMedico.addEventListener('change', () => validarSelectObligatorio(selectMedico, labelErrorMedico, labelExitoMedico, 'Debe seleccionar un médico'));
    selectPaciente.addEventListener('change', () => validarSelectObligatorio(selectPaciente, labelErrorPaciente, labelExitoPaciente, 'Debe seleccionar un paciente'));
}
document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFocoCita);