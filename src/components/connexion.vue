
<template>
  <form>
    <div class="mb-3">
        <label for="exampleinputemail" class="form-label">Votre email : </label>
        <b-form-input v-model="form.email" placeholder="votre email"></b-form-input>
      </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Votre mot de passe : </label>
      <b-form-input v-model="form.pwd" placeholder="votre mdp"></b-form-input>
    </div>
    <b-button variant="primary" v-on:click="connect">Je me connecte</b-button>
  </form>
</template>

<script>
import { APIService } from '../router/APIService'
export default {
  name: 'test',
  data () {
    return {
       form: {
        email: '',
        pwd: ''
      }
    }
  },
  methods :{
  connect(){
    apiService.login(this.form);
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
