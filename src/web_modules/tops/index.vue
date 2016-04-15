<template>
  <app-header></app-header>
  <div v-el:container style="position:absolute;width:100%;height:100%">
    <movie-video></movie-video>
    <alldata></alldata>
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

  Vue.component('app-header', require('./../header'));
  Vue.component('movie-video', require('./video'));
  Vue.component('scroll', require('./scroll'));
  Vue.component('stats', require('./stats'));
  Vue.component('pagination', require('./pagination'));
  Vue.component('data', require('./data'));
  Vue.component('alldata', require('./alldata'));

  export default {

    props: ['fetchedtopmovies'],

    /**
     * Set default data
     */
    data() {
      return {
        title: '',
        data: null,
        deltaY: []
      };
    },



    ready() {

      /**
       * Get data
       */
      if(this.fetchedtopmovies != null) {
        this.data = this.fetchedtopmovies;
        this.setMovie();
      }


      /**
      * Watch scroll event
      */

      const categories = ['trending', 'popular', 'anticipated', 'boxoffice'];
      let timer, direction;

      // Detect scroll
      this.$els.container.addEventListener('mousewheel', (e) => {
        this.deltaY.push(e.deltaY);
        clearTimeout(timer);
        timer = setTimeout(() => {
          const currentCategoryIndex = categories.indexOf(this.$route.params.category);
          const lastDeltaY = this.deltaY[(this.deltaY.length - 8)];
          let categoryIndex = currentCategoryIndex ;

          // Test direction
          if(lastDeltaY > 0) {
            if(currentCategoryIndex < categories.length - 1) { // bottom
              categoryIndex += 1;
            } else {
              this.$route.router.go(`/trurank`);
              return;
            }
          }
          else if(lastDeltaY < 0 && currentCategoryIndex > 0) { // top
            categoryIndex -= 1;
          }

          // Redirect
          if(categoryIndex) {
            this.$route.router.go(`/tops/${categories[categoryIndex]}/1`);
            this.deltaY = [];
          }

        }, 50);
      });
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
      getTopMovies(value) {
        this.data = value;
        this.setMovie();
      },


      /**
       * Open data box
       */
      onOpen() {
        this.$broadcast('onOpen', true);
      }

    },

    methods: {

      /**
       * Get new movie
       */
      setMovie() {
        const movie = this.data.filter(
          movie => movie.type == this.$route.params.category
        ).sort(
          (movieA, movieB) => movieB.trurank_score - movieA.trurank_score
        )[this.$route.params.rank];
        this.title = movie['title'] || '';
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
