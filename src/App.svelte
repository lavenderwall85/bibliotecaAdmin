<script lang="ts">
  import BookForm from "./components/BookForm.svelte";
  import BookList from "./components/BookList.svelte";
  import ExportCSV from "./components/ExportCSV.svelte";
</script>


<main class="container">
  <section class="formulario">
    <h2>Agregar Libro</h2>
    <BookForm />
  </section>

  <section class="inventario">
    <h2>Inventario</h2>
    <BookList />
    <ExportCSV />
  </section>

</main>
