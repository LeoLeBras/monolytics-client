<template>
  <app-header></app-header>
  <div class="container about">
    <div class="content_about"> 
      <h1>What is trurank ?</h1>
      <h2>Noise <span>+</span> Reality</h2>
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
