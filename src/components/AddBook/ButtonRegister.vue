<template>
    <section class="border rounded p-3 mb-3">
        <button class="btn btn-primary" v-on:click="this.$emit('emitRegistering')">Registrar Nuevo</button>
    </section>
</template>

<script>
export default {
    name: "ButtonRegister"
}
</script>