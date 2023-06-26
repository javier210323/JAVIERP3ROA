import { Pelicula } from './Pelicula';

export class Sala {
  constructor(public numero: number, public capacidad: number, public pelicula: Pelicula, protected asientosDisponibles: number) {}

  public getAperitivos(): string[] {
    // Implementación de obtener aperitivos gratuitos de la sala
    // ...
    return ['Canguil', 'Refresco'];
  }

  public getAsientosDisponibles(): number {
    return this.asientosDisponibles;
  }
}
