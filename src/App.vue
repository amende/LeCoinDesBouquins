<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/main-menu/navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
@import './styles/common.css';
@import './styles/home.css';
@import './styles/fun/search_bar.css';
</style>
