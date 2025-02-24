<script lang="ts">
    import { biblioteca } from "../stores/libraryStore";
    import { Libro } from "../lib/book";
  
    let titulo = "";
    let autor = "";
    let categoria = "";
    let genero = "";
    let cantidad = 1;
    let calificacion = 0;
  
    function agregarLibro() {
      if (!titulo || !autor || !categoria || !genero) return;
  
      let nuevoLibro = new Libro(titulo, autor, categoria, genero, cantidad, calificacion);
  
      biblioteca.update(b => {
        b.agregarLibro(nuevoLibro);
        return b;
      });
  
      // Limpiar el formulario
      titulo = "";
      autor = "";
      categoria = "";
      genero = "";
      cantidad = 1;
      calificacion = 0;
    }
  </script>
  
  <form on:submit|preventDefault={agregarLibro}>
    <input type="text" bind:value={titulo} placeholder="Título" required>
    <input type="text" bind:value={autor} placeholder="Autor" required>
    <input type="text" bind:value={categoria} placeholder="Categoría" required>
    <input type="text" bind:value={genero} placeholder="Género" required>
    <input type="number" bind:value={cantidad} min="1" required>
    <input type="number" bind:value={calificacion} min="0" max="5">
    <button type="submit">Agregar Libro</button>
  </form>
  