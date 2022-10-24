<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SiteFooter'
});
</script>

<template>
	<footer>
		<p>
			Designed by Gigabyte5671 &copy;2022 |
			<img
				src="@/assets/icons/discord_white.svg"
				draggable="false"
				alt=""
			/>
			Gigabyte#3310 | Thanks for your support
			<img src="@/assets/icons/heart-24px.svg" draggable="false" alt="" />
		</p>
	</footer>
</template>

<style lang="scss">
footer {
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: var(--footer_height);
	background: var(--original_wilderorg_grey_dark)
		url('@/assets/images/wilderorg_noisebg.png');

	p {
		color: white;
		font-size: 0.8rem;
		border-top: 1px solid #ffffff00;
		opacity: 0.7;
	}

	img {
		width: 16px;
		margin: 0px 0.4ch -3px 0.3ch;
	}
}
</style>
