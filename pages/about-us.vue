<template>
  <div class="about-us">
    <h1>About Us</h1>
    <b-row>
      <b-col>
        <p>Welcome to the PokeNuxt Pokédex!</p>
        <p>At PokeNuxt, we are passionate about the exciting world of Pokémon. Our mission is to provide you with a comprehensive and accessible tool based on the wonderful PokeAPI V2, created by the talented Igor Carracedo. Here, we offer a unique experience to explore and learn all about the Pokémon that inhabit the vast Pokémon universe.</p>
        <p>Our team of Pokémon experts is dedicated to providing you with the most accurate and up-to-date information about each creature, from the classics to the most recent additions. We believe in the importance of sharing the knowledge and fun that Pokémon have brought us over the years. That's why we are proud to be part of this passionate community.</p>
        <p>At PokeNuxt, we value the accuracy and authenticity of information. We work tirelessly to ensure that every Pokémon entry you find here is complete with essential details, statistics, evolutions, and more. Our user-friendly interface makes exploring the world of Pokémon easy and exciting for everyone, from novice trainers to experienced Pokémon Masters.</p>
        <p>We are always eager to hear your feedback and suggestions to improve your experience in our Pokédex. Our dedication to quality and excellence drives us to stay at the forefront of Pokémon information.</p>
        <p>We invite you to explore our Pokédex and embark on an exciting adventure to catch 'em all! If you have any questions or need assistance, don't hesitate to get in touch with us. We are here to help you become a true Pokémon Master.</p>
        <p>Thank you for being part of our community and for choosing PokeNuxt as your ultimate resource to explore the Pokémon world.</p>
        <p>Gotta catch 'em all!</p>
      </b-col>
      <b-col>
        <b-img fluid src="~assets/images/about-us.jpg" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage',
  head () {
    return {
      title: 'About Us | PokeNuxt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to the PokeNuxt Pokédex!At PokeNuxt, we are passionate about the exciting world of Pokémon. Our mission is to provide you with a comprehensive and accessible tool based on the wonderful PokeAPI V2, created by the talented Igor Carracedo. Here, we offer a unique experience to explore and learn all about the Pokémon that inhabit the vast Pokémon universe.'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
