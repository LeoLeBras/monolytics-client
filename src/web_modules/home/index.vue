<template>
  <app-header></app-header>
  <div class="home_part">
    <div class="video_container">
    <div class="video_mask">
      <div id="video_effect"></div>
        <div id="video_trailers">
          <video class="video" autoplay loop>
            <source src="http://www.monolytics.io/movies.webm" type="video/webm">
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
     <div class="scroll_down" v-on:click="goToTops">
       <div class="text_s_d">
         Scroll down<br>
         to discover the tops
       </div>
       <div class="icone_s_d">
        <div class="mouse"></div>
        <div class="mouse_button"></div>
        <div class="mouse_roll"></div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import dynamics from 'dynamics.js';
  Vue.component('app-header', require('./../header'));

  export default {
    ready() {
      let timer;
      window.addEventListener('mousewheel', (e) => {
        if(e.deltaY > 2 || e.deltaX < 2) {
          this.goToTops();
        }
      });
    },
    methods: {
      goToTops() {
         this.$route.router.go('/tops/trending/1');
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "../theme";
  @import "./style";

</style>
