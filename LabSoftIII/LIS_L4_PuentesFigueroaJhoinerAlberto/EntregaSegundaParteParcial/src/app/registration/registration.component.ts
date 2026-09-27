import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']})
export class RegistrationComponent {
  formulario: FormGroup;
  mensajeExito = false;
  private camposTocados = new Set<string>();

  constructor(private readonly fb: FormBuilder) {
    this.formulario = this.fb.group(
      {
        nombres: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
        apellidos: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
        correo: ['', [Validators.required, Validators.email]],
        telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,10}$/)]],
        especialidad: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        contrasena: ['', [Validators.required, Validators.minLength(8)]],
        confirmarContrasena: ['', Validators.required],
        genero: ['', Validators.required],
        terminos: [false, Validators.requiredTrue]
      },
      { validators: this.validarCoincidenciaContrasenas }
    );
  }

  validarCoincidenciaContrasenas(control: AbstractControl): ValidationErrors | null {
    const contrasena = control.get('contrasena')?.value;
    const confirmar = control.get('confirmarContrasena')?.value;
    return contrasena && confirmar && contrasena === confirmar ? null : { noCoinciden: true };
  }

  validarAlSalir(campo: string): void {
    this.camposTocados.add(campo);
    const control = this.formulario.get(campo);
    control?.markAsTouched();
    control?.updateValueAndValidity();
  }

  mostrarError(campo: string): boolean {
    const control = this.formulario.get(campo);
    const tocado = this.camposTocados.has(campo) || !!control?.touched;

    if (!control || !tocado) {
      return false;
    }

    if (campo === 'confirmarContrasena' && this.formulario.errors?.['noCoinciden']) {
      return true;
    }

    return control.invalid;
  }

  mensajeError(campo: string): string {
    const control = this.formulario.get(campo);

    if (campo === 'confirmarContrasena' && this.formulario.errors?.['noCoinciden']) {
      return 'Las contraseñas no coinciden.';
    }

    if (!control?.errors) {
      return '';
    }

    if (control.errors['required']) return 'Este campo es obligatorio.';
    if (control.errors['requiredTrue']) return 'Debes aceptar los términos para continuar.';
    if (control.errors['email']) return 'Ingresa un correo electrónico válido.';
    if (control.errors['pattern']) return 'Ingresa un teléfono válido de 7 a 10 dígitos.';
    if (control.errors['minlength']) return 'El valor no cumple con la longitud mínima.';
    if (control.errors['maxlength']) return 'El valor supera la longitud máxima.';

    return 'Revisa este campo.';
  }

  registrar(): void {
    this.mensajeExito = false;
    Object.keys(this.formulario.controls).forEach((campo) => {
      this.camposTocados.add(campo);
      this.formulario.get(campo)?.markAsTouched();
    });
    this.formulario.updateValueAndValidity();

    if (this.formulario.invalid) {
      return;
    }

    this.mensajeExito = true;
    this.formulario.reset({
      nombres: '',
      apellidos: '',
      correo: '',
      telefono: '',
      especialidad: '',
      fechaNacimiento: '',
      contrasena: '',
      confirmarContrasena: '',
      genero: '',
      terminos: false
    });
    this.camposTocados.clear();
  }
}
