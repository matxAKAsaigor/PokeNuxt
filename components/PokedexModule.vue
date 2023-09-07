<template>
  <div class="mb-3">
    <h2>
      <NuxtLink :to="enlace">
        {{ titulo }}
      </NuxtLink>
    </h2>
    <div v-if="$fetchState.pending">
      <div class="carousel">
        <div v-if="currentPage > 1" class="carousel-control-prev" role="button">
          <b-button>
            <b-icon icon="arrow-left-short" aria-hidden="true" @click="prevPage" />
            <span class="sr-only">Previous</span>
          </b-button>
        </div>
        <div class="carousel-inner">
          <b-row>
            <b-card
              v-for="index of itemsPerPage"
              :key="index"
              class="col-3"
              img-top
            >
              <b-card-img-lazy src="~/assets/images/pokemon-preview.png" />
              <b-card-text class="text-center">
                <hr class="previewName">
              </b-card-text>
            </b-card>
          </b-row>
        </div>
        <div v-if="isNotLastPage" class="carousel-control-next" role="button">
          <b-button>
            <b-icon icon="arrow-right-short" aria-hidden="true" @click="nextPage" />
            <span class="sr-only">Next</span>
          </b-button>
        </div>
      </div>
    </div>
    <p v-else-if="$fetchState.error">
      An error occurred :(
    </p>
    <div v-else>
      <div class="carousel">
        <div v-if="currentPage > 1" class="carousel-control-prev" role="button">
          <b-button>
            <b-icon icon="arrow-left-short" aria-hidden="true" @click="prevPage" />
            <span class="sr-only">Previous</span>
          </b-button>
        </div>
        <div class="carousel-inner">
          <b-row>
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
          </b-row>
        </div>
        <div v-if="isNotLastPage" class="carousel-control-next" role="button">
          <b-button>
            <b-icon icon="arrow-right-short" aria-hidden="true" @click="nextPage" />
            <span class="sr-only">Next</span>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    titulo: {
      type: String,
      default: 'Check out our Pokedex'
    },
    enlace: {
      type: String,
      default: '/pokedex'
    }
  },
  data () {
    return {
      itemsPerPage: 8,
      apiData: []
    }
  },
  async fetch () {
    this.apiData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${(this.currentPage - 1) * this.itemsPerPage}&limit=${this.itemsPerPage}`
    ).then(res => res.json())
  },
  computed: {
    currentPage () {
      return this.$store.state.pokedex.currentPage
    }
  },
  methods: {
    isNotLastPage: function () {
      return this.currentPage < (this.apiData.count / this.itemsPerPage)
    },
    nextPage: function () {
      if (this.isNotLastPage()) {
        this.$store.commit('pokedex/nextPage')
        this.$fetch()
      }
    },
    prevPage: function () {
      if (this.currentPage > 1) {
        this.$store.commit('pokedex/prevPage')
        this.$fetch()
      }
    },
    buildImgSrc: function (pokeItem) {
      const regex = /https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([0-9]+?)\//
      const number = pokeItem.url.match(regex)[1]
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
