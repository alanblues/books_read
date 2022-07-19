<template>
    <section class="card">
        <div class="list-group list-hight border-0">
            <h4 class="my-4 text-center" v-if="existBooks">No hay registro</h4>
            <article v-for="book in books.books" v-bind:key="book.id"
                class="list-group-item d-flex justify-content-between align-items-center"
                v-bind:class="book.read ? 'list-group-item-success' : ''">
                <div>
                    <h5 class="mb-0">{{ book.title }}</h5>
                    <span class="text-muted font-italic">{{ book.author }}</span>
                </div>
                <button class="btn" v-bind:class="[book.read ? 'btn-dark' : 'btn-info']"
                    v-on:click="onReadBook(book.id)">
                    {{ book.read ? 'Reiniciar' : 'Terminar' }}
                </button>
            </article>
        </div>
        <div class="card-footer">
            <div class="d-flex flex-column">
                <h5><span class="badge badge-success">{{ reads }} Lecturas terminadas</span></h5>
                <h5><span class="badge badge-warning">{{ pendings }} Lecturas pendientes</span></h5>
            </div>
        </div>
    </section>
</template>

<script>
import { updateBook } from '../services/book.service';

export default {
    name: 'BookList',
    props: {
        books: Object
    },
    methods: {
        async onReadBook(idBook) {
            const result = await updateBook(idBook);
            if (result) {
                this.$emit('emitReadBook');
            }
        }
    },
    computed: {
        existBooks() {
            return this.books.books == null || this.books.books.length == 0;
        },
        reads() {
            return this.books.books.filter(r => r.read === true).length;
        },
        pendings() {
            return this.books.books.filter(r => r.read === false).length;
        }
    },
}
</script>

<style scoped lang="scss">
.list-hight {
    overflow-y: scroll;
    // height: 600px;
    max-height: 600px;
}
</style>