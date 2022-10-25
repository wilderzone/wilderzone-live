<script lang="ts">
import { defineComponent } from 'vue';
import SimpleButton from '@/components/SimpleButton.vue';

interface NewsItem {
	id: string;
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
			newsList: [] as NewsItem[],
			read: [] as string[]
		};
	},
	methods: {
		async fetchNewsData(): Promise<NewsItem[]> {
			const response = await fetch('data/news.json');
			const data: NewsItem[] = await response.json();
			return data;
		},
		loadReadList(): void {
			const storedList = window.localStorage.getItem('newsReadList');
			if (storedList) {
				this.read = JSON.parse(storedList);
			}
		},
		saveReadList(list?: string[]): void {
			window.localStorage.setItem(
				'newsReadList',
				JSON.stringify(list ?? this.read)
			);
		},
		updateReadList(id: string): void {
			if (!this.read.includes(id)) {
				this.read.push(id);
			}
			this.saveReadList();
		},
		getImage(news: NewsItem): string {
			if (news.image) {
				return require(`@/assets/images/news/${news.image}`);
			}
			return require('@/assets/images/maps/bella_omega-1.webp');
		}
	},
	async mounted(): Promise<void> {
		this.newsList = await this.fetchNewsData();
		this.loadReadList();
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
				<li
					v-if="parseInt(index) < 4"
					class="tile"
					:class="{ unread: !read.includes(news.id) }"
					@mouseenter="updateReadList(news.id)"
				>
					<div class="image">
						<img :src="getImage(news)" alt="" />
					</div>
					<div>
						<h3 :title="news.title">{{ news.title }}</h3>
						<time>{{ news.date }}</time>
						<p>{{ news.desc }}</p>
					</div>
				</li>
			</template>
			<li class="tile">
				<SimpleButton fill>More&nbsp;&nbsp;></SimpleButton>
			</li>
		</ol>
	</div>
</template>

<style lang="scss">
.news {
	width: clamp(300px, 100%, 50%);
	margin: calc(75px + 5rem) 0px;

	> .inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		padding: 10px;
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
		background-color: #eee;
		border: 3px solid transparent;
		border-radius: 10px;
		transition: 0.2s ease border;

		&:first-child {
			grid-area: 1 / 1 / 5 / 2;
			flex-flow: column nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			> div {
				gap: 10px;
			}

			> .image {
				width: 100%;
				aspect-ratio: 2;
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

		&.unread {
			border-color: orange;

			&::after {
				content: 'New';
				position: absolute;
				top: 0px;
				right: 0px;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0px 1ch;
				text-transform: uppercase;
				background-color: orange;
				border-radius: 0px 0px 0px 5px;
				user-select: none;
				pointer-events: none;
			}
		}

		> .image {
			display: block;
			flex-shrink: 0;
			width: 150px;
			aspect-ratio: 1.5;
			border-radius: 7px;
			box-shadow: 0px 10px 30px -10px #0032;
			overflow: hidden;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
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

		time {
			font-size: 0.85em;
			font-style: italic;
		}
	}
}
</style>
