import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']})
export class ProductsComponent {
  productoAgregado = '';

  productos: Producto[] = [
    { nombre: 'Faja lumbar ortopédica', precio: '$45.000', imagen: 'assets/images/producto-faja.svg', alt: 'Faja lumbar' },
    { nombre: 'Rodillera deportiva', precio: '$38.500', imagen: 'assets/images/producto-rodillera.svg', alt: 'Rodillera deportiva' },
    { nombre: 'Suplemento multivitamínico', precio: '$62.000', imagen: 'assets/images/producto-suplemento.svg', alt: 'Suplemento nutricional' },
    { nombre: 'Rodillo de masaje muscular', precio: '$29.900', imagen: 'assets/images/producto-rodillo.svg', alt: 'Rodillo de masaje' }
  ];

  agregar(producto: Producto): void {
    this.productoAgregado = producto.nombre;
  }
}
