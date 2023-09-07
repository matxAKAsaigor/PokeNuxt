<template>
  <footer class="bd-footer text-muted">
    <b-row>
      <b-col class="text-center">
        <p>Designed and built with all the love in the world by <b>Igor Carracedo Luzuriaga</b>.</p>
      </b-col>
      <b-col cols="3">
        <NuxtLink to="/">
          <PokeNuxtLogo />
        </NuxtLink>
      </b-col>
    </b-row>
  </footer>
</template>

<style scoped>
  .bd-footer {
    padding: 2rem 0;
    text-align: center;
    background-color: #eee;
  }
</style>
