<template>
  <app-header></app-header>
  <div>
    <movie-video></movie-video>
    <div class="wrapper">

      <div class="stats_weekly_top">
        <div class="title_weekly_top">
          <span>
            Top <br />
            {{ $route.params.category }}
          </span>
        </div>
        <div class="number_weekly_top">
          0{{ $route.params.rank }}
        </div>

        <data></data>
        <stats></stats>


        <div class="trurank_weekly_top">
          <span class="good_stat"></span>
          <div class="trurank_info">
            <span>
              Trurank <br />
              {{ trurank }}
            </span>
          </div>
        </div>
        <div class="movie_weekly_top">
          <span>
            {{ title }}
          </span>
        </div>
      </div>
  </div>
  <pagination></pagination>
  <scroll></scroll>
</template>

<script>

  import Vue from 'vue';
  import dynamics from 'dynamics.js';

  Vue.component('app-header', require('./../header'));
  Vue.component('movie-video', require('./video'));
  Vue.component('scroll', require('./scroll'));
  Vue.component('stats', require('./stats'));
  Vue.component('pagination', require('./pagination'));
  Vue.component('data', require('./data'));

  export default {

    /**
     * Set default data
     */
    data() {
      return {
        data: [],
        title: '',
        trurank: 0
      };
    },

    watch: {

      /**
       * Watch route handler
       */
      '$route.params': {
        handler: function () {
          this.setPagination();
          this.setMovie();
        },
        deep: true
      }

    },

    events: {

      /**
       * Fetch data from api
       */
      getData(value) {
        this.data = value;
        this.setMovie();
      }

    },

    methods: {

      /**
       * Get new movie
       */
      setMovie() {
        const movie = this.data.filter(
          movie => movie.type == this.$route.params.category
        )[this.$route.params.rank];
        this.title = movie['title'];
        this.trurank = parseInt(movie['trurank_score']);
        this.$broadcast('setMovie', movie)
      },


      /**
       * Set pagination
       */
      setPagination() {
        if(this.nextRank < 10) {
          this.nextRank += 1;
        }
        if(this.prevRank > 0) {
          this.prevRank += 1;
        }
      }

    }
  }

</script>

<style lang="sass" scoped>

  @import "../theme";
  @import "./style";

  .wrapper {
      position: absolute;
      width: 1200px;
      height: 50vw;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
      margin: 0 auto;
  }

</style>
