<template>
  <app-header></app-header>
  <div class="wrapper">
    <title></title>
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
    <img src="../../assets/img/stop.png" alt="Warning" class="warning">
  </div>
</template>

<script>
  import Vue from 'vue';
  Vue.component('app-header', require('./../header'));
  Vue.component('title', require('./title'));
</script>

<style lang="sass" scoped>
  @import "../theme";
  @import "./style";
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 80%;
  }
</style>
