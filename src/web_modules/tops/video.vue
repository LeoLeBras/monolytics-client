<template>
  <div class="container" transition="video">
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

  export default {

    data() {
      return {
        src: ''
      };
    },

    events: {
      setMovie(movie) {
        this.src = 'https://youtube.com/embed/' + movie['youtube_id'] + '?loop=1&autoplay=1&controls=0&mute=1&showinfo=0&autohide=1&playlist=tw-q-hG0owc'
      }
    }

  }

</script>

<style scoped>

  .video {
    position: absolute;
    width: 100vw;
    height: 100vh;
    transform: scale(1.5);
    pointer-events: none;
  }

  .overlay {
    background: #8b4fff;
    background: linear-gradient(to top right, #8b4fff 0%, #ee46ab 41%, #ffcb72 100%);
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
