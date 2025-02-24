<script lang="ts">
    import { biblioteca } from "../stores/libraryStore";
    import { get } from "svelte/store";
  
    function exportarCSV() {
      let b = get(biblioteca);
      let csv = b.exportarCSV(); 
      let blob = new Blob([csv], { type: "text/csv" });
      let a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "inventario.csv";
      a.click();
    }
  </script>
  
  <button on:click={exportarCSV}>Exportar CSV</button>
  