<template>
  <app-header></app-header>
  <div class="container top">
      <h1 class="title">Tops seeds</h1>
  </div>
  
  <!--- Listes seeds -->
    <!-- Parameters -->
  <div class="parameters">
    <span>Seeds</span>
    <span>Leechers</span>
  </div>

    <!-- main liste -->
  <ul class="main_liste">
    <div class="separator_1"></div>
    <div class="separator_2"></div>
    <li class="number number_1">
      <span>1.</span>
      <span class="movie">Deadpool</span>
      <span class="seeds">1344</span>
      <span class="leech">1344</span>
    </li>
    <li class="number number_2">
      <span>2.</span>
      <span class="movie">Deadpool</span>
      <span class="seeds">1156</span>
      <span class="leech">1344</span>
    </li>
    <li class="number number_3">
      <span>3.</span>
      <span class="movie">Deadpool</span>
      <span class="seeds">1067</span>
      <span class="leech">1344</span>
    </li>
    <li class="number number_4">
      <span>4.</span>
      <span class="movie">Deadpool</span>
      <span class="seeds">987</span>
      <span class="leech">1344</span>
    </li>
    <li class="number number_5">
      <span>5.</span> 
      <span class="movie">Deadpool</span>
      <span class="seeds">916</span>
      <span class="leech">1344</span>
    </li>
    <li class="number number_6">
      <span>6.</span> 
      <span class="movie">Deadpool</span>
      <span class="seeds">856</span>
      <span class="leech">1344</span>
    </li>
    <li class="number number_7">
      <span>7.</span> 
      <span class="movie">Deadpool</span>
      <span class="seeds">824</span>
      <span class="leech">1344</span>
    </li>
    <li class="number number_8">
      <span>8.</span> 
      <span class="movie">Deadpool</span>
      <span class="seeds">1344</span>
      <span class="leech">1344</span>

    </li>
    <li class="number number_9">
      <span>9.</span> 
      <span class="movie">Deadpool</span>
      <span class="seeds">1344</span>
      <span class="leech">1344</span>
      <span class="rate">
    </li>
    <li class="number number_10">
      <span>10.</span> 
      <span class="movie">Deadpool</span>
      <span class="seeds">1344</span>
      <span class="leech">1344</span>
    </li>
  </ul>
</template>

<script>

  import Vue from 'vue';
  import dynamics from 'dynamics.js';

  Vue.component('app-header', require('./../header'));


  


  export default {
    // ...
  }

</script>

<style lang="sass" scoped>

  @import "../theme";
  @import "./style";

</style>
