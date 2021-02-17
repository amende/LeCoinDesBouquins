<template>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Votre adresse mail :</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
    <div id="emailHelp" class="form-text">Nous ne divulguerons cette adresse à personne (inch allah)</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Votre mot de passe (lui non plus on le révèle pas) : </label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.pwd">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">cochez ici, ça ne sert à rien mais ça fait classe</label>
  </div>
  <b-button variant="primary" v-on:click="submit">Je m'inscris !</b-button>
</form>

</template>

<script>
import {APIService} from '@/router/APIService'
const apiService = new APIService()

export default {
  name: 'inscription',
  data () {
    return {
      form: {
        email: '',
        pwd: ''
      }
    }
  },
  methods: {
    submit () {
      apiService.register(this.form)
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
