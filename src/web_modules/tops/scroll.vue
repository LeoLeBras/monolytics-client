<template>
  <div class="container">
    <div class="text">
      scroll for
      an other top
    </div>
    <div class="icon">
      <div class="mouse"></div>
      <div class="mouse_button"></div>
      <div class="mouse_roll"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

  @import "../theme";

  .container {
    position: absolute;
    width: 175px;
    height: 36px;
    bottom: 30px;
    left: 60px;
  }

  .text {
    padding-left: 10px;
    font-family: 'AdelleLight', sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 1.25;
    text-transform: uppercase;
    color: $main_text_color;
  }

  .icon {
    position: absolute;
    left: -30px;
    bottom: 44px;
  }

  .mouse {
    position: absolute;
    top: 0px;
    width: 25px;
    height: 45px;
    border: 1px solid $main_text_color;
    border-radius: 40px;
  }

  .mouse_button {
    position: absolute;
    top: 10px;
    left: 12px;
    width: 1px;
    height: 20px;
    background-color: $main_text_color;
  }

  .mouse_roll {
    position: absolute;
    top: 12px;
    left: 10px;
    width: 5px;
    height: 5px;
    background-color: $main_text_color;
    border-radius: 50%;
    animation: roll 2s linear infinite alternate;
  }

</style>
