// src/app/models/usuario.model.ts

export interface Usuario {
  username: string;
  password: string;
  nombre?: string;   // opcional, si quieres almacenar nombre completo
  email?: string;    // opcional
}