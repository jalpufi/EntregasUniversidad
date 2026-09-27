import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']})
export class NavbarComponent {
  menuAbierto = false;

  cerrarMenu(): void {
    this.menuAbierto = false;
  }
}
