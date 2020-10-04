<template>
  <div>
    <Modal />
    <div class="pt-6">
      <v-select placeholder="search for a recipe" :options="['Apple', 'Bread', 'Cake', 'Cookie', 'Fruit', 'Ham']" @input="search" />
    </div>
  </div>
</template>

<script>
export default {
  setup: (_, { emit }) => {
    const search = q => emit('search', q)
    return {
      search
    }
  }
}
</script>

<style>

</style>
