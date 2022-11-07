<template>
  <section class="text-center mt-3">
    <span
      role="button"
      class="border py-1 pl-2 pr-1 rounded mr-1"
      :class="selectedFilter === 'all' ? classBorder : ''"
      @click="onFilter('all')"
    >
      Todos
      <span class="badge badge-pill badge-info">{{all}}</span>
      <!-- <span class="badge rounded-pill text-bg-info">{{all}}</span> -->
    </span>
    <span
      role="button"
      class="border py-1 pl-2 pr-1 rounded mr-1"
      :class="selectedFilter === 'pendings' ? classBorder : ''"
      @click="onFilter('pendings')"
    >
      Pendientes
      <span class="badge badge-pill badge-info">{{pendings}}</span>
      <!-- <span class="badge badge-pill text-bg-info">{{pendings}}</span> -->
    </span>
    <span
      role="button"
      class="border py-1 pl-2 pr-1 rounded"
      :class="selectedFilter === 'reads' ? classBorder : ''"
      @click="onFilter('reads')"
    >
      Terminados
      <span class="badge badge-pill badge-info">{{reads}}</span>
      <!-- <span class="badge rounded-pill text-bg-primary">{{reads}}</span> -->
    </span>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FilterBooks",
  props: ['all', 'pendings', 'reads'],
  // setup(props, {emit}) {
  setup(props, context) {
    const selectedFilter = ref('all');
    const classBorder = ref('border-info');

    const onFilter = (filter) => {
      selectedFilter.value = filter;
      context.emit('onFilter', filter)
    };

    return { selectedFilter, classBorder, onFilter }
  }
};
</script>