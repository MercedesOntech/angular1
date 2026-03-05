# Proyecto Angular 21 - Mercedes Romero

## Descripción
Aplicación SPA para gestión de eventos, con login, creación, listado y borrado de eventos.

## Tecnologías
- Angular 21 (Standalone Components)
- TypeScript 5
- Bootstrap 5.3
- WebStorage / localStorage
- XAMPP / Docker para despliegue

## Instrucciones de despliegue

### XAMPP
1. Copiar carpeta `dist/MercedesRomero` a `htdocs`.
2. Abrir navegador en `http://localhost/MercedesRomero`.

### Docker
1. `docker build -t mercedes-angular .`
2. `docker run -p 4200:4200 mercedes-angular`

## Usuarios de prueba
----------------------------
| Usuario  | Contraseña    |
|----------|---------------|
| admin    | 1234          |
| mercedes | 1111          |
| invitado | 0000          |
| Mercedes | Mercedes_1365 |
----------------------------