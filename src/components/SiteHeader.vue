<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SiteHeader',
	data() {
		return {
			showTitle: false
		};
	},
	mounted() {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 80) {
				this.showTitle = true;
			} else {
				this.showTitle = false;
			}
		});
	}
});
</script>

<template>
	<header>
		<div class="inner">
			<div class="logo">
				<img
					src="@/assets/branding/Logo-Light.svg"
					draggable="false"
					alt="logo"
				/>
				<p :class="{ show: showTitle }">Wilderzone Live</p>
			</div>
			<nav>
				<a href="/">Home</a>
				<a href="/servers">Who's online?</a>
				<a href="/login">Login</a>
			</nav>
		</div>
	</header>
</template>

<style lang="scss">
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

	> .inner {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;
		gap: 1ch;
		padding-left: 0.5ch;
		font-size: 1.7rem;

		img {
			width: var(--header_height);
			height: var(--header_height);
		}

		p {
			transform: translateY(100%);
			transition: 0.2s ease transform;

			&.show {
				transform: translateY(0%);
			}
		}
	}

	nav {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		align-items: center;
		gap: 3ch;
		padding: 0px 3ch;

		a {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			gap: 1ch;
			color: #000;
			font-weight: bold;
			text-decoration: none;
			opacity: 0.8;
			transition: 0.2s ease color, 0.2s ease opacity;

			&:hover {
				color: var(--primary_color_light);
				opacity: 1;
			}

			&::after {
				content: '';
				position: absolute;
				bottom: 0px;
				display: block;
				width: 0%;
				height: 2px;
				background-color: currentColor;
				transition: 0.2s ease width;
			}

			&:hover::after {
				width: 100%;
			}
		}
	}
}
</style>
