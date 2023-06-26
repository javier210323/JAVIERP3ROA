import { Cine } from './Cine';
import { Pelicula } from './Pelicula';
import { Cliente } from './Cliente';
import { Sala } from './Sala';

const cine = Cine.getInstance();

const johnWick4 = new Pelicula('John Wick 4');
const transformers = new Pelicula('Transformers');
const pikachu = new Pelicula('Pikachu');
const volandoAlto = new Pelicula('Volando Alto');

const sala1 = cine.crearSala(1, 100, johnWick4, 100);
const sala2 = cine.crearSala(2, 80, transformers, 80);
const sala3 = cine.crearSala(3, 120, pikachu, 120);
const sala4 = cine.crearSala(4, 90, volandoAlto, 90);

const cliente1 = new Cliente('Juan', johnWick4, sala1, 1, ['Canguil', 'Hot-dog', 'Bebidas']);
const cliente2 = new Cliente('María', transformers, sala2, 5, ['Canguil', 'Refresco']);
const cliente3 = new Cliente('Pedro', pikachu, sala3, 10, ['Hot-dog', 'Bebidas']);
const cliente4 = new Cliente('Laura', volandoAlto, sala4, 15, ['Canguil', 'Refresco']);

cliente1.mostrarDetalle();
cliente2.mostrarDetalle();
cliente3.mostrarDetalle();
cliente4.mostrarDetalle();