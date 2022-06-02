<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
	name: 'Header',
	data() {
		return {
			d_show_title: false
		}
	},
	mounted() {
		window.addEventListener('scroll', function() {
			if(window.scrollY >= 80){
				this.d_show_title = true;
			}else{
				this.d_show_title = false;
			}
		}.bind(this));
	}
}
</script>

<template>
	<header>
		<div class="inner">
			<div class="logo">
				<img src="@/assets/branding/Logo-Light.svg" draggable="false" alt="logo">
				<p v-show="d_show_title">Wilderzone Live</p>
			</div>
			<nav>
				<RouterLink to="/">Home</RouterLink>
			</nav>
		</div>
	</header>
</template>

<style>
header {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1000;
	display: block;
	height: var(--header_height);
	background-color: var(--header_color);
	box-shadow: 0 0 10px -4px black;
	overflow: hidden;
}
header > .inner {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}
header .logo {
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 1ch;
	padding-left: 0.5ch;
	font-size: 1.7rem;
	/* position: absolute;
	left: -200px;
	filter: contrast(5) grayscale(1) blur(2px);
	opacity: 0.2; */
}
header .logo img {
	width: var(--header_height);
	height: var(--header_height);
}
header .logo p {
	transform: translateY(100%);
	animation: a_logo_title_in 0.2s ease forwards;
}
@keyframes a_logo_title_in {
	0%   {transform: translateY(100%);}
	100% {transform: translateY(0%);}
}
</style>
