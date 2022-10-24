<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SimpleButton',
	props: {
		color: {
			type: String,
			required: false
		},
		href: {
			type: String,
			required: false
		}
	}
});
</script>

<template>
	<a
		v-if="$props.href"
		class="simpleButton"
		:style="{ backgroundColor: $props.color }"
		:href="$props.href"
	>
		<slot></slot>
	</a>
	<button
		v-else
		class="simpleButton"
		:style="{ backgroundColor: $props.color }"
	>
		<slot></slot>
	</button>
</template>

<style lang="scss">
.simpleButton {
	all: unset;
	position: relative;
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
	cursor: pointer;

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
