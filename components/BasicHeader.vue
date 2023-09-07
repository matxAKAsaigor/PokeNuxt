<template>
  <header>
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" class="mb-0">
        <NuxtLink to="/">
          <PokeNuxtLogo />
        </NuxtLink>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/pokedex">
            Pokedex
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/generations">
            Generations
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about-us">
            About us
          </NuxtLink>
        </li>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<style scoped>

</style>
