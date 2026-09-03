const formMedico = document.getElementById("formMedico");
const medicoSelect = document.getElementById("MedicoSelect");
const btnAgregarMedico = document.getElementById("btnAgregarMedico");


formMedico.addEventListener("submit", (e) => {
    e.preventDefault();

     if (!validarFormularioMedico()) {
        return;
    }

    const nombres = document.getElementById("nombreMedico").value;
    const apellidos = document.getElementById("apellidoMedico").value;
    const especialidad = document.getElementById("especialidadMedico").value;
    const horaInicio = document.getElementById("horaInicioMedico").value;
    const horaFin = document.getElementById("horaFinMedico").value;
    const aniosExperiencia = document.getElementById("aniosExperienciaMedico").value;
    const bibliografia = document.getElementById("bibliografiaMedico").value;

    const medico = gestionarMedicos.registrarMedico(
        nombres,
        apellidos,
        especialidad,
        horaInicio,
        horaFin,
        aniosExperiencia,
        bibliografia
    );

    console.log("Médico registrado:", medico);

    // Agregar médico al select de citas
    const option = document.createElement("option");
    option.value = medico.id;
    option.textContent = `${medico.nombres} ${medico.apellidos}`;

    medicoSelect.appendChild(option);

    console.log("Médicos disponibles:", gestionarMedicos.listarMedicos());

    formMedico.reset();

    mostrarNotificacion(
        `Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`
    );
});