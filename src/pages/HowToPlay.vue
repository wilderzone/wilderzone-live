<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SimpleButton from '@/components/SimpleButton.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default defineComponent({
	name: 'HowToPlay',
	components: {
		SiteHeader,
		SimpleButton,
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
		<h1>How to Play</h1>
		<h2>Getting Started</h2>
		<p></p>
		<ol>
			<li></li>
		</ol>
		<br />

		<h2>Community Servers</h2>
		<h3>Connecting</h3>
		<ol>
			<li>Download the latest Tribes Launcher from here.</li>
			<li></li>
		</ol>
		<br />
		<h3>Verification</h3>
		<p>
			Being verified on Community servers removes the "unvrf-" prefix from
			your name and allows you to:
		</p>
		<ul>
			<li>Keep your loadouts and settings between sessions.</li>
			<li>Keep your rank.</li>
			<li>View your stats.</li>
			<li>Vote on maps.</li>
			<li>Participate in votekicks.</li>
		</ul>
		<br />

		<h2>Rules</h2>
		<h3>Mixers</h3>
		<h3>PUGs</h3>
		<SimpleButton
			dense
			href="https://www.dodgesdomain.com/docs/gameplay/guide-quick/"
			>Guide</SimpleButton
		>
	</main>

	<SiteFooter />
</template>

<style lang="scss">
@import '@/css/root.css';

main {
	display: block;
	padding-right: 50px;
	padding-left: 50px;
	text-align: initial;
}
</style>
