<template>
  <div class="container">
    <a v-link=""> 
    <!-- Léo à toi de gérer le lien, on ne sait pas comment faire pour que ça renvoit sur la page où étais l'utilisateur -->
      <img src="../../assets/img/quit.svg" alt="cancel" class="quit">
    </a>
    <div class="title">stats</div>
    <!-- Contents Stats  -->
    <div class="stats_container">
      <div class="stats stats_1">
        <span class="main_span">STREAMS [TRAKT PLAYS]</span>
        <span class="number number_1"><br>149882</span>
      </div>
      <div class="stats stats_2">
        <span class="main_span">PIRATE BAY <br>SEEDERS</span>
        <span class="number number_2"><br>309</span>
      </div>
      <div class="stats stats_3">
        <span class="main_span">YOUTUBE TRAILER VIEWS</span>
        <span class="number number_3"><br>3542570</span>
      </div>
      <div class="stats stats_4">
        <span class="main_span">YOUTUBE COMMENTS</span>
        <span class="number number_4"><br>14K</span>
      </div>
      <div class="stats stats_5">
        <span class="main_span">TOMATOMETER</span>
        <span class="number number_5"><br>87%</span>
      </div>
      <div class="stats stats_6">
        <span class="main_span">IMDb RATINGS</span>
        <span class="number number_6"><br>8.1</span>
      </div>
      <div class="stats stats_7">
        <span class="main_span">REVENUES</span>
        <span class="number number_7"><br>231M</span>
      </div>
      <div class="stats stats_8">
        <span class="main_span">METASCORE</span>
        <span class="number number_8"><br>90</span>
      </div>
    </div>
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
