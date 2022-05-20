<script>
export default {
	name: 'PrimarySection',
	props: {
		direction: {
			type: String,
			required: true
		},
		heading: {
			type: String,
			required: false
		},
		color: {
			type: String,
			required: false
		}
	}
}
</script>

<template>
	<section :class="`primary_section ${$props.direction}`" :style="{borderColor: $props.color ? $props.color : 'var(--primary_color_light)'}">
		<div class="inner">
			<h1>{{ $props.heading }}</h1>
			<slot></slot>
		</div>
	</section>
</template>

<style>
.primary_section {
	--border_radius: 6rem;
	--border_width: 1.7rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	width: 92%;
	/* background-color: var(--background_color);
	box-shadow: 0 0 20px -10px black,
				0 0 300px -90px black; */
}
.primary_section > .inner {
	display: block;
	min-height: 500px;
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
