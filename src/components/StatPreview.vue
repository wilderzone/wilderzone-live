<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'StatPreview'
});
</script>

<template>
	<div class="statPreview">
		<div class="inner"></div>
	</div>
</template>

<style lang="scss">
.statPreview {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60vw;
	min-height: inherit;

	> .inner {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 300px;
		border-radius: 15px;
		box-shadow: 10px 10px 0px #0002;
	}
}
</style>
