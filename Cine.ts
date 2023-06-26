import { Pelicula } from './Pelicula'; // Importa la clase Pelicula desde el archivo 'Pelicula.js'.
import { Sala } from './Sala'; // Importa la clase Sala desde el archivo 'Sala.js'.

export class Cine {
  private static instance: Cine;
  private salas: Sala[] = []; // Inicializa un arreglo de salas vacío.

  private constructor() {} // Constructor privado.

  public static getInstance(): Cine {
    if (!Cine.instance) {
      Cine.instance = new Cine(); // Crea una instancia de la clase Cine si no existe una instancia previa.
    }
    return Cine.instance; // Devuelve la instancia existente de la clase Cine.
  }

  public crearSala(numero: number, capacidad: number, pelicula: Pelicula, asientosDisponibles: number): Sala {
    const sala = new Sala(numero, capacidad, pelicula, asientosDisponibles); // Crea una instancia de la clase Sala con los parámetros proporcionados.
    this.salas.push(sala); // Agrega la sala creada al arreglo de salas del cine.
    return sala; // Devuelve la sala recién creada.
  }
}
