<template>
  <div class="container mt-5">
    <AddBook v-on:emitAddNewBook="addNewBook" />
    <BookList v-bind:books={books} />
  </div>
</template>

<script>
import AddBook from "./components/AddBook/AddBook.vue";
import BookList from "./components/BookList.vue";
import { getBooks, registerBook } from "./providers/books.service";
import { db } from "./utils/firebase";

export default {
  name: 'App',
  components: { AddBook, BookList },
  data() {
    return {
      books: getBooks()
    }
  },
  methods: {
    addNewBook(book) {
      registerBook(book);
      this.books = null;
      this.books = getBooks();
    },
    guardarFirebase: async () => {
      console.log('firebase');
      await db.collection("books").add({
        title: "React Native learn from scratch",
        autor: "Alan Parra",
        read: false
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  }
}
</script>