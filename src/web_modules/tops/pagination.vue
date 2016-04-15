<template>
  <div>
    <a v-link="{ path: '/tops/' + $route.params.category + '/' + prevRank }" class="item i-prev" v-show="prevRank > 0">
      <span class="link i-prev">
        0{{ prevRank }}
      </span>
    </a>
    <a v-link="{ path: '/tops/' + $route.params.category + '/' + nextRank }" class="item i-next" v-show="nextRank < 10">
      <span class="link i-next">
        0{{ nextRank }}
      </span>
    </a>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        nextRank: parseInt(this.$route.params.rank) + 1,
        prevRank: (parseInt(this.$route.params.rank) - 1),
      };
    },

    watch: {
      '$route.params': {
        handler: function () {
          const prevRank = parseInt(this.$route.params.rank) - 1;
          const nextRank = parseInt(this.$route.params.rank) + 1;
          this.prevRank = prevRank;
          this.nextRank = nextRank;
        }
      }
    }

  }

</script>

<style lang="sass" scoped>

  @import "../theme";

  .item {
    position: absolute;
    top: 50%;
    width: 65px;
    height: 65px;
    transform: translateY(-50%);
    transition: all 300ms linear;
    border: 3px solid rgba($main_text_color, .5);
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    &.i-prev {
      left: 30px;
    }

    &.i-next {
      right: 30px;
    }

    &:hover {
      border-color: rgba($main_text_color, 1);
    }

    &:after {
      display: inline-block;
      position: absolute;
      top: 17px;
      text-transform: uppercase;
      font-family: 'AdelleBold', sans-serif;
      font-size: 35px;
      color: $main_text_color;
      transition: all .2s linear;
    }

    &.i-prev:after {
      content: '<';
      transform: translateX(23px);
    }

    &.i-next:after {
      content: '>';
      transform: translateX(23px);
    }

    &.i-prev:hover:after {
      transform: translateX(-3px);
    }

    &.i-next:hover:after {
      transform: translateX(50px);
    }
  }

  .link {
    position: absolute;
    top: 28%;
    transform: translateY(-50%);
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'AdelleBold', sans-serif;
    font-size: 35px;
    color: $main_text_color;
    transition: all .2s linear;
    opacity: 0;

    &.i-prev {
      transform: translateX(45px);
    }

    &.i-next {
      transform: translateX(-25px);
    }
  }

  .item:hover {
    .link {
      opacity: 1;
      &.i-prev {
        transform: translateX(28px);
      }
      &.i-next {
        transform: translateX(-10px);
      }
    }

  }

</style>
