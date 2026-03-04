export interface Evento {
  id: number;
  titulo: string;
  tipo: 'Concierto' | 'Conferencia' | 'Taller' | string;
  fecha: string; // ISO string
  precio: number;
  importante?: boolean; // opcional, para ngClass / ngStyle
  descripcion?: string; // opcional
}