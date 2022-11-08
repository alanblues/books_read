<template>
  <section class="container-fluid">
    <div class="card shadow">
      <Title titleText="Mis Libros" v-on:closeForm="handleSetOpenForm" />
      <div class="card-body">
        <BookList
          :books="books"
          @onUpdate="handleUpdateBook"
          @onRemove="handleRemoveBook"
          :enableOption="openForm"
        />
        <FilterBooks
          v-on:onFilter="handleFilter"
          v-bind:all="countAll"
          v-bind:pendings="countPendings"
          v-bind:reads="countReads"
        />
        <!-- <button v-bind:disabled="openForm">aqi</button> -->
      </div>
    </div>
  </section>

  <Formulary
    v-if="openForm"
    v-on:onAddBook="handleAddBook"
    v-on:closeForm="handleSetOpenForm"
  />
</template>

<script>
import Title from "@/components/Title";
import Formulary from "@/components/Formulary";
import BookList from "@/components/BookList";
import FilterBooks from "@/components/FilterBooks";
import {
  getBooks,
  saveBook,
  updateBook,
  removeBook,
} from "./services/book.service";
import "./estilos.css";

export default {
  name: "App",
  components: { Title, Formulary, BookList, FilterBooks },
  data() {
    return {
      books: [],
      data: [],
      msgError: "No fue posible realizar la petición",
      openForm: false,
    };
  },
  mounted() {
    this.loadBooks();
  },
  computed: {
    countAll() {
      return this.data.length;
    },
    countPendings() {
      return this.data.reduce(
        (n, item) => (item.read === false ? n + 1 : n),
        0
      );
    },
    countReads() {
      return this.data.reduce((n, item) => (item.read === true ? n + 1 : n), 0);
    },
  },
  methods: {
    handleFilter(filter) {
      switch (filter) {
        case "all":
          this.books = this.data;
          break;
        case "pendings":
          this.books = this.data.filter((p) => p.read === false);
          break;
        case "reads":
          this.books = this.data.filter((p) => p.read === true);
          break;
        default:
          this.books = this.data;
          break;
      }
    },
    async handleAddBook(book) {
      const response = await saveBook(book);
      if (response) {
        alert("Libro registrado correctamente!");
        this.loadBooks();
        this.openForm = false;
        return;
      }
      alert("NO fue posible la petición!");
    },
    async handleUpdateBook(idBook, read) {
      const statusText = read ? "terminado" : "reiniciado";
      const msgText = `Libro ${statusText} correctamente`;

      const response = await updateBook(idBook, read);
      if (response) {
        alert(msgText);
        this.loadBooks();
        return;
      }
      alert(this.msgError);
    },
    async handleRemoveBook(id) {
      console.log("id desde app", id);
      const response = await removeBook(id);
      if (response) {
        alert("libro eliminado");
        this.loadBooks();
        return;
      }
      alert("NO fue posible la petición!");
    },
    async loadBooks() {
      this.data = await getBooks();
      this.books = await getBooks();
    },
    handleSetOpenForm(isOpen) {
      this.openForm = isOpen;
    },
  },
};
</script>