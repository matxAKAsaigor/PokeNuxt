<template>
  <div>
    <b-row>
      <h1>
        {{ pokemon.name }} #{{ pokemon.id.toString().padStart(4, '0') }}
      </h1>
    </b-row>
    <b-row>
      <b-col>
        <b-img :src="pokemon.sprites.other['official-artwork'].front_default" fluid-grow :alt="pokemon.name" />
      </b-col>
      <b-col>
        <b-row class="pokemon-ability-info">
          <b-col>
            <ul>
              <li>
                <span class="attribute-title">Altura:</span>
                <span class="attribute-value">{{ pokemon.height / 10 }} m</span>
              </li>

              <li>
                <span class="attribute-title">Peso:</span>
                <span class="attribute-value">{{ pokemon.weight / 10 }} kg</span>
              </li>

              <li>
                <span class="attribute-title">Sexo:</span>

                <span class="attribute-value">
                  <b-icon icon="gender-female" aria-hidden="true" />
                  <b-icon icon="gender-male" aria-hidden="true" />
                </span>
              </li>
            </ul>
          </b-col>
          <b-col>
            <ul>
              <li>
                <span class="attribute-title">Categoría:</span>
                <span class="attribute-value"> - </span>
              </li>
              <li>
                <span class="attribute-title">Habilidad:</span>
                <span class="attribute-value"> - </span>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      {{ pokemon }}
    </b-row>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.name) === false
  },
  async asyncData ({ params, $axios, $capitalize }) {
    const pokemon = await $axios.$get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    pokemon.name = $capitalize(pokemon.name)
    return {
      pokemon
    }
  },
  head () {
    return {
      title: this.pokemon.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Información útil sobre el pokemon ${this.pokemon.name}.`
        }
      ]
    }
  },
  created () {
    this.$store.commit('pokemons/addLatest', this.pokemon.name)
  }
}
</script>

<style scoped>
.row.pokemon-ability-info {
  background-color: #30a7d7;
  color: #fff;
  border-radius: .5em;
  padding: .5em;
  font-size: 1.2em;
}
</style>
