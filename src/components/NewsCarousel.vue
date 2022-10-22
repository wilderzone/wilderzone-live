<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NewsCarousel'
});
</script>

<template>
	<div class="news">
		<div class="inner">
			<div class="main">
				<div class="tile">
					<h2>News Title</h2>
					<time>2022/05/18</time>
					<p>
						Velit consectetur fugiat fugiat excepteur ut fugiat.
						Cillum dolor reprehenderit duis est dolor aliquip cillum
						cupidatat cupidatat cillum ex aliquip consectetur. Anim
						excepteur mollit proident id minim et.
					</p>
				</div>
			</div>
			<div class="side">
				<div class="tile">
					<h2>News Title</h2>
					<time>2022/05/18</time>
					<p>
						Nisi duis proident veniam nostrud exercitation ut.
						Deserunt elit esse minim Lorem irure do deserunt dolore
						laborum commodo irure culpa Lorem ea. Anim ut et et
						laborum laborum ut tempor eu ullamco nisi.
					</p>
				</div>
				<div class="tile">
					<h2>News Title</h2>
					<time>2022/05/18</time>
					<p>
						Laborum incididunt nulla aliqua mollit adipisicing id
						adipisicing commodo qui velit reprehenderit minim
						aliquip nostrud. Cillum aliqua tempor sit consequat ex
						ex dolore occaecat cillum irure. Nulla enim elit nisi
						enim ex fugiat pariatur eu aute enim consectetur labore.
						In incididunt est incididunt tempor aliqua incididunt.
						Laborum do enim magna id laborum cupidatat ut fugiat non
						culpa officia esse. Reprehenderit enim duis exercitation
						qui aliquip amet do aute irure.
					</p>
				</div>
				<div class="tile">
					<h2>News Title</h2>
					<time>2022/05/18</time>
					<p>
						Do exercitation cillum labore id proident velit.
						Proident adipisicing commodo cupidatat occaecat ea
						adipisicing amet ullamco mollit ex duis et. Nisi sit
						voluptate laborum culpa aute enim et Lorem officia sit
						quis proident sunt. Minim amet consectetur mollit in ut
						aute cupidatat amet consectetur eiusmod tempor. Fugiat
						anim dolor deserunt laboris laborum minim ex consequat
						labore do nisi magna Lorem. Enim adipisicing tempor
						aliquip eu quis aliquip anim fugiat esse.
					</p>
				</div>
				<div class="tile">
					<h2>News Title</h2>
					<time>2022/05/18</time>
					<p>
						Aliqua aliquip cupidatat id Lorem. Nostrud et velit est
						elit aliquip minim eu. Deserunt magna cupidatat tempor
						culpa aliqua elit incididunt.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.news {
}
.news > .inner {
	display: flex;
	flex-flow: row wrap;
}
.news .main {
	width: 50%;
}
.news .side {
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	width: 50%;
}
.news .tile {
}
.news .tile p {
	display: none;
}
</style>
