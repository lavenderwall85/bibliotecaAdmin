export class Libro {
    titulo: string;
    autor: string;
    categoria: string;
    genero: string;
    cantidad: number;
    calificacion: number;
  
    constructor(titulo: string, autor: string, categoria: string, genero: string, cantidad: number, calificacion: number = 0) {
      this.titulo = titulo;
      this.autor = autor;
      this.categoria = categoria;
      this.genero = genero;
      this.cantidad = cantidad;
      this.calificacion = calificacion;
    }
  }
  