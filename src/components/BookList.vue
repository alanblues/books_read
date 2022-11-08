<template>
  <section class="list-size">
      <article
      class="mt-2 rounded-0 border-bottom pb-1 pt-2 px-3 d-flex flex-column"
      v-for="({id, title, author, read}) in books" v-bind:key="id"
      :class="read ? 'book_read' : ''"
    >
      <div class="d-flex flex-column">
        <span class="font-weight-bold">{{ title }}</span>
        <span class="text-muted">{{ author }}</span>
      </div>
      <div class="d-flex flex-colum justify-content-cente my-2">
        <button :disabled="enableOption" v-if="!read" v-on:click="onRead(id)" class="btn btn-success btn-sm mr-2">Marcar como leido</button>
        <button :disabled="enableOption" v-if="read" v-on:click="onReset(id)" class="btn btn-info btn-sm mr-2">Volver a leer</button>
        <button :disabled="enableOption" @click="onRemove(id)" class="btn btn-danger btn-sm">Quitar de la lista</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "BookList2",
  props: ['books', 'enableOption'],
  setup(props, context) {
    const onRead = idBook =>  context.emit('onUpdate', idBook, true);
    const onReset = idBook => context.emit('onUpdate', idBook, false);

    const onRemove = idBook => {
      const isRemove = confirm('¿Desea elimninar el libro?');
      if (isRemove) {
        context.emit('onRemove', idBook)
      }
    };

    return {onRead, onReset, onRemove}
  }
};
</script>

<style scoped>
  .list-size {
    overflow-y: scroll;
    height: 400px;
  }

  .book_read {
    border-left: 3px solid #28a745!important;
  }
  /* .read_pending {
    border-left: 2px solid #28a745;
  } */
</style>