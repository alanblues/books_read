<template>
  <section class="formulary d-flex flex-column justify-content-center align-items-center">
    <h2 class="text-white mb-4">Registrar Nuevo Libro</h2>
    <div class="border rounded p-5 w-75">
        
        <form v-on:submit.prevent="onAddBook">
          <!-- <label class="form-label" for="">Nueva Libro</label> -->
          <input
            type="text"
            v-model="book.title"
            placeholder="Titulo Libro"
            class="form-control mb-2"
          />
          <input
            type="text"
            v-model="book.author"
            placeholder="Nombre Autor"
            class="form-control"
          />
          <button
            type="submit"
            class="btn btn-success btn-lg mt-3 mr-2"
            v-bind:disabled="enableAddButton"
          >
            Agregar
          </button>
          <button
            type="button"
            v-on:click="onCloseForm"
            class="btn btn-secondary btn-lg mt-3"
          >
            Cancelar
          </button>
        </form>
      
    </div>
  </section>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "FormularyFill",
  setup(props, context) {
    const book = reactive({
      title: "",
      author: "",
    });

    const onAddBook = () => context.emit("onAddBook", book);

    const onCloseForm = () => context.emit("closeForm", false);

    const enableAddButton = computed(() => {
      if (book.title.trim() === '' || book.author.trim() === '') {
        return true;
      }
      return false;
    });

    return { book, onAddBook, onCloseForm, enableAddButton };
  },
};
</script>

<style scoped>
.formulary {
  position: absolute;
  background-color: rgb(0 0 0 / 0.92);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

input[type="text"] {
  color: black!important;
  font-size: 1.5rem;
}
</style>