<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/custom/main-menu/navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
@import '/assets/styles/common.css';
@import '/assets/styles/home.css';
@import '/assets/styles/fun/search_bar.css';
</style>
