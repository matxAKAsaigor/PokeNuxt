<template>
  <div>
    <JumbotronHomepage />
    <PokedexModule />
    <RecentlyViewedPokemon />
    <!-- <PokemonList /> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: 'Home | PokeNuxt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pokemon fanpage, using PokeApiV2. Made by Igor Carracedo'
        }
      ]
    }
  }
}
</script>

<style scoped>
 .jumbotron {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/images/regions/paldea.png");
    background-size: cover;
  }
  .jumbotron * {
    color: white;
  }

</style>
