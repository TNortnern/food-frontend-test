<template>
  <div
    class="bg-white shadow-lg w-23% mr-1 mb-4 relative group"
  >
    <nuxt-link class="overlay cursor-zoom group-hover:opacity-100" :to="'/item/' + i">
      View
    </nuxt-link>
    <div class="border-b border-blue-400 pb-2">
      <img
        class="w-full h-48"
        :src="item.ImageFilePath"
        alt="img"
      >
    </div>
    <div class="px-4 py-2">
      <div>
        <span :class="item.ABBScore >= 70 ? 'text-green-500' : 'text-red-500'">ABB Score:</span>
        <span class="font-bold">{{ item.ABBScore }}</span>
        <h1 class="font-bold text-lg">
          {{ item.Desc1 }}
        </h1>
      </div>
      <!-- <span>Made with:</span>
            <template v-if="item.Ingredients && item.Ingredients.length">
              <span v-for="(ingredient, x) in item.Ingredients" :key="x" class="font-bold text-sm">
                {{ ingredient.Desc1 }}<template v-if="x !== item.Ingredients.length - 1">,</template>
              </span>
            </template>
            <template v-else>
              <span>
                No ingredients found.
              </span>
            </template> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    i: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.overlay {
  @apply bg-black bg-opacity-50 absolute inset-0 h-full w-full opacity-0 duration-100 ease-in-out text-white text-lg flex items-center justify-center
}
</style>
