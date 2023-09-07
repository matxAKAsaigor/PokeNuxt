<template>
  <b-jumbotron>
    <template #header>
      PokeNuxt
    </template>
    <template #lead>
      This website may be your new pokemon based favourite website.
    </template>
    <hr class="my-4">
    <p>
      Check out our sections.
    </p>
    <NuxtLink to="/pokedex">
      <b-button variant="primary">
        Pokedex
      </b-button>
    </NuxtLink>
    <NuxtLink to="/generations">
      <b-button variant="primary">
        Generations
      </b-button>
    </NuxtLink>
  </b-jumbotron>
</template>

<script>
export default {
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
