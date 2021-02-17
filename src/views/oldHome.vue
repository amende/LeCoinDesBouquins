<template>
<div class="home">
  <div class="page-title">
    <h1>Bienvenue au Coin Bouquin !</h1>
  </div>
  <section class="section-shaped my-0">
    <div class="shape shape-style-1 shape-default shape-skew">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
  <div class="slogan">
    <b-img :src="background_title" fluid></b-img>
    <h2>Découvrez de nouveaux livres, partagez les vôtres !</h2>
  </div>
  <div class="book-search">
    <div>
      <b-button variant="success">Partager un livre</b-button>
    </div>
    <b-form>
      <div class="search-fields">
        <div class="special-search-bar">
          <b-input type="search" name="search" placeholder="Quel livre cherchez-vous ?"></b-input>
          <b-button class="search-btn" type="submit"></b-button>
        </div>
        <multiselect v-model="value_region" :options="regions" placeholder="Choisir une région" :select-label="'Choisir'" :deselect-label="'Supprimer'" :selected-label="'Choisi'" open-direction="bottom">
          <span slot="noResult">Oops! Pas de région de ce nom !</span>
        </multiselect>
        <multiselect v-model="value_categorie" :options="categories" placeholder="Choisir une catégorie" :select-label="'Choisir'" :deselect-label="'Supprimer'" :selected-label="'Choisi'" open-direction="bottom">
          <span slot="noResult">Oops! Pas de catégorie de ce nom !</span>
        </multiselect>
      </div>
    </b-form>
    <div class="search-button">
      <b-button variant="success" type="submit">Rechercher</b-button>
    </div>
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
import backgroundTitle from '@/assets/images/bunchofbooks.jpg'

export default {
  name: 'Home',
  data () {
    return {
      value_categorie: null,
      value_region: null,
      background_title: backgroundTitle,
      categories: ['bit', 'non pas ce type là', 'hahahaha'],
      regions: ['Ile-de-France', 'Noirmoutier', 'Malakoff', 'Cachan']
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
