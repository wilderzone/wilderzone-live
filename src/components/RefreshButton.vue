<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'RefreshButton',
	props: {
		loading: {
			type: Boolean,
			required: false
		}
	}
});
</script>

<template>
	<button
		class="refreshButton"
		:class="{ loading: $props.loading }"
		name="refresh"
		title="Refresh"
	>
		<span></span>
		<p>Refresh</p>
	</button>
</template>

<style lang="scss">
.refreshButton {
	all: unset;
	position: absolute;
	top: calc(var(--header_height) + 15px);
	right: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 15px;
	filter: invert(1);
	opacity: 0.8;
	transition: 0.1s ease opacity;
	cursor: pointer;

	span {
		display: block;
		width: 2rem;
		height: 2rem;
		background-image: url('@/assets/icons/refresh_white_24dp.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		transform-origin: 50% 50%;
		transition: 0.2s ease all;
		user-select: none;
	}

	&.loading span {
		background-image: url('@/assets/icons/more_vert-24px.svg');
		transform: rotate(90deg);
		animation: 1s ease pulse infinite;

		@keyframes pulse {
			0% {
				opacity: 1;
			}
			50% {
				opacity: 0.3;
			}
			100% {
				opacity: 1;
			}
		}
	}

	p {
		left: 0px;
		bottom: 0px;
		margin: -2px 0px 0px 0px;
		color: white;
		font-family: 'Space Mono', monospace;
		font-size: 0.7rem;
		transition: 0.2s ease all;
		user-select: none;

		display: none;
	}
}
</style>
