<template>
    <ButtonRegister v-if="!registering" v-on:emitRegistering="onRegistering" />
    <FormRegister v-else v-on:emitSendBook="sendBook" />
</template>

<script>
import ButtonRegister from "./ButtonRegister.vue";
import FormRegister from "./FormRegister.vue";

export default {
    name: 'AddBook',
    components: { ButtonRegister, FormRegister },
    data() {
        return {
            registering: false
        }
    },
    methods: {
        onRegistering() {this.registering = true; },
        sendBook(book) {
            this.$emit("emitAddNewBook", book);
            this.registering = false;
        }
    }
}
</script>