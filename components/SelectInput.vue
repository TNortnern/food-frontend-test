<template>
  <div class="sm:w-64 w-full">
    <label :for="name" class="block text-sm leading-5 font-medium text-gray-700">{{ name }}</label>
    <select :id="name" class="mt-1 w-full mx-auto sm:mx-0 form-select block pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" @value="value" @input="$emit('input', $event.target.value)">
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
