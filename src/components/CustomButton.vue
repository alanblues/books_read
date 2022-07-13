<template>
    <button
        class="btn" v-bind:class="[libroLeido ? 'btn-secondary' : 'btn-info']"
        v-on:click="$emit('habdleReadBook')"
    >
        {{ libroLeido ? 'Reiniciar' : 'Terminar' }}
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        libroLeido: Boolean
    }
}
</script>