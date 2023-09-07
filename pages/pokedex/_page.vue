<template>
  <div>
    <h1>Pokedex - Page {{ currentPage }} </h1>
    <div class="carousel">
      <div v-if="currentPage > 1" class="carousel-control-prev" role="button">
        <NuxtLink :to="`/pokedex/${currentPage - 1}`">
          <b-button>
            <b-icon icon="arrow-left-short" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </b-button>
        </NuxtLink>
      </div>
      <div class="carousel-inner">
        <b-row>
          <b-col
            v-for="pokemon of apiData.results"
            :key="pokemon.name"
            class="p-0"
            cols="6"
            md="4"
            lg="3"
          >
            <b-card img-top>
              <NuxtLink :to="`/pokemon/${pokemon.name}`">
                <b-card-img-lazy :src="buildImgSrc(pokemon)" blank-src="~/assets/images/pokemon-preview.png" />
                <b-card-text class="text-center">
                  {{ $capitalize(pokemon.name) }}
                </b-card-text>
              </NuxtLink>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-if="isNotLastPage" class="carousel-control-next" role="button">
        <NuxtLink :to="`/pokedex/${currentPage + 1}`">
          <b-button>
            <b-icon icon="arrow-right-short" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </b-button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  validate ({ params }) {
    // Must be a number or undefined
    return /^\d+$/.test(params.page) || typeof (params.page) === 'undefined'
  },
  async asyncData ({ $http, params }) {
    const itemsPerPage = 20
    const currentPage = (typeof (params.page) !== 'undefined') ? parseInt(params.page) : 1
    const apiData = await $http.$get(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`)
    return { itemsPerPage, currentPage, apiData }
  },
  head () {
    return {
      title: `Pokedex | Página ${this.currentPage}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Página #${this.currentPage} de la Pokedex de PokeNuxt.`
        }
      ]
    }
  },
  created () {
    // this.currentUser = this.$store.getters['users/current'].displayname
  },
  methods: {
    isNotLastPage: function () {
      return this.currentPage < (this.apiData.count / this.itemsPerPage)
    },
    buildImgSrc: function (pokeItem) {
      const regex = /https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([0-9]+?)\//
      const number = pokeItem.url.match(regex)[1]
      // const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
      const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
      return imgSrc
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
