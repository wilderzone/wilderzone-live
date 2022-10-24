<script lang="ts">
import { defineComponent } from 'vue';
import SimpleButton from '@/components/SimpleButton.vue';

interface NewsItem {
	title: string;
	date: string;
	desc: string;
	image: string;
	link: string;
}

export default defineComponent({
	name: 'NewsCarousel',
	components: {
		SimpleButton
	},
	data() {
		return {
			newsList: [] as NewsItem[]
		};
	},
	methods: {
		async fetchNewsData(): Promise<NewsItem[]> {
			const response = await fetch('data/news.json');
			const data: NewsItem[] = await response.json();
			return data;
		}
	},
	async mounted(): Promise<void> {
		this.newsList = await this.fetchNewsData();
	}
});
</script>

<template>
	<div class="news">
		<ol class="inner">
			<template
				v-for="[index, news] in Object.entries(newsList)"
				:key="index"
			>
				<li v-if="parseInt(index) < 4" class="tile">
					<img src="@/assets/images/maps/bella_omega-1.webp" alt="" />
					<div>
						<h3>{{ news.title }}</h3>
						<time>{{ news.date }}</time>
						<p>{{ news.desc }}</p>
					</div>
				</li>
			</template>
			<li class="tile">
				<SimpleButton>More&nbsp;&nbsp;></SimpleButton>
			</li>
		</ol>
	</div>
</template>

<style lang="scss">
.news {
	width: clamp(300px, 100%, 50%);
	min-height: inherit;
	margin: calc(75px + 5rem) 0px;

	> .inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		height: 60vh;
		padding: 10px;
		border: 1px solid #0004;
		border-radius: 10px;
	}

	.tile {
		grid-area: 1 / 1 / 2 / 2;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;
		padding: 5px;

		&:first-child {
			grid-area: 1 / 1 / 5 / 2;
			flex-flow: column nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			> div {
				gap: 10px;
			}

			img {
				width: 100%;
			}

			p {
				display: contents;
			}
		}

		&:nth-child(2) {
			grid-area: 1 / 2 / 2 / 3;
		}

		&:nth-child(3) {
			grid-area: 2 / 2 / 3 / 3;
		}

		&:nth-child(4) {
			grid-area: 3 / 2 / 4 / 3;
		}

		&:nth-child(5) {
			grid-area: 4 / 2 / 5 / 3;
		}

		img {
			width: 150px;
			border-radius: 7px;
			box-shadow: 0px 10px 30px -10px #0032;
		}

		> div {
			display: flex;
			flex-flow: column nowrap;
			justify-content: flex-start;
			align-items: flex-start;
		}

		p {
			display: none;
		}
	}
}
</style>
