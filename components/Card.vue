<template>
  <div
    :class="modalCard ? 'w-5/6 xl:w-1/3 modal-height' : ''"
    class="bg-white shadow-lg  mr-1 mb-4 relative group"
  >
    <div v-if="modalCard" class="border-b border-blue-400 mb-1 flex justify-end">
      <button class="text-3xl text-red-400 pr-2 hover:text-opacity-50 duration-100" @click="$store.commit('food/setCurrent', null)">
        &times;
      </button>
    </div>
    <button v-if="!modalCard" class="overlay cursor-zoom group-hover:opacity-100" @click="$store.commit('food/setCurrent', item)">
      View
    </button>
    <div class="border-b border-blue-400 pb-2">
      <img
        :class="modalCard ? 'h-auto' : 'h-48'"
        class="w-full"
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
      <div v-if="modalCard">
        <span>Made with:</span>
        <template v-if="item.Ingredients && item.Ingredients.length">
          <span v-for="(ingredient, x) in item.Ingredients" :key="x" class="font-bold text-sm">
            {{ ingredient.Desc1 }}<template v-if="x !== item.Ingredients.length - 1">,</template>
          </span>
        </template>
        <template v-else>
          <span>
            No ingredients found.
          </span>
        </template>
      </div>
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
    modalCard: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.overlay {
  @apply bg-black bg-opacity-50 absolute inset-0 h-full w-full opacity-0 duration-100 ease-in-out text-white text-lg flex items-center justify-center
}
.modal-height {
  height: '80%'
}
</style>
