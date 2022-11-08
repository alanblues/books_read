<template>
  <div class="card-header pb-2 d-flex justify-content-between align-items-baseline">
    <h4 class="text-primary">{{titleText}}</h4>
    <button @click="onCloseForm" class="btn btn-s btn-primary">Nuevo</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    titleText: String
  },
  setup(props, {emit}) {
    const onCloseForm = () => emit('closeForm', true);

    return { onCloseForm }
  }
}
</script>
