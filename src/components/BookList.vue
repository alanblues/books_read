<template>
    <section>
        <!-- <article class="d-flex  justify-content-between align-items-baseline mb-3">
            <h4>Libros registrados</h4>
            <button class="btn btn-outline-primary">Nuevo</button>
        </article> -->
        <!-- <article class="border rounded p-3 mb-3">
            <button class="btn btn-outline-primary">Registrar Nuevo</button>
        </article> -->

        <div class="list-group">
            <h4 class="mt-4 text-center" v-if="existBooks">No hay registro</h4>
            <article v-for="book in books.books" v-bind:key="book.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="mb-0">{{ book.title }}</h5>
                    <span class="text-muted font-italic">{{ book.author }}</span>
                </div>

                <!-- <CustomButton v-on:habdleReadBook="onAddBook" v-bind:libroLeido="book.leido" /> -->
                <CustomButton v-on:click="onAddBook" v-bind:libroLeido="book.leido" />
            </article>
        </div>
    </section>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
    name: 'BookList',
    components: { CustomButton },
    props: {
        books: Object
    },
    // props: ['books'],
    methods: {
        onAddBook() {
            alert('alan p');
        }
    },
    computed: {
        existBooks() {
            return this.books.books == null || this.books.books.length == 0;
        }
    }
}
</script>