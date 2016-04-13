<template>
	<div class="container header">
	    <div class="gradient"></div>
	      <div class="menu">
	        <div class="col-4 logo">
	          <a v-link="'/home'">
	            <img src="../assets/img/logo.png" alt="Monlythics">
	            <span>MONOLYTICS</span>
	          </a>
	        </div>
	        <div class="col-4 whatis">
	          <a v-link="'/whatis'">
	            <span class="menu_link"><span>what is</span> trurank ?</span>
	          </a>
	        </div>
	        <div class="col-4 about">
	          <a v-link="'/about'">
	            <span class="menu_link">about us</span>
	          </a>
	        </div>
	      </div>
	  </div>
  </div>
</template>

<style lang="sass" scoped>

  @import "./theme";
  
  body {
  color: $main_text_color;
}

a {
  color: $main_text_color;
  text-decoration: none;
}

a:hover {
  color: $main_text_color;
  text-decoration: none;
}

.col-4 {
  width: 33%;
  display: inline-block;
}

.container {
  width: 100vw;
}

.menu {
  position: relative;
  margin-top: 30px;
  z-index: 1;
}

.gradient {
    height: 100vh;
    width: 100vw;
    background: #8b4fff;
    background: -webkit-linear-gradient(bottom left, #8b4fff 0%, #ee46ab 41%, #ffcb72 100%);
    background: -o-linear-gradient(bottom left, #8b4fff 0%, #ee46ab 41%, #ffcb72 100%);
    background: linear-gradient(to top right, #8b4fff 0%, #ee46ab 41%, #ffcb72 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    position: absolute;
    top: 0;
    left: 0;
}

.header {
  padding: 0px 50px;}

.logo {
  font-family: 'AdelleBold', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.logo img {
  width: 6%;
  padding: 0px;
  margin-left:10px;
  margin-top: -8px;
}

.logo span{
  margin-top: 30px;
  font-size: 17px;
  color: $main_text_color;
  text-transform: uppercase;
  }

.logo a {
  color: $main_text_color;
}

.logo a:hover {
  color: $main_text_color;
  text-decoration: none;
}

.whatis {
  text-align: center;
  font-family: 'AdelleBold', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.whatis a span span {
  font-family: 'AdelleRegular', sans-serif;
}

.about {
  text-align: right;
  font-family: 'AdelleBold', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.menu_link {
  display: inline-block;
  width: auto;
  position: relative;
}

.menu_link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0px;
  left: -2px;
  background-color: #F1F1F1;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.menu_link:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

</style>