<template>
  <b-col :cols="col">
    <b-card
      v-if="!$fetchState.pending && !$fetchState.error"
      img-top
    >
      <NuxtLink :to="`/pokemon/${pokemon.name}`">
        <b-card-img-lazy :src="pokemon.sprites.other['official-artwork'].front_default" />
        <b-card-text class="text-center">
          {{ $capitalize(pokemon.name) }}
        </b-card-text>
      </NuxtLink>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    pokemonName: String,
    col: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      pokemon: {}
    }
  },
  async fetch () {
    this.pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`).then(res =>
      res.json()
    )
  }
}
</script>

<style scoped>
.card{
  max-height: 300px;
  overflow: hidden;
}

.card-title, .card-subtitle {
  color: #1c1c1c !important;
}
</style>
