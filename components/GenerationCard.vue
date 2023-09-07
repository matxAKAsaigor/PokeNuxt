<template>
  <b-col cols="6">
    <NuxtLink :to="`/generations/${generation.id}`">
      <b-card
        v-if="!$fetchState.pending && !$fetchState.error"
        overlay
        :title="$capitalize(generation.main_region.name)"
        :sub-title="`Generation ${generation.id}`"
        :img-src="require(`~/assets/images/regions/${generation.main_region.name}.png`)"
        :img-alt="generation.main_region.name"
        img-top
        class="mb-2"
      />
    </NuxtLink>
  </b-col>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-default-prop
  props: { objectData: Object },
  data ({ props }) {
    return {
      props,
      generation: []
    }
  },
  async fetch () {
    this.generation = await fetch(this.objectData.url).then(res =>
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
