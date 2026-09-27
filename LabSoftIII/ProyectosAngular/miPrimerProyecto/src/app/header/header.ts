import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  public nombres: String ="Jhoiner";
  public apellidos: String ="Puentes";
  public disciplina: String ="Soy desarrollador BackEnd especialista en node.js y en Esperiencia de usuario";
  public descripcion: String ="Estudiante de Ingenieria de sistemas apasionado por el desarrollo BackEnd";
}
