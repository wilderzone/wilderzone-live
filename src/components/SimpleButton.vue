<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SimpleButton',
	props: {
		color: {
			type: String,
			required: false
		}
	}
});
</script>

<template>
	<a class="simpleButton" :style="{ backgroundColor: $props.color }" href="">
		<slot></slot>
	</a>
</template>

<style lang="scss">
.simpleButton {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	gap: 1ch;
	width: 20ch;
	padding: 10px 15px;
	color: #fff;
	text-align: center;
	text-decoration: none;
	background-color: var(--primary_color_light);
	border-radius: 7px;
	box-shadow: 0px 2px 0px #888;

	&::before,
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		display: block;
		background: radial-gradient(
			circle at center,
			#fff 80%,
			transparent calc(80% + 1px)
		);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 0%;
		opacity: 0;
		transition: 0.2s ease all;
		user-select: none;
		pointer-events: none;
	}

	&::before {
		transition-delay: 0.08s;
	}

	&:hover::before {
		background-size: 105%;
		opacity: 0.1;
		transition-delay: 0.03s;
	}

	&:hover::after {
		background-size: 90%;
		opacity: 0.2;
	}
}
</style>
