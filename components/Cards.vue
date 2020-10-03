<template>
  <transition-group
    name="fade"
    tag="div"
    class="flex justify-center md:justify-between mt-4 flex-wrap"
  >
    <Card
      v-for="item in items"
      :key="item.FoodItemID"
      :item="item"
    />
  </transition-group>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return { items: [] }
  },
  watch: {
    list (val) {
      // to allow fade animation to play in and out with ease
      this.items = []
      setTimeout(() => {
        this.items = val
      }, 1)
    }
  }
}
</script>

<style>

</style>
