<template>
  <div>
    <h1>Generation {{ generation.id }}: {{ $capitalize(generation.main_region.name) }}</h1>
    <b-img fluid :src="require(`~/assets/images/regions/${generation.main_region.name}.png`)" />
    {{ generation }}
  </div>
</template>

<script>

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.gen)
  },
  async asyncData ({ $http, params }) {
    const generation = await $http.$get(`https://pokeapi.co/api/v2/generation/${params.gen}`)
    return { generation }
  },
  /* data () {
    return {
      generation
    }
  }, */
  head ({ $capitalize }) {
    return {
      title: `${$capitalize(this.generation.main_region.name)} | PokeNuxt`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Info page of generation ${this.generation.id} and the region of ${$capitalize(this.generation.main_region.name)}.`
        }
      ]
    }
  }
}
</script>

<style scoped>
  .carousel {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .carousel-inner {
    width: 90%;
    padding: 2em;
  }

  .previewName {
    background-color: #eee;
    border: 0 none;
    color: #eee;
    height: 1em;
  }
</style>
