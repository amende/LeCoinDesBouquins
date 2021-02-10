<template>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Votre adresse mail :</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nous ne divulguerons cette adresse à personne</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Votre mot de passe: </label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">cochez ici, ça ne sert à rien mais ça fait classe</label>
  </div>
  <button type="submit" class="btn btn-primary">Je m'inscris !</button>
</form>

</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      null: 0
    }
  },
  methods: {
    nickel: function (event) {
      fetch('http://localhost:3000/bouton')
        .then(response => response.json())
        .then(result => {
          this.counter = result.message
        })
    }
  }
}
</script>

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