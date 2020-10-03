<template>
  <div class="flex justify-center md:justify-between mt-4 flex-wrap">
    <Card v-for="(item, i) in list" :key="i" :item="item" :i="i" />
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
