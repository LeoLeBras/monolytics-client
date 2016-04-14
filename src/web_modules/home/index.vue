<template>
  <app-header></app-header>
  <div class="home_part">
    <div class="video_container">
    <div class="video_mask">
      <div id="video_effect"></div>
        <div id="video_trailers">
          <video class="video" autoplay loop>
              <source src="../src/assets/medias/trailers/movies.webm" type="video/webm">
            Your browser does not support HTML5 video.
          </video>
        </div>
    </div>
  </div>
  <div class="col-md-12 text_home">
     <div class="catch_text">
       We rank up the latest popular movies
       <br />
       with our <span class="brand_rank">trurank</span> notation system
     </div>
     <div class="scroll_down">
       <div class="text_s_d">
         scroll down
         <br />
         to discover the tops
       </div>
       <div class="icone_s_d">
        <div class="mouse"></div>
        <div class="mouse_button"></div>
        <div class="mouse_roll"></div>
       </div>
     </div>
   </div>
   <!-- <div class="col-md-12 twitter_slide">
     <div class="timeline_twitter">
        <ul class="text-slider">
         <li class="text-slide"><a href="">#NW deadpool, see what all that fuzz is about...</a></li>
         <li class="text-slide"><a href="">#NW Zootopia with the kids !</a></li>
         <li class="text-slide"><a href="">#NW BatmanvsSuperman, what a load of crap.</a></li>
         <li class="text-slide"><a href="">#NW Thebookofthejungle, all my childhood :'-)</a></li>
         <li class="text-slide"><a href="">#NW Rio with GF</a></li>
      </ul>
     </div>
   </div> -->
  </div>
</template>

<script>

  import Vue from 'vue';
  import dynamics from 'dynamics.js';

  Vue.component('app-header', require('./../header'));

  Vue.transition('slide', {
     beforeLeave: () => { // beforeLeave: function() {
       console.log('before leave');
     },
     leave: (el, done) => {
       dynamics.animate(el, {
         left: 0,
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
