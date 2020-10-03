<template>
  <div>
    <Modal />
    <div class="box pt-6">
      <div class="box-wrapper">
        <div class="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <button
            class="outline-none focus:outline-none"
            @click="search()"
          >
            <svg
              class=" w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <input
            id="q"
            v-model="state.q"
            type="search"
            name="q"
            placeholder="search for images"
            class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
            @keydown.enter="search"
          >
          <div class="select">
            <select
              id=""
              name=""
              x-model="image_type"
              class="text-sm outline-none focus:outline-none bg-transparent"
            >
              <option
                value="all"
                selected
              >
                All
              </option>
              <option value="photo">
                Photo
              </option>
              <option value="illustration">
                Illustration
              </option>
              <option value="vector">
                Vector
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
  setup: (_, { emit }) => {
    const state = reactive({
      q: ''
    })
    const functions = {
      search: () => emit('search', state.q)
    }
    return {
      state,
      ...functions
    }
  }
}
</script>

<style>

</style>
