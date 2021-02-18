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
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0">
                        <template>
                            <h1>
                                Partager un livre
                            </h1>
                            <div class="text-center text-muted mb-4">
                                <small>Raboule le bouquin frère</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Titre du livre"
                                            addon-left-icon="ni ni-book-bookmark"
                                            v-model="form.title">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Catégorie"
                                            addon-left-icon="ni ni-books"
                                            v-model="form.categorie">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Département"
                                            addon-left-icon="ni ni-compass-04"
                                            v-model="form.departement">
                                </base-input>
                                <div class="form-group mb-3 input-group">
                                    <base-switch :value="form.isDonation" @input="form.isDonation=Boolean($event)" id="switchIsDonation"></base-switch>
                                    <p class="base-switch-label">Ce livre est un don</p>
                                </div>
                                <textarea class="form-control form-control-alternative" rows="3" placeholder="Description du livre" v-model="form.description"></textarea>
                                <div class="text-center">
                                    <base-button type="success" class="my-4" v-on:click="create">Partager</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
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
        isDonation: false,
        title: '',
        categorie: '',
        departement: '',
        description: ''
      }
    }
  },
  methods: {
    create () {
      apiService.createBook(this.form)
    }
  }
}
</script>
<style>
</style>
