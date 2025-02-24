<script lang="ts">
    import { biblioteca } from "../stores/libraryStore";
    import { get } from "svelte/store";
  
    let libros = get(biblioteca).libros;
  
    biblioteca.subscribe(b => libros = b.libros);
  
    function eliminarLibro(titulo: string) {
      biblioteca.update(b => {
        b.eliminarLibro(titulo);
        return b;
      });
    }
  </script>
  
  <ul>
    {#each libros as libro (libro.titulo)}
      <li>
        <strong>{libro.titulo}</strong> - {libro.autor} ({libro.categoria} - {libro.genero}) 
        - Cantidad: {libro.cantidad} - Calificación: {libro.calificacion}/5
        <button on:click={() => eliminarLibro(libro.titulo)}>Eliminar</button>
      </li>
    {/each}
  </ul>
  