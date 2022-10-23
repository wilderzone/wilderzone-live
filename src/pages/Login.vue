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
		<form class="loginForm" action="post">
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
		inset: -70px;
		bottom: -80px;
		display: block;
		border: 15px solid var(--secondary_color);
		border-radius: 25px;
		transform: rotate(-10deg);
		transform-origin: center;
		user-select: none;
		pointer-events: none;
	}
}
</style>
