<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import PrimarySection from '@/components/PrimarySection.vue';
import SimpleButton from '@/components/SimpleButton.vue';
import NewsCarousel from '@/components/NewsCarousel.vue';
import StatPreview from '@/components/StatPreview.vue';
import SiteFooter from '@/components/SiteFooter.vue';
// import LandingCarousel from '@/components/LandingCarousel.vue';

export default defineComponent({
	name: 'App',
	components: {
		SiteHeader,
		PrimarySection,
		SimpleButton,
		NewsCarousel,
		StatPreview,
		SiteFooter
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
			size="full"
			heading="Wilderzone Live"
			color="var(--primary_color_light)"
		>
			<div class="landing">
				<h2>
					Your hub for everything
					<span>Tribes: Ascend</span>.
				</h2>
				<SimpleButton>Play now!</SimpleButton>
				<SimpleButton href="https://llamagrab.net/"
					>Host a server</SimpleButton
				>
			</div>
			<template v-slot:right>
				<div class="latestNews">
					<h3>Latest news:</h3>
					<NewsCarousel />
				</div>
			</template>
		</PrimarySection>

		<!-- <PrimarySection direction="right" heading="Download Tribes: Ascend" color="#B72C2D">
			<p>Download TA!</p>
		</PrimarySection> -->

		<PrimarySection direction="right" heading="Discord" color="#6a75f3">
			<p>Come hang out in the Tribes community Discord server.</p>
			<p>
				Compete in competitive Tournaments and Pickup Games, join the
				banter in Mixers, or just chat with other players. Everyone is
				welcome!
			</p>
			<br />
			<SimpleButton href="https://discord.gg/dd8JgzJ" color="#6a75f3"
				>Join</SimpleButton
			>
			<template v-slot:right>
				<div class="diskjumpImage">
					<img src="@/assets/images/diskjump.svg" alt="" />
				</div>
			</template>
		</PrimarySection>

		<PrimarySection direction="left" heading="Stats" color="#FF4B00">
			<p>Check your stats and compare to other players.</p>
			<template v-slot:right>
				<StatPreview />
			</template>
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

	<SiteFooter />
</template>

<style lang="scss">
@import '@/css/root.css';

.splash {
	position: absolute;
	z-index: 0;
	top: -25vmax;
	left: -25vmax;
	width: 80vmax;
	aspect-ratio: 1;
	background-image: url('@/assets/branding/Logo-Light.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	opacity: 0.1;
}

.landing {
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 50px;
	width: 100%;

	h2 {
		font-size: 1.7rem;
		font-weight: 400;

		span {
			color: var(--secondary_color);
			font-weight: 600;
		}
	}
}

.latestNews {
	display: flex;
	flex-flow: column nowrap;
	width: clamp(300px, 100%, 50%);
	margin: calc(75px + 5.5rem) 0px 0px;

	> h3 {
		padding-left: 10px;
		font-size: 1rem;
		font-style: italic;
		font-weight: 300;
	}
}

.diskjumpImage {
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	width: clamp(0px, 100%, 600px);
	height: 100%;
	margin-top: auto;
	border-radius: 0px 0px 75px 0px;
	overflow: hidden;

	img {
		display: block;
		width: 100%;
	}
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
