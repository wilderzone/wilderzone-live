<script lang="ts">
import { defineComponent } from 'vue';

import image_1 from '@/assets/images/maps/styx-1.webp';
import image_2 from '@/assets/images/maps/sunstar-1.webp';
import image_3 from '@/assets/images/maps/bella_omega-1.webp';

export default defineComponent({
	name: 'LandingCarousel',
	data() {
		return {
			d_images: [image_1, image_2, image_3],
			d_current_image: 0,
			d_image_1: {
				n: 0,
				opacity: 1
			},
			d_image_2: {
				n: 1,
				opacity: 1
			},
			d_image_flipflop: true
		};
	},
	methods: {
		m_change_image() {
			this.d_current_image++;
			if (this.d_current_image >= this.d_images.length) {
				this.d_current_image = 0;
			}

			let span_order = [this.d_image_1, this.d_image_2];
			if (!this.d_image_flipflop) {
				span_order = [this.d_image_2, this.d_image_1];
			}

			// Change the bottom image.
			span_order[1].n =
				this.d_current_image + 1 >= this.d_images.length
					? 0
					: this.d_current_image + 1;
			// Fade out the top image.
			span_order[0].opacity = 0;

			window.setTimeout(() => {
				// Swap the positions.
				this.d_image_flipflop = !this.d_image_flipflop;
				// Change the previously top image.
				span_order[0].n = this.d_current_image;
				// Fade in the previously top image.
				span_order[0].opacity = 1;
			}, 1000);
		}
	},
	mounted() {
		window.setInterval(() => {
			this.m_change_image();
		}, 6000);
	}
});
</script>

<template>
	<div class="landing_carousel">
		<div class="inner">
			<span
				class="image"
				:style="{
					zIndex: d_image_flipflop ? 2 : 1,
					backgroundImage: `url(${d_images[d_image_1.n]})`,
					opacity: d_image_1.opacity
				}"
			></span>
			<span
				class="image"
				:style="{
					zIndex: d_image_flipflop ? 1 : 2,
					backgroundImage: `url(${d_images[d_image_2.n]})`,
					opacity: d_image_2.opacity
				}"
			></span>
		</div>
	</div>
</template>

<style>
.landing_carousel {
	position: fixed;
	z-index: 0;
	inset: 0;
	filter: saturate(2.5) grayscale(0.7) contrast(1.2);
	opacity: 0.6;
}
.landing_carousel > .inner {
	width: 100%;
	height: 100%;
}
.landing_carousel .image {
	position: absolute;
	inset: 0;
	display: block;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	opacity: 1;
	transition: 1s ease opacity;
}
.landing_carousel .image:nth-child(1) {
	z-index: 2;
}
.landing_carousel .image:nth-child(2) {
	z-index: 1;
}
</style>
