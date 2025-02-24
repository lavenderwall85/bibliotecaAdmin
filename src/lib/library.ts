import { Libro } from "./book";

export class Biblioteca {
  libros: Libro[];

  constructor() {
    this.libros = [];
  }

  agregarLibro(libro: Libro) {
    this.libros.push(libro);
  }

  eliminarLibro(titulo: string) {
    this.libros = this.libros.filter((libro) => libro.titulo !== titulo);
  }

  exportarCSV(): string {
    let csv = "Título,Autor,Categoría,Género,Cantidad,Calificación\n";
    this.libros.forEach((libro) => {
      csv += `${libro.titulo},${libro.autor},${libro.categoria},${libro.genero},${libro.cantidad},${libro.calificacion}\n`;
    });
    return csv;
  }
}
