<template>
  <div class="container">
    <h1 class="title">About</h1>
    <a class="back" v-link="'/home'">Back</a>
  </div>
</template>

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

  .back {
    margin-top: .75rem;
  }

</style>
