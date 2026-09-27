# Sistema Clínica YOYO - Angular

Proyecto de Angular para el taller de Ingeniería del Software III.

## Estructura de componentes

Cada componente principal se encuentra dentro de `src/app` y tiene sus tres archivos separados: TypeScript, HTML y CSS, siguiendo la presentación del curso.

- `header/`: `header.component.ts`, `header.component.html`, `header.component.css`
- `navbar/`: `navbar.component.ts`, `navbar.component.html`, `navbar.component.css`
- `carousel/`: `carousel.component.ts`, `carousel.component.html`, `carousel.component.css`
- `doctors/`: `doctors.component.ts`, `doctors.component.html`, `doctors.component.css`
- `registration/`: `registration.component.ts`, `registration.component.html`, `registration.component.css`
- `products/`: `products.component.ts`, `products.component.html`, `products.component.css`
- `footer/`: `footer.component.ts`, `footer.component.html`, `footer.component.css`

`app.component` también mantiene separados `app.component.ts`, `app.component.html` y `app.component.css`.

## Ejecutar

```bash
npm install
npm start
```

Luego abrir `http://localhost:4200`.

No se incluye `node_modules` en la entrega; se recupera ejecutando `npm install`.
