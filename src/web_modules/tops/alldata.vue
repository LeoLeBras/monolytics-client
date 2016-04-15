<template>
  <div class="container" v-el:container>
    <img src="../../assets/img/quit.svg" alt="cancel" class="quit" v-on:click="onClose">
    <div class="title">stats</div>
    <div class="stats_container">
      <div class="stats stats_1">
        <span class="main_span">STREAMS [TRAKT PLAYS]</span>
        <span class="number number_1">{{ trakt_plays }}</span>
      </div>
      <div class="stats stats_2">
        <span class="main_span">PIRATE BAY SEEDERS</span>
        <span class="number number_2">{{ pirate_bay_seeders }}</span>
      </div>
      <div class="stats stats_3">
        <span class="main_span">YOUTUBE TRAILER VIEWS</span>
        <span class="number number_3">{{ youtube_view_count }}</span>
      </div>
      <div class="stats stats_4">
        <span class="main_span">YOUTUBE COMMENTS</span>
        <span class="number number_4">{{ youtube_comment_count }}</span>
      </div>
      <div class="stats stats_5">
        <span class="main_span">TOMATOMETER</span>
        <span class="number number_5">{{ rotten_tomatoes_meter }}%</span>
      </div>
      <div class="stats stats_6">
        <span class="main_span">IMDb RATINGS</span>
        <span class="number number_6">{{ imdb_rating }}</span>
      </div>
      <div class="stats stats_7">
        <span class="main_span">REVENUES</span>
        <span class="number number_7">{{ revenue }}</span>
      </div>
      <div class="stats stats_8">
        <span class="main_span">METASCORE</span>
        <span class="number number_8">{{ metascore }}</span>
      </div>
    </div>
  </div>
</template>

<script>

  import dynamics from 'dynamics.js';

  export default {

    data() {
      return {
        trakt_plays: 0,
        pirate_bay_seeders: 0,
        revenue: 0,
        metascore: 0,
        rotten_tomatoes_meter: 0,
        youtube_view_count: 0,
        youtube_comment_count: 0,
        imdb_rating: 0
      };
    },

    events: {
      setMovie(movie) {
        this.pirate_bay_seeders = movie.pirate_bay_seeders || 0;
        this.trakt_plays = movie.trakt_plays || 0;
        this.revenue = movie.revenue || '?';
        this.metascore = movie.metascore || 0;
        this.rotten_tomatoes_meter = movie.rotten_tomatoes_meter || 0;
        this.youtube_view_count = movie.youtube_view_count || 0;
        this.youtube_comment_count = movie.youtube_comment_count || 0;
        this.imdb_rating = movie.imdb_rating || 0;
      },
      onOpen() {
        dynamics.animate(this.$els.container, {
          scale: 1,
          opacity: 1
        }, {
          frequency: 100,
          friction: 100,
          duration: 1200
        });
      }
    },

    methods: {
      onClose() {
        dynamics.animate(this.$els.container, {
          scale: 1.5,
          opacity: 0
        }, {
          type: dynamics.spring,
          frequency: 200,
          friction: 200,
          duration: 1500
        });
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "../theme";

  .container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(black, .95);
    z-index: 10;
    opacity: 0;
    pointer-events: none;
  }

  .quit {
    position: absolute;
    left: 50%;
    margin-top: 50px;
    transform: translateX(-50%);
    pointer-events: visible;
  }

  .title {
    position: absolute;
    font-family: "AdelleBold", sans-serif;
    font-size: 33px;
    letter-spacing: 5.5px;
    text-transform: uppercase;
    color: $main_text_color;
    left: 50%;
    top: 30%;
    transform: translateX(-50%) translateY(-50%);
  }

  .stats_container {
    position: absolute;
    width: 900px;
    height: 236px;
    margin: auto;
    left: 54%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .stats {
    position: relative;
    height: 100px;
    width: 218px;
    border-left: solid 1px $main_text_color;
    display: inline-block;
    margin-bottom: 40px;
    text-align: left;
    padding-left: 10px;
    padding-top: 5px;
  }

  .main_span {
    display: block;
    font-family: "AdelleLight", sans-serif;
    font-size: 17px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: $main_text_color;
  }
  .number {
    position: relative;
    top: 30px;
    font-family: "AdelleBold", sans-serif;
    font-size: 33px;
    letter-spacing: 5.5px;
    text-transform: uppercase;
  }

  .stats_1 {
    color: #FF2B69;
  }

  .stats_2 {
    color: #00C2FF;
  }

  .stats_3 {
    color: #FFC63A;
  }

  .stats_4 {
    color: #9013FE;
  }

  .stats_5 {
    color: #9013FE;
  }

  .stats_6 {
    color: #FFC63A;
  }

  .stats_7 {
    color: #FF2B69;
  }

  .stats_8 {
    color: #00C2FF;
  }

</style>
