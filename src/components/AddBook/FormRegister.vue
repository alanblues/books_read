<template>
    <section class="mb-3">
        <div class="card">
            <div class="card-header pb-1">
                <h5>Informaci&oacute;n del libro</h5>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="title">Tit&uacute;lo</label>
                    <input type="text" class="form-control form-control-lg" v-model="book.title" />
                </div>
                <div class="form-group">
                    <label for="author">Autor</label>
                    <input type="text" class="form-control form-control-lg" v-model="book.author" />
                </div>

            </div>
            <div class="card-footer">
                <button class="btn btn-success" v-on:click="sendBookData" v-bind:disabled="blockButtonRegister">
                    Registrar
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FormRegister",
    data() {
        return {
            book: {
                title: '',
                author: ''
            }
        }
    },
    methods: {
        sendBookData() {
            const book = {
                title: this.book.title,
                author: this.book.author,
                read: false
            };
            this.$emit("emitSendBook", book);
        }
    },
    computed: {
        blockButtonRegister() {
            return this.book.title.trim() === "" || this.book.author.trim() === "";
        }
    }
}
</script>