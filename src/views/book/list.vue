<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md book-search">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0">
                        <template>
                            <h1>
                                Chercher un livre
                            </h1>
                            <div class="text-center text-muted mb-4">
                                <small>T'as pas shakspear ?</small>
                            </div>
                            <form role="form">
                                <div class="special-search-bar">
                                    <b-input  v-model="form.title" type="search" name="search" placeholder="Quel livre cherchez-vous ?"></b-input>
                                    <b-button class="search-btn" v-on:click="search"></b-button>
                                </div>
                                <multiselect v-model="form.categorie" :options="categories" placeholder="Choisir une catégorie" :select-label="'Choisir'" :deselect-label="'Supprimer'" :selected-label="'Choisi'" open-direction="bottom">
                                    <span slot="noResult">Oops! Pas de catégorie de ce nom !</span>
                                </multiselect>
                                <multiselect v-model="form.region" :options="regions" placeholder="Choisir une région" :select-label="'Choisir'" :deselect-label="'Supprimer'" :selected-label="'Choisi'" open-direction="bottom">
                                    <span slot="noResult">Oops! Pas de région de ce nom !</span>
                                </multiselect>
                                <div class="form-group mb-3 input-group">
                                    <base-switch :value="form.isDonation" @input="form.isDonation=Boolean($event)" id="switchIsDonation"></base-switch>
                                    <p class="base-switch-label">Je cherche uniquement des livres que je peux garder</p>
                                </div>
                                <div class="text-center">
                                    <base-button type="success" class="my-4" v-on:click="search">Chercher</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
        <div class="section section-lg pt-lg-0 mt-50">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4" v-for="(book, index) in books" v-bind:key="index" v-on:click="goToBookDetail(book.bok_id)">
                                <card class="border-0  pointer-cursor" hover shadow body-classes="py-5">
                                    <h6 class="text-primary text-uppercase">{{ book.title }}</h6>
                                    <p class="description mt-3">{{ book.description }}</p>
                                    <badge v-if="book.is_donation" type="primary" rounded>Don</badge>
                                    <badge type="primary" rounded>{{ book.categorie }}</badge>
                                    <badge type="primary" rounded>{{ book.departement }}</badge>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {APIService} from '@/router/APIService'
const apiService = new APIService()

export default {
  data () {
    return {
      form: {
        title: '',
        categorie: null,
        region: null,
        isDonation: false
      },
      categories: ['bit', 'non pas ce type là', 'hahahaha'],
      regions: ['Ile-de-France', 'Noirmoutier', 'Malakoff', 'Cachan'],
      books: {}
    }
  },
  methods: {
    search () {
      apiService.searchBook(this.form).then(result => { this.books = result })
    },
    goToBookDetail (bokId) {
      window.location = '#/book/' + bokId
    }
  }
}
</script>
<style>
@import '../../assets/styles/book.css';
</style>
