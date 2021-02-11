<template>
<div class="home">
  <div class="page-title">
    <h1>Bienvenue au Coin Bouquin !</h1>
  </div>
  <div class="slogan">
    <b-img :src="background_title" fluid></b-img>
    <h2>Découvrez de nouveaux livres, partagez les votres !</h2>
  </div>
  <div>
  <h2> Sélection de livres disponibles sur le site : </h2>
    <p> SELECT title FROM livre ORDER BY note DESC :D </p>
      <h2>Nos liens</h2>
      <ul>
        <li>
          <a
            href="https://facebook.com/gabriel.michard"
            target="_blank"
          >
            Notre Page Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/GabrielMaurin4"
            target="_blank"
          >
            Notre twitter
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import backgroundTitle from '@/assets/bunchofbooks.jpg'

export default {
  name: 'Home',
  data () {
    return {
      background_title: backgroundTitle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00203FFF;
}
</style>
