<template>
  <div class="hr"></div>
  <div class="item -noise">
    <span>noise</span>
    <div v-el:noise class="value -noise"></div>
  </div>
  <div class="item -reality">
    <span>reality</span>
    <div v-el:reality class="value -reality"></div>
  </div>
</template>

<script>

  import dynamics from 'dynamics.js';

  export default {
    events: {
      setMovie(movie) {
        const config = {
          type: dynamics.spring,
          frequency: 100,
          friction: 100,
          duration: 300
        };
        const noise = movie['trurank_noise'] * 5;
        const reality = movie['trurank_reality'] * 5;
        dynamics.animate(this.$els.noise, {
          width: noise < 2 ? 2 : noise
        }, config)
        dynamics.animate(this.$els.reality, {
          width: reality < 2 ? 2 : reality
        }, config)
        this.pirate_bay_seeders = movie.pirate_bay_seeders;
        this.trakt_plays = movie.trakt_plays;
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "../theme";

  .hr {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    width: 2px;
    height: 300px;
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 66%,rgba(255,255,255,1) 67%,rgba(255,255,255,0) 100%);
  }

  .item {
    position: absolute;
    top: 320px;
    text-transform: uppercase;
    font-family: 'AdelleBold', sans-serif;
    font-size: 20px;
    color: $main_text_color;

    &.-noise {
      left: 400px;
    }

    &.-reality {
      right: 380px;
    }
  }

  .value {
    position: absolute;
    top: 30px;
    height: 25px;

    &.-noise {
      right: 2px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background: linear-gradient(to bottom, rgba(0,223,255,1) 0%,rgba(0,188,255,1) 100%);
    }

    &.-reality {
      left: 2px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: linear-gradient(to bottom, rgba(255,226,97,1) 0%,rgba(255,193,50,1) 100%);
    }
  }

</style>
