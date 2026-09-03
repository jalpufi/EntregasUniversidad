const formPaciente = document.getElementById("formPaciente");
const pacienteSelect = document.getElementById("pacienteSelect");
const btnAgregarPaciente = document.getElementById("btnAgregarPaciente");

formPaciente.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarFormularioPaciente()) {
        return;
    }

    const nombres = document.getElementById("nombresPaciente").value;
    const apellidos = document.getElementById("apellidosPaciente").value;

    const paciente = gestionarPacientes.registrarPaciente(
        nombres,
        apellidos
    );

    console.log("Paciente registrado:", paciente);

    // Agregar paciente al select de citas
    const option = document.createElement("option");
    option.value = paciente.id;
    option.textContent = `${paciente.nombres} ${paciente.apellidos}`;

    pacienteSelect.appendChild(option);

    console.log(
        "Pacientes disponibles:",
        gestionarPacientes.listarPacientes()
    );

    formPaciente.reset();

    mostrarNotificacion(
        `Paciente ${paciente.nombres} ${paciente.apellidos} registrado con éxito`
    );
});