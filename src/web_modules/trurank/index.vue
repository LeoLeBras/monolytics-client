<template>
  <app-header></app-header>
  <div class="container top">
    <h1 class="title">Tops trurank</h1>
  </div>
  <div class="parameters">
    <span>Noise</span>
    <span>Reality</span>
  </div>
  <ul class="main_liste">
    <div class="separator_1"></div>
    <div class="separator_2"></div>
    <li v-bind:class="{ 'number': true, ['number_' + index]: true}" v-for="(index, movie) in data">
      <span>{{ index + 1 }}.</span>
      <span class="movie">{{ movie.title }} <span class="light">{{ movie.trurank_score }}</span></span>
      <span class="noise">{{ movie.trurank_noise }}</span>
      <span class="reality">{{ movie.trurank_reality }}</span>
    </li>
</template>
<script>

  import Vue from 'vue';
  Vue.component('app-header', require('./../header'));

  export default {

    props: ['fetchedtopmovies'],

    // Set default data
    data() {
      return {
        data: []
      };
    },

    // Wait data ...
    ready() {
      if(this.fetchedtopmovies != null) {
        this.getData(this.fetchedtopmovies);
      }
    },

    // ... fetch data
    events: {
      getTrurankTopMovies(value) {
        this.getData(value);
      }
    },

    // ... and sort them ! =)
    methods: {
      getData(value) {
        this.data = value.sort(
          (movieA, movieB) => movieB.trurank_score - movieA.trurank_score
        ).slice(0,10);
      }
    }

  }

</script>

<style lang="sass" scoped>

  @import "../theme";
  @import "./style";

</style>
