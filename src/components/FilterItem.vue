<template>
  <span
    role="button"
    class="border py-1 pl-2 pr-1 rounded mr-1"
    @click="onFilter('all')"
  >
    Todos
    <span class="badge badge-pill badge-info">{{ all }}</span>
  </span>
</template>

<script>
export default {
  name: "FilterItem"
};
</script>