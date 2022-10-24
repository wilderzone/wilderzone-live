<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default defineComponent({
	name: 'Login',
	components: {
		SiteHeader,
		SiteFooter
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
		<form class="loginForm" action="post">
			<h1>Login</h1>
			<label for="username">Username:</label>
			<input type="text" name="username" v-model="username" />
			<label for="password">Password:</label>
			<input type="password" name="password" v-model="password" />
			<button type="submit">Login</button>
			<br />
			<a href="/register">Register</a>
		</form>
	</main>

	<SiteFooter />
</template>

<style lang="scss">
@import '@/css/root.css';

main {
	display: flex;
	height: 100%;
}

.loginForm {
	display: flex;
	flex-flow: column;
	margin: auto;

	label {
		margin-top: 10px;
	}

	button {
		margin-top: 20px;
	}

	&::after {
		content: '';
		position: absolute;
		inset: -40px -80px -85px -80px;
		display: block;
		border: 15px solid var(--secondary_color);
		border-radius: 25px;
		user-select: none;
		pointer-events: none;
	}
}
</style>
