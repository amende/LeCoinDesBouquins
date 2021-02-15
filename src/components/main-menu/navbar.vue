<template>
    <div id="main-navbar">
    <b-navbar toggleable="lg">
        <b-navbar-brand href="/">
            <b-img thumbnail :src="logo_image" class="thumbnail-logo"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/">Le Coin Bouquin</b-nav-item>
        </b-navbar-nav>
        <b-button size="sm" variant="success" href="#/connexion" id="navbar-partage">Partager un livre</b-button>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-button size="sm" variant="success" href="#/connexion">Connexion</b-button>
            <b-button size="sm" variant="success" href="#/signup">Inscription</b-button>
            </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'navbar',
  data () {
    return {
      logo_image: logo
    }
  }
}
</script>
