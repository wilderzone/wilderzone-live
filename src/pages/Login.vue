<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';

export default defineComponent({
	name: 'Login',
	components: {
		SiteHeader
	},
	data() {
		return {
			username: '',
			password: ''
		};
	}
});
</script>

<template>
	<SiteHeader :fixedHeading="true" />
	<main>
		<form action="post">
			<label for="username">Username:</label>
			<input type="text" name="username" v-model="username" />
			<label for="password">Password:</label>
			<input type="password" name="password" v-model="password" />
			<button type="submit">Login</button>
		</form>
	</main>
</template>

<style lang="scss">
@import '@/css/root.css';
</style>
