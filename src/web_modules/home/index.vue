<template>
  <div class="container" transition="color">
    <h1 class="title">Monolytics :)</h1>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a v-link="'/tops'">Tops</a>
        </li>
        <li class="nav-item">
          <a v-link="'/about'">About</a>
        </li>
      </ul>
    </nav>
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

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Open Sans';
  }

  .title {
    color: $primaryColor;
    font-size: 1.5rem;
  }

  .nav {
    margin-top: 10px;
    flex-direction: row;

    &-item {
      display: inline-block;

      & + & {
        margin-left: 10px;
      }
    }
  }

</style>
