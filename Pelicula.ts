class Pelicula {
    private nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  }