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
}
</style>
