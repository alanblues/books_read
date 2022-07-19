<template>
    <ButtonRegister v-if="!registering" @click="onRegistering" />
    <FormRegister v-else v-on:emitRefreshBook="refreshBook" />
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
        refreshBook() {
            this.$emit("emitrefreshBooks");
            this.registering = false;
        }
    }
}
</script>