<template>
  <div class="container">
    <div class="video">
      <div
        class="iframe"
        style="width:100%;height:100%"
        v-youtube="youtube_id"
        :player-vars="{autoplay:1,controls:0,mute:1,showinfo:0,autohide:1,loop:1,enablejsapi:1}">
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import VueYouTubeEmbed, { events } from 'vue-youtube-embed';
  Vue.use(VueYouTubeEmbed);

  export default {

    data() {
      return {
        youtube_id: 'LoebZZ8K5N0'
      };
    },

    // Set movie
    events: {
      [events.READY]: function(player) {
        if(player) {
          player.mute();
        }
      },
      setMovie(movie) {
        this.youtube_id = movie['youtube_id'];
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

  .iframe {
    width: 100%;
    height: 100%;
  }
  .overlay {
    background: #8b4fff;
    background: linear-gradient(to top right, #8b4fff 0%, #ee46ab 41%, #ffcb72 100%);
    opacity: 0.75;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
