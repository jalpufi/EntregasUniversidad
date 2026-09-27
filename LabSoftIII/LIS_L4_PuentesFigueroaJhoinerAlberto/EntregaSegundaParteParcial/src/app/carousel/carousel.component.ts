import { Component } from '@angular/core';

interface Promocion {
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']})
export class CarouselComponent {
  promociones: Promocion[] = [
    {
      titulo: 'Primera valoración gratuita',
      descripcion: 'Agenda tu cita inicial sin costo durante todo el mes.',
      imagen: 'assets/images/promocion-valoracion.svg',
      alt: 'Primera valoración gratuita'
    },
    {
      titulo: '20% de descuento en fisioterapia',
      descripcion: 'Válido en paquetes de 10 sesiones o más.',
      imagen: 'assets/images/promocion-fisioterapia.svg',
      alt: 'Paquete de fisioterapia'
    },
    {
      titulo: 'Plan nutricional personalizado',
      descripcion: 'Incluye seguimiento mensual con nuestras especialistas.',
      imagen: 'assets/images/promocion-nutricion.svg',
      alt: 'Plan nutricional'
    }
  ];

  promocionActual = 0;

  anterior(): void {
    this.promocionActual =
      (this.promocionActual - 1 + this.promociones.length) % this.promociones.length;
  }

  siguiente(): void {
    this.promocionActual =
      (this.promocionActual + 1) % this.promociones.length;
  }

  seleccionar(indice: number): void {
    this.promocionActual = indice;
  }
}
