<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PrimarySection',
	props: {
		direction: {
			type: String,
			required: true
		},
		size: {
			type: String,
			required: false,
			default: 'medium'
		},
		heading: {
			type: String,
			required: false
		},
		color: {
			type: String,
			required: false
		},
		image: {
			type: String,
			required: false
		}
	}
});
</script>

<template>
	<section
		:class="`primary_section ${$props.direction}`"
		:style="{
			borderColor: $props.color
				? $props.color
				: 'var(--primary_color_light)',
			boxShadow: `0 calc(var(--border_width) / 2) 0 0 ${$props.color}20`,
			minHeight: `var(--${$props.size})`
		}"
	>
		<div class="inner">
			<h1
				:style="{
					textShadow:
						$props.color && $props.color[0] === '#'
							? `-0.1ch 0 0 ${$props.color}40, -0.2ch 0 0 ${$props.color}30, -0.4ch 0 0 ${$props.color}10`
							: 'unset'
				}"
			>
				{{ $props.heading }}
			</h1>
			<slot></slot>
		</div>
		<slot name="right"></slot>
	</section>
</template>

<style>
.primary_section {
	--small: 12.5rem;
	--medium: 30rem;
	--large: 50rem;
	--full: 100vh;
	--border_radius: 100px;
	--border_width: 24px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	width: 93%;
	min-height: var(--medium);
	/* background-color: var(--background_color);
	box-shadow: 0 0 20px -10px black,
				0 0 300px -90px black; */
}
.primary_section > .inner {
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 30px 40px 40px 40px;
}

.primary_section.left {
	margin-left: auto;
	border-top: var(--border_width) solid;
	border-bottom: var(--border_width) solid;
	border-left: var(--border_width) solid;
	border-radius: var(--border_radius) 0 0 var(--border_radius);
}
.primary_section.right {
	margin-right: auto;
	border-top: var(--border_width) solid;
	border-bottom: var(--border_width) solid;
	border-right: var(--border_width) solid;
	border-radius: 0 var(--border_radius) var(--border_radius) 0;
}
.primary_section.top_left {
	margin-left: auto;
	border-top: var(--border_width) solid;
	border-left: var(--border_width) solid;
	border-radius: var(--border_radius) 0 0 0;
}
.primary_section.top_right {
	margin-right: auto;
	border-top: var(--border_width) solid;
	border-right: var(--border_width) solid;
	border-radius: 0 var(--border_radius) 0 0;
}
.primary_section.bottom_right {
	margin-right: auto;
	border-right: var(--border_width) solid;
	border-bottom: var(--border_width) solid;
	border-radius: 0 0 var(--border_radius) 0;
}
.primary_section.bottom_left {
	margin-left: auto;
	border-bottom: var(--border_width) solid;
	border-left: var(--border_width) solid;
	border-radius: 0 0 0 var(--border_radius);
}
</style>
