<template>
  <div v-if="$store.state.food.current">
    <div class="bg-black h-full w-full inset-0 fixed bg-opacity-50 flex items-center justify-center z-30">
      <transition name="fade">
        <Card :item="$store.state.food.current" :modal-card="true" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  open: {
    type: Boolean,
    default: false
  },
  setup ({ open }, emit) {
    const toggle = () => {
      emit('toggle', !open)
    }
    return { toggle }
  }
}
</script>

<style>

</style>
