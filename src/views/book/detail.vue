<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <h3>{{ book.title }} </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{ book.categorie }}</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>The owner is {not saved yet in database}</div>
                            <div><i class="ni education_hat mr-2"></i>{{ book.departement }}</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>{{ book.description }}</p>
                                    <a href="#">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
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
      },
      book: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    apiService.getBook(to.params.bok_id).then(result => next(vm => vm.setData(result)))
  },
  methods: {
    setData (book) {
      this.book = book.data[0]
    }
  }
}
</script>
