<template>
  <div>
    <div v-if="searched" class="my-3 text-center sm:text-left">
      <!-- {{ filters }} -->
      <template v-if="list.length > 0">
        <span class="font-bold">{{ sortedList.length }}</span>
        <span>recipes.</span>
      </template>
      <template v-else>
        <div>
          No results found.
        </div>
      </template>
      <div v-if="items && items.length" class="flex flex-wrap sm:space-x-2">
        <SelectInput v-model="sort" name="Sort By" :options="possibleSorts" />
        <SelectInput v-model="brand" name="Filter By Brand" :options="filters" />
      </div>
    </div>
    <transition-group
      name="fade"
      tag="div"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      @before-leave="beforeLeave"
    >
      <Card
        v-for="item in sortedList"
        :key="item.FoodItemID"
        :item="item"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    searched: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return { items: [], brand: 'All', sort: 'Desc1' }
  },
  computed: {
    filters () {
      if (!this.items || !this.items.length) {
        return
      }
      const arr = ['All']
      this.items.forEach((item) => {
        const brand = item.Brand.Desc1
        if (!arr.includes(brand)) { arr.push(brand) }
      })
      return arr.sort()
    },
    possibleSorts () {
      if (!this.items || !this.items.length) {
        return
      }
      return Object.keys(this.items[0]).sort()
    },
    sortedList () {
      if (!this.items || !this.items.length) {
        return []
      }
      return this.sortItems(this.items)
    }
  },
  watch: {
    list (val) {
      this.brand = 'All'
      // to allow fade animation to play in and out with ease
      this.items = []
      setTimeout(() => {
        if (val && val.length) {
          this.items = val
        } else {
          this.val = []
        }
      }, 1)
    }
  },
  methods: {
    sortItems (newList) {
      let arr = []
      newList.forEach((a) => {
        if (this.brand === 'All' || a.Brand.Desc1 === this.brand) {
          arr.push(a)
        }
      })
      // eslint-disable-next-line no-undef
      arr = alasql(`SELECT * FROM ? ORDER BY ${this.sort} DESC`, [arr])
      return arr
    },
    beforeLeave (el) {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(el)
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
      el.style.width = width
      el.style.height = height
    }
  }
}
</script>

<style>

</style>
