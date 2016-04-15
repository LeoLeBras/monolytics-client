<template>
  <div class="comments_weekly_top" v-on:click="onOpen">
    <span class="numbers_quotes">
      <span class="number_comments number_comments_1">{{ pirate_bay_seeders }}<span><br>Pirate Bay seeders</span></span>
      <span class="number_comments number_comments_2">{{ trakt_plays }}<span><br>Trakt plays</span></span>
      <span class="number_comments number_comments_3">{{ metascore }}<span><br>Metascore</span></span>
      <span class="number_comments number_comments_4">{{ rotten_tomatoes_meter }}%<span><br>Tomatometer</span></span>
      <span class="number_comments number_comments_5">{{ youtube_view_count }}<span><br>Youtube Trailers Views</span></span>
      <span class="number_comments number_comments_6">{{ youtube_comment_count }}<span><br>Youtube Comments</span></span>
      <span class="number_comments number_comments_7">{{ imdb_rating }}<span><br>IMDB Rating </span></span>
      <span class="number_comments number_comments_8">All Stats<span><br>See all our stats</span></span>
    </span>
  </div>
</template>

<script>

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

    methods: {
      onOpen() {
        this.$dispatch('onOpen', true);
      }
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
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "../theme";

  .comments_weekly_top {
    position: absolute;
    right: 0;
    font-family: 'AdelleRegular', sans-serif;
    font-size: 12px;
    line-height: 0.8;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 15px 20px;
    color: $main_text_color;
    height: 100px;
    width: 220px;
    border-left: 1px solid $main_text_color;
    overflow: hidden;
    cursor: pointer;
  }

  .number_comments {
    display: block;
    position: absolute;
    font-family: 'AdelleBold', sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    top: 35px;
  }

  .number_comments span {
    font-family: 'AdelleRegular', sans-serif;
    font-size: 12px;
    line-height: 1.1;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .number_comments_1 {
    animation: effect_comments 4s linear;
    transform: translateX(-200px) translateY(0px);
    animation-fill-mode: forwards;
  }

   .number_comments_2 {
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 4s;
    animation-fill-mode: forwards;
  }

   .number_comments_3 {
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 8s;
    animation-fill-mode: forwards;
    opacity: 1;
  }

   .number_comments_4 {
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 12s;
    animation-fill-mode: forwards;
    opacity: 1;
  }

   .number_comments_5 {
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 16s;
    opacity: 1;
  }

   .number_comments_6 {
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 20s;
    opacity: 1;
  }

   .number_comments_7 {
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 24s;
    opacity: 1;
  }

  .number_comments_8 {
    animation: effect_comments_final 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 28s;
    opacity: 1;
    animation-fill-mode: forwards
  }

  @keyframes effect_comments {
    0% {
      transform: translateX(-200px);
    }
    20% {
      transform: translateX(0px);
    }
    80% {
      transform: translateX(0px);
      opacity: 1;
    }
    100% {
      transform: translateX(0px) translateY(200px) ;
      opacity: 0;
    }
  }

  @keyframes effect_comments_final {
    0% {
      transform: translateX(-200px);
    }
    20% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

</style>
