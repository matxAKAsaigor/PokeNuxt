<template>
  <div v-if="pokemons.length > 0" class="mb-3">
    <h2>
      Recently viewed
    </h2>
    <b-row>
      <PokemonCard v-for="pokemon in pokemons" :key="pokemon" :pokemon-name="pokemon" col="2" />
    </b-row>
  </div>
</template>

<script>
export default {
  /* data () {
    return {
      pokemons: []
    }
  }, */
  computed: {
    pokemons () {
      return this.$store.getters['pokemons/getLatest'].slice(0, 6)
    }
  }
}
</script>
