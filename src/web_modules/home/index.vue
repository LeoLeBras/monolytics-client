<template>

  <div class="container header">
    <div class="gradient"></div>
      <div class="menu">
        <div class="col-4 logo">
          <a href="<?= URL ?>home">
            <img src="../../assets/img/logo.png" alt="Monlythics">
            <span>MONOLYTICS</span>
          </a>
        </div>
        <div class="col-4 whatis">
          <a href="<?= URL ?>home">
            <span class="menu_link"><span>what is</span> trurank ?</span>
          </a>
        </div>
        <div class="col-4 about">
          <a href="<?= URL ?>home">
            <span class="menu_link">about us</span>
          </a>
        </div>
      </div>
  </div>


  <div class="video_container"> 
  <div class="video_mask">
    <div id="video_effect"></div>
      <div id="video_trailers">
        <video class="video" autoplay>
            <source src="../src/assets/medias/trailers/one.webm" type="video/webm">
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

    <div class="icone_s_d bounce">
      <img src="../../assets/img/mouse.png" alt="scroll down to discover the tops">
    </div>
  </div>


  <div class="col-md-12 twitter">
    <h2>latest mentions</h2>
    <div class="timeline_twitter">

    </div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import dynamics from 'dynamics.js';

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
