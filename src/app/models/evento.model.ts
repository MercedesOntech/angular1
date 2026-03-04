// src/app/models/evento.model.ts

export interface Evento {
  titulo: string;
  descripcion: string;
  fecha: string;      // formato ISO o dd/MM/yyyy
  lugar: string;
  precio?: number;    // opcional
}