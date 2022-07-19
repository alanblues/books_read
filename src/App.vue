<template>
  <main class="container mt-5 mb-5">
    <AddBook v-on:emitrefreshBooks="loadBooks" />
    <LoadingApp v-if="loading" />
    <BookList v-else
      v-bind:books={books}
      load="true"
      v-on:emitLoading="setLoading"
      v-on:emitReadBook="loadBooks" />
  </main>
</template>

<script>
import AddBook from "./components/AddBook/AddBook.vue";
import LoadingApp from "./components/Loading.vue";
import BookList from "./components/BookList.vue";
import { getBooks, saveBook } from "./services/book.service";

export default {
  name: 'App',
  components: { AddBook, LoadingApp, BookList },
  data() {
    return {
      books: [],
      loading: true
    }
  },
  methods: {
    async addNewBook(book) {
      await saveBook(book);
      alert('Libro registrado correctamente!');
      this.loadBooks();
    },
    async loadBooks() {
      this.loading = true;
      this.books = await getBooks();
      this.loading = false;
    },
    setLoading(valueLoading) {
      this.loading = valueLoading;
    }
  },
  created() {
    this.loadBooks();
  }
}
</script>