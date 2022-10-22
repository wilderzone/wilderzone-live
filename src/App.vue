<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import PrimarySection from '@/components/PrimarySection.vue';
import SimpleButton from '@/components/SimpleButton.vue';
// import NewsCarousel from '@/components/NewsCarousel.vue';
// import LandingCarousel from '@/components/LandingCarousel.vue';

export default defineComponent({
	name: 'App',
	components: {
		SiteHeader,
		PrimarySection,
		SimpleButton
		// NewsCarousel,
		// LandingCarousel
	}
});
</script>

<template>
	<SiteHeader />
	<!-- <LandingCarousel /> -->
	<div class="splash"></div>
	<main>
		<!-- <div class="paths">
			<div class="top">
				<a v-for="(icon, index) in paths" :key="icon" href="" :title="icon.name" class="icon" :style="{color: icon.color}">
					<div class="inner">
						<img :src="icon.icon" draggable="false" :alt="icon.name" width="24">
					</div>
				</a>
			</div>
			<div class="bottom">
				<div v-for="(path, index) in paths" :key="path" class="path" :style="{
					zIndex: paths.length - index,
					height: `${path_section_height * (index + 1)}px`
				}">
					<span :style="{color: path.color}"></span>
				</div>
			</div>
		</div> -->

		<PrimarySection
			direction="bottom_left"
			size="large"
			heading="Wilderzone Live"
			color="var(--primary_color_light)"
		>
			<h2>Your hub for everything Tribes: Ascend.</h2>
			<br />
			<br />
			<br />
			<SimpleButton style="font-size: larger">Play now!</SimpleButton>
			<!-- <News /> -->
		</PrimarySection>

		<!-- <PrimarySection direction="right" heading="Download Tribes: Ascend" color="#B72C2D">
			<p>Download TA!</p>
		</PrimarySection> -->

		<PrimarySection
			direction="right"
			heading="Discord"
			color="#6a75f3"
			:image="'@/assets/images/389911-UDD1-small.webp'"
		>
			<p>Come hang out in the Tribes community discord server.</p>
			<p>
				Compete in competitive Tournaments and Pickup Games, join the
				banter in Mixers, or just chat with other players. Everyone is
				welcome!
			</p>
		</PrimarySection>

		<PrimarySection direction="left" heading="Stats" color="#FF4B00">
			<p>Check your stats and compare to other players.</p>
		</PrimarySection>

		<PrimarySection direction="left" heading="Videos" color="#ff1a1a">
			<p>
				Recent highlights, montages, routes, tutorials, and other videos
				from the community.
			</p>
		</PrimarySection>

		<PrimarySection
			direction="right"
			heading="Live Streams"
			color="#9c5aff"
		>
			<p>Tribes: Ascend twitch channels:</p>
		</PrimarySection>

		<PrimarySection
			direction="left"
			heading="Mods & New Content"
			color="#3a6ec1"
		>
			<p>Tribes: Ascend twitch channels:</p>
		</PrimarySection>
	</main>
</template>

<style lang="scss">
@import '@/css/root.css';

.splash {
	position: absolute;
	z-index: 0;
	top: -25vw;
	left: -25vw;
	width: 80vw;
	aspect-ratio: 1;
	background-image: url('@/assets/branding/Logo-Light.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	opacity: 0.1;
}

.paths {
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0px;
	width: 100%;
}
.paths .top {
	z-index: 2;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0px;
	width: 100%;
	height: 76px;
	padding-left: 19px;
}
.paths .icon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	aspect-ratio: 1;
	margin-right: -6px;
	background-color: var(--background_color);
	border-radius: 50%;
}
.paths .icon > .inner {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	color: inherit;
	background-color: currentColor;
	border-radius: 50%;
	opacity: 1;
	transition: 0.2s ease opacity;
}
.paths .icon:nth-child(even) {
	align-self: flex-end;
}
.paths .bottom {
	z-index: 1;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 14px;
	width: 100%;
	margin-top: -38px;
	padding-left: 30px;
}
.path {
	position: relative;
	display: block;
	width: 24px;
	height: 400px;
}
.path span {
	--line_width: 22px;
	position: absolute;
	display: block;
	width: 100vw;
	height: 100%;
	border-color: currentColor;
	border-left: var(--line_width) solid;
	border-bottom: var(--line_width) solid;
	border-radius: 0 0 0 64px;
	clip-path: polygon(
		0% 0%,
		var(--line_width) 0%,
		var(--line_width) calc(100% - var(--line_width)),
		var(--line_width) calc(100% - 64px),
		64px calc(100% - var(--line_width)),
		100% calc(100% - var(--line_width)),
		100% 100%,
		0% 100%
	);
	filter: drop-shadow(0 0 5px #0003);
	opacity: 1;
	transition: 0.2s ease opacity;
}
.paths:hover .path span,
.paths .top:hover .icon > .inner {
	opacity: 0.4;
}
.paths .path span:hover,
.paths .top .icon:hover > .inner {
	opacity: 1;
}
</style>
