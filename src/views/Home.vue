<template>
<div class="home">
  <div class="page-title">
    <h1>Bienvenue au Coin Bouquin !</h1>
  </div>
  <div class="slogan">
    <b-img :src="background_title" fluid></b-img>
    <h2>Découvrez de nouveaux livres, partagez les votres !</h2>
  </div>
  <div class="book_search">
    <b-form>
      <div class="special-search-bar">
        <b-input type="search" name="search" required></b-input>
        <b-button class="search-btn" type="submit"></b-button>
      </div>
      <div>
        <label class="typo__label">Catégorie</label>
        <multiselect v-model="value_categorie" :options="categories" placeholder="Choisir une catégorie">
          <span slot="noResult">Oops! Pas de catégorie de ce nom !.</span>
        </multiselect>
      </div>
    </b-form>
  </div>
  <div>
  <h2> Sélection de livres disponibles sur le site : </h2>
    <p> SELECT title FROM livre ORDER BY note DESC :D </p>
        <b-img :src="background_title" fluid></b-img>

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
      value_categorie: null,
      background_title: backgroundTitle,
      categories: ['bit', 'non pas ce type là', 'hahahaha']
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
