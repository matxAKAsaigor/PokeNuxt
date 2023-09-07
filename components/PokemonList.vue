<template>
  <div>
    <p v-if="$fetchState.pending">
      Fetching data...
    </p>
    <p v-else-if="$fetchState.error">
      An error occurred :(
    </p>
    <div v-else>
      <div class="row">
        <b-card
          v-for="pokemon of apiData.results"
          :key="pokemon.name"
          class="col-3"
          img-top
        >
          <NuxtLink :to="`/pokemon/${pokemon.name}`">
            <b-card-img-lazy :src="buildImgSrc(pokemon)" />
            <b-card-text class="text-center">
              {{ $capitalize(pokemon.name) }}
            </b-card-text>
          </NuxtLink>
        </b-card>
      </div>
      <button v-if="currentPage > 1" @click="prevPage">
        Anterior
      </button>
      <button v-if="isNotLastPage" @click="nextPage">
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      itemsPerPage: 20,
      apiData: []
    }
  },
  async fetch () {
    this.apiData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${(this.currentPage - 1) * this.itemsPerPage}&limit=${this.itemsPerPage}`
    ).then(res => res.json())
  },
  methods: {
    isNotLastPage: function () {
      return this.currentPage < (this.apiData.count / this.itemsPerPage)
    },
    nextPage: function () {
      if (this.isNotLastPage()) {
        this.currentPage++
        this.$fetch()
      }
    },
    prevPage: function () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.$fetch()
      }
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
