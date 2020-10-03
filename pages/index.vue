<template>
  <div>
    <div class="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto container">
      <!-- hero -->
      <div class="hero">
        <IntroText />
        <!-- image search box -->
        <Search @search="search" />
      </div>
      <h3 v-if="!searched" class="font-bold text-lg sm:text-3xl text-center mt-8">
        What are you waiting for? Find your recipe in our large database.
      </h3>
      <Cards :searched="searched" :list="list" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      q: '',
      list: [],
      count: 0,
      searched: false
    }
  },
  methods: {
    async search (q) {
      try {
        const { data } = await this.$axios.get(`?q=${q}`)
        this.list = data.SearchResults
        this.count = data.CountResults
        this.searched = true
      } catch (error) {
      }
    }
  }
}
</script>

<style>

</style>
