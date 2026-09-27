import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Especialidad {
  nombre: string;
  descripcion: string;
}

interface Medico {
  nombre: string;
  especialidad: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']})
export class DoctorsComponent {
  especialidades: Especialidad[] = [
    {
      nombre: 'Terapia Neural',
      descripcion: 'Técnica que regula el sistema nervioso autónomo mediante la aplicación de anestésicos locales en puntos específicos.'
    },
    {
      nombre: 'Quiropraxia',
      descripcion: 'Se enfoca en el diagnóstico y tratamiento manual de trastornos de la columna vertebral y el sistema musculoesquelético.'
    },
    {
      nombre: 'Fisioterapia',
      descripcion: 'Utiliza ejercicio terapéutico, electroterapia y técnicas manuales para recuperar la funcionalidad física.'
    },
    {
      nombre: 'Nutrición y Dietética Terapéutica',
      descripcion: 'Diseña planes alimenticios personalizados para tratar y prevenir enfermedades y acompañar procesos de bienestar.'
    },
    {
      nombre: 'Medicina del Deporte',
      descripcion: 'Previene, diagnostica y trata lesiones relacionadas con la actividad física, optimizando recuperación y rendimiento.'
    },
    {
      nombre: 'Odontología',
      descripcion: 'Ofrece cuidado preventivo y restaurador de la salud oral para pacientes de todas las edades.'
    }
  ];

  medicos: Medico[] = [
    { nombre: 'Dr. Juan Pérez', especialidad: 'Fisioterapia', descripcion: 'Comprometido con tu recuperación funcional, un paso a la vez.', imagen: 'assets/images/medico-juan.svg' },
    { nombre: 'Dra. Catalina Sánchez', especialidad: 'Quiropraxia', descripcion: 'La salud de tu columna es fundamental para tu bienestar diario.', imagen: 'assets/images/medica-catalina.svg' },
    { nombre: 'Dr. Andrés Cardozo', especialidad: 'Nutrición y Dietética Terapéutica', descripcion: 'Un alimento sano y bien planeado acompaña una vida saludable.', imagen: 'assets/images/medico-andres.svg' },
    { nombre: 'Dra. Laura Gómez', especialidad: 'Terapia Neural', descripcion: 'Tratamientos suaves y acompañamiento para el dolor crónico.', imagen: 'assets/images/medica-laura.svg' },
    { nombre: 'Dr. Felipe Rojas', especialidad: 'Medicina del Deporte', descripcion: 'Acompañamiento profesional para actividad física y recuperación.', imagen: 'assets/images/medico-felipe.svg' },
    { nombre: 'Dra. Valentina Ruiz', especialidad: 'Odontología', descripcion: 'Cuidado preventivo y restaurador para una sonrisa saludable.', imagen: 'assets/images/medica-valentina.svg' }
  ];

  especialidadSeleccionada = '';
  descripcionActual = '';
  medicoSeleccionado: Medico | null = null;

  get medicosFiltrados(): Medico[] {
    if (!this.especialidadSeleccionada) {
      return this.medicos;
    }
    return this.medicos.filter((medico) => medico.especialidad === this.especialidadSeleccionada);
  }

  seleccionarEspecialidad(especialidad: Especialidad): void {
    this.especialidadSeleccionada = especialidad.nombre;
    this.descripcionActual = especialidad.descripcion;
  }

  abrirCita(medico: Medico): void {
    this.medicoSeleccionado = medico;
  }

  cerrarCita(): void {
    this.medicoSeleccionado = null;
  }
}
