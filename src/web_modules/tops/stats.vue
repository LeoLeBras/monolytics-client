<template>
  <div class="comments_weekly_top">
    <span class="numbers_quotes">
      <span class="number_comments number_comments_1">{{ pirate_bay_seeders }}<span><br>Pirate Bay seeders</span></span><br>
      <span class="number_comments number_comments_2">{{ trakt_plays }}<span><br>Trakt plays</span></span><br>
      <span class="number_comments number_comments_3">{{ trakt_plays }}<span><br>Revenues</span></span><br>
      <span class="number_comments number_comments_4">{{ trakt_plays }}<span><br>Metascore</span></span><br>
      <span class="number_comments number_comments_5">{{ trakt_plays }}<span><br>Tomatometer</span></span><br>
      <span class="number_comments number_comments_6">{{ trakt_plays }}<span><br>Youtube Trailers Views</span></span><br>
      <span class="number_comments number_comments_7">{{ trakt_plays }}<span><br>Youtube Comments</span></span><br>
      <span class="number_comments number_comments_8">{{ trakt_plays }}<span><br>IMDB Rating </span></span><br>
      <span class="number_comments number_comments_9">ALl Stats<span><br>See all our stats</span></span><br>
    </span>
  </div>
</template>

<script>
	
  export default {

    data() {
      return {
        trakt_plays: 0,
        pirate_bay_seeders: 0
      };
    },

    events: {
      setMovie(movie) {
        this.pirate_bay_seeders = movie.pirate_bay_seeders;
        this.trakt_plays = movie.trakt_plays;
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
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 15px 20px;
    color: $main_text_color;
    height: 100px;
    width: 220px;
    border-left: 1px solid $main_text_color; 
    overflow: hidden;
  }

  .number_comments {
    position: relative;
    font-family: 'AdelleBold', sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    top: 25px;
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
    position:absolute;
    display: block;
    animation: effect_comments 4s linear;
    transform: translateX(-200px) translateY(0px);
    animation-fill-mode: forwards;
  }

   .number_comments_2 {
    position:absolute;
    display: block;
    position:absolute;
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 4s;
    animation-fill-mode: forwards;
  }

   .number_comments_3 {
    position:absolute;
    display: block;
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 8s;
    animation-fill-mode: forwards;
    opacity: 1;
  }

   .number_comments_4 {
    position:absolute;
    display: block;
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 12s;
    animation-fill-mode: forwards;
    opacity: 1;
  }

   .number_comments_5 {
    position:absolute;
    display: block;
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 16s;
    opacity: 1;
  }

   .number_comments_6 {
    position:absolute;
    display: block;
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 20s;
    opacity: 1;
  }

   .number_comments_7 {
    position:absolute;
    display: block;
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 24s;
    opacity: 1;
  }

   .number_comments_8 {
    position:absolute;
    display: block;
    animation: effect_comments 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 28s;
    opacity: 1;
  }

  .number_comments_9 {
    position:absolute;
    display: block;
    animation: effect_comments_final 4s linear;
    transform: translateX(-300px) translateY(0px);
    animation-delay: 32s;
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