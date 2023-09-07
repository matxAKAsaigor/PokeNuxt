<template>
  <div>
    <h1>Generations</h1>
    <b-row>
      <GenerationCard v-for="gen in apiData.results" :key="gen.name" :object-data="gen" />
    </b-row>
  </div>
</template>

<script>

export default {
  async asyncData ({ $http, params }) {
    const apiData = await $http.$get('https://pokeapi.co/api/v2/generation/')
    return { apiData }
  },
  head () {
    return {
      title: 'Generations | PokeNuxt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pokemon generation list'
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
