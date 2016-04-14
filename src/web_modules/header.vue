<template>
	<header class="container">
		<a v-link="'/home'" class="logo">
			<img src="../assets/img/logo.png" alt="Monlythics">
		</a>
		<nav class="nav">
			<ul>
				<li class="nav_item center">
					<a v-link="'/whatis'" class="nav_link menu_link">
						<span class="light">what is</span> trurank ?
					</a>
				</li>
				<li class="nav_item">
					<a href="https://github.com/LeoLeBras/monolytics-client" target="_blank" class="nav_link menu_link">
						<i class="fa fa-2x fa-github" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="sass" scoped>

  @import "./theme";

	.container {
		position: absolute;
		top: 0;
		padding: 20px 30px;
		width: 100%;
		z-index: 10;
	}

	.center {
		text-align: center;
	}

	.nav {
		position: relative;
		top: 5px;
		text-align: right;

		&_item {
			display: inline-block;
			width: 33%;
		}

		&_link {
		  display: inline-block;
		  width: auto;
		  position: relative;
			color: $main_text_color;
			text-decoration: none;
			text-align: right;
			font-family: 'Adelle', sans-serif;
			font-weight: 700;
			font-size: 14px;
			text-transform: uppercase;
			letter-spacing: 3px;

			&:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				bottom: -3px;
				left: -2px;
				background-color: #F1F1F1;
				visibility: hidden;
				transform: scaleX(0);
				transition: all 0.3s ease-in-out 0s;
			}

			&:hover:before {
			  visibility: visible;
			  transform: scaleX(1);
			}
		}
	}

	.logo {
		position: absolute;

		img {
			width: 150px;
		}
	}

	.light {
		font-family: 'Adelle', sans-serif;
		font-weight: 400;
	}

</style>
