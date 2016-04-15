<template>
  <div class="container">
    <div class="video">
      <iframe
        frameborder="0"
        height="100%"
        width="100%"
        v-bind:src="src">
      </iframe>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>

  import Vue from 'vue';

  export default {

    data() {
      return {
        src: ''
      };
    },

    // Set movie
    events: {
      setMovie(movie) {
        this.src = 'https://youtube.com/embed/' + movie['youtube_id'] + '?loop=1&autoplay=1&controls=0&mute=1&showinfo=0&autohide=1';
      }
    }

  }

</script>

<style lang="sass" scoped>

  .video {
    position: absolute;
    width: 100vw;
    height: 100vh;
    transform: scale(1.75);
    pointer-events: none;
  }

  .overlay {
    background: #8b4fff;
    background: linear-gradient(to top right, #8b4fff 0%, #ee46ab 41%, #ffcb72 100%);
    opacity: 0.55;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
