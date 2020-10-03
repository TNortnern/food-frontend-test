<template>
  <div>
    <div class="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto container">
      <!-- hero -->
      <div class="hero">
        <IntroText />
        <!-- image search box -->
        <Search @search="search" />
      </div>
      <Cards :list="list" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      q: '',
      list: [],
      count: 0
    }
  },
  methods: {
    async search (q) {
      try {
        const { data } = await this.$axios.get(`?q=${q}`)
        this.list = data.SearchResults
        this.count = data.CountResults
      } catch (error) {
      }
    }
  }
}
</script>

<style>

</style>
