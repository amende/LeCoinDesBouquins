<template>
<div id="test">
  <button v-on:click="nickel">Add 1</button>
  <p>Le bouton ci-dessus a été cliqué {{ counter }} fois.</p>
</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      counter: 1
    }
  },
  methods: {
    nickel: function (event) {       
      fetch("http://localhost:3000/bouton")
      .then(response => response.json())
      .then(result => {
        this.counter = result.message;
      });
      }
  }
}
</script>
