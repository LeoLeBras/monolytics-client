<template>
  <app-header></app-header>
  <div class="container">
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

        <div class="comments_weekly_top">
          <span class="number_comments">7540</span><br>
          Comments on IMDB
        </div>

        <div class="trurank_weekly_top">
          <span class="good_stat"></span>
          <div class="trurank_info">
            <span>
              Trurank <br />
              445
            </span>
          </div>
        </div>
        <div class="movie_weekly_top">
          <span>
            {{ title }}
          </span>
        </div>
        <div class="separator_stats"></div>
          <div class="noise_weekly_top">
            <span>noise</span>
            <span class="noise_value"></span>
          </div>
          <div class="reality_weekly_top">
            <span>reality</span>
            <span class="reality_value"></span>
          </div>
        </div>
        <scroll></scroll>
        <div class="next_container" v-show="nextRank != 10">
          <a v-link="{ path: '/tops/trending/' + nextRank }" class="next_link">
            0{{ nextRank }}
          </a>
        </div>
      </div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import dynamics from 'dynamics.js';

  Vue.component('app-header', require('./../header'));
  Vue.component('movie-video', require('./video'));
  Vue.component('scroll', require('./scroll'));

  export default {

    /**
     * Set default data
     */
    data() {
      return {
        nextRank: parseInt(this.$route.params.rank) + 1,
        data: [],
        title: ''
      };
    },

    ready() {

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
        this.$broadcast('setMovie', movie)
      },


      /**
       * Set pagination
       */
      setPagination() {
        if(this.nextRank < 10) {
          this.nextRank += 1;
        }
      }

    }
  }

</script>

<style lang="sass" scoped>

  @import "../theme";
  @import "./style";

</style>
