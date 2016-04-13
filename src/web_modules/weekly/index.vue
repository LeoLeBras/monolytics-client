<template>
  <app-header></app-header>
    <div class="content_weekly_top">
      <div class="video_weekly_top">
        <video class="video" autoplay loop>
          <source src="../src/assets/medias/trailers/movies.webm" type="video/webm">
          Your browser does not support HTML5 video.  
        </video>
        <div class="overlay_video_top"></div>
      </div>

      <div class="stats_weekly_top">
        <div class="title_weekly_top">
          <span>
            Weekly <br />
            Top
          </span>
        </div>

        <div class="number_weekly_top">
          01
        </div>

        <div class="evo_weekly_top">
          <span class="evo_up_form"></span><span class="evo_up_text"> +1</span>
        </div>

        <div class="comments_weekly_top">
          <span class="number_comments">7540</span>
          <br />
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
          Star wars VII : The force awakens
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

</template>

<script>

  import Vue from 'vue';
  import dynamics from 'dynamics.js';

  Vue.component('app-header', require('./../header'));

  Vue.transition('color', {
    beforeLeave: () => { // beforeLeave: function() {
      console.log('before leave');
    },
    leave: (el, done) => {
      dynamics.animate(el, {
        scale: 0,
        opacity: 0
      }, {
        type: dynamics.spring,
        frequency: 200,
        friction: 200,
        duration: 1500,
        complete: () => done()
      });
    },
    afterLeave: () => {
      console.log('after leave');
    }
  });

  export default {
    // ...
  }

</script>

<style lang="sass" scoped>

  @import "../theme";
  @import "./style";
  


</style>

</template>
