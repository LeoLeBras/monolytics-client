<template>
  <app-header></app-header>
  <div class="container about">
    <div class="content_about"> 
      <h1>What is trurank ?</h1>
      <h2>Noise <span>+</span> Reality</h2>
    </div>

    <div class="content_explanation">
      <div class="explanation_left">
        <p>
          Noise is the combination of every social signal linked to a movie <br />
          Comments, views and mentions were all retreived from few apis <br />
          <img src="../../assets/img/icon_left.png" alt="nos apis">
        </p>
      </div>

      <div class="explanation_separator"></div>

       <div class="explanation_right">
        <p>
          Reality combines every ways of viewing the movie after it’s release<br />
          We used the numbers of streams, seeders and tickets sales from few apis <br />
          <img src="../../assets/img/icon_right.png" alt="nos apis">
        </p>
      </div>
    </div>
  </div>

  <div class="warning_whatis">
    <p>
      Altogether they create a perfect alternative to the boring BoxOffice numbers, much more representative of the influence of a film piece
    </p>

    <img src="../../assets/img/stop.png" alt="Warning">
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

<style lang="sass" scoped>

  @import "../theme";

</style>
