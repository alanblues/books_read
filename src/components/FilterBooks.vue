<template>
  <section class="filters mt-5">
    <div :class="selectedFilter === 'all' ? classBorder : ''"
      @click="onFilter('all')"
    >
      Todos
      <span class="badge badge-pill badge-info">{{ all }}</span>
    </div>
    <div :class="selectedFilter === 'pendings' ? classBorder : ''"
      @click="onFilter('pendings')"
    >
      Pendientes
      <span class="badge badge-pill badge-info">{{ pendings }}</span>
    </div>
    <div :class="selectedFilter === 'reads' ? classBorder : ''"
      @click="onFilter('reads')"
    >
      Terminados
      <span class="badge badge-pill badge-info">{{ reads }}</span>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FilterBooks",
  props: ["all", "pendings", "reads"],
  // setup(props, {emit}) {
  setup(props, context) {
    const selectedFilter = ref("all");
    const classBorder = ref("border-info");

    const onFilter = (filter) => {
      selectedFilter.value = filter;
      context.emit("onFilter", filter);
    };

    return { selectedFilter, classBorder, onFilter };
  },
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: row;
  justify-content: center;

  div:nth-child(1),
  div:nth-child(2) {
    margin-right: 5px;
  }
  div {
    border-bottom: 1px solid gainsboro;
    padding: 5px;
    cursor: pointer;
  }

  @media only screen and (max-width: 420px) {
    flex-direction: column;

    div:nth-child(1),
    div:nth-child(2) {
      margin-right: 0px;
      margin-bottom: 5px;
    }
  }
}
</style>