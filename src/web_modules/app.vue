<template>
  <router-view></router-view>
</template>

<script>

  import { api } from 'config';
  import fetch from 'helpers/fetch';

  export default {
    ready() {
      fetch(api + 'tops')
        .then(response => JSON.parse(response))
        .then(response => this.$broadcast('getData', response));
    }
  }

</script>

<style lang="sass">

  @import "./reset";

  @font-face {
  	font-family: 'AdelleBold';
  	src: url('../assets/fonts/adelle/adelle_bold.otf');
  	font-weight: normal;
  	font-style: normal;
  }

	@font-face {
  	font-family: 'AdelleRegular';
  	src: url('../assets/fonts/adelle/adelle_regular.ttf');
  	font-weight: normal;
  	font-style: normal;
	}

	@font-face {
  	font-family: 'AdelleLight';
  	src: url('../assets/fonts/adelle/adelle_light.ttf');
  	font-weight: normal;
  	font-style: normal;
	}

	@font-face {
  	font-family: 'Nick';
  	src: url('../assets/fonts/nickainley/Nickainley.ttf');
  	font-weight: normal;
  	font-style: normal;
	}

	body {
		overflow: visible;
    min-height: 100vh;
    background: #8b4fff;
    background: linear-gradient(to top right, #8b4fff 0%, #ee46ab 41%, #ffcb72 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	}

</style>
