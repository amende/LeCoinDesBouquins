<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> Partagez vos livres avec votre famille, vos amis, et notre communauté ! </p>
      <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="btn btn-secondary" href="#/connexion">Se connecter</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-secondary" href="#/signup">S'inscrire</a>
  </li>
</ul>
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
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bienvenue au coin des bouquins'
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
