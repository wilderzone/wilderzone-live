<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { defineComponent } from 'vue';
import ApexCharts from 'apexcharts';
import SiteHeader from '@/components/SiteHeader.vue';
import RefreshButton from '@/components/RefreshButton.vue';
import SiteFooter from '@/components/SiteFooter.vue';

// @ts-expect-error: ApexCharts must be attached to the window object.
window.ApexCharts = ApexCharts;

interface Range {
	min: number;
	max: number;
}

interface Server {
	locked: boolean;
	map: string;
	mode: 'goty' | 'ootb';
	name: string;
	players: string[];
	type: string;
}

interface ServerData {
	online_players_list: string[];
	online_servers_list: Server[];
}

export default defineComponent({
	name: 'Online',
	components: {
		SiteHeader,
		RefreshButton,
		SiteFooter
	},
	data() {
		return {
			loading: true,
			animatingChartIn: false,
			animatingChartOut: false,
			hirez: 0,
			community: 0,
			pugs: 0,
			test: [] as Server[],
			showChart: false
		};
	},
	methods: {
		async fetchServerData(): Promise<Server[]> {
			const response = await fetch('data/dummyServerData.json');
			const data: ServerData = await response.json();
			this.community = data.online_players_list.length;
			return data.online_servers_list;
		},
		async refresh(): Promise<void> {
			this.loading = true;
			await this.fetchServerData();
			window.setTimeout(() => {
				this.loading = false;
			}, 4000);
		},
		renderChart(): void {
			function generateDayWiseTimeSeries(
				baseval: number,
				count: number,
				yrange: Range
			) {
				var i = 0;
				var series = [];
				while (i < count) {
					var x = baseval;
					var y =
						Math.floor(
							Math.random() * (yrange.max - yrange.min + 1)
						) + yrange.min;

					series.push([x, y]);
					baseval += 86400000;
					i++;
				}
				return series;
			}

			const data = generateDayWiseTimeSeries(
				new Date('22 Apr 2017').getTime(),
				115,
				{
					min: 30,
					max: 90
				} as Range
			);
			const options1 = {
				chart: {
					id: 'chart2',
					type: 'area',
					width: '100%',
					height: '40%',
					foreColor: '#ccc',
					toolbar: {
						autoSelected: 'pan',
						show: false
					}
				},
				colors: ['#00BAEC'],
				stroke: {
					width: 3
				},
				grid: {
					borderColor: '#555',
					clipMarkers: false,
					yaxis: {
						lines: {
							show: false
						}
					}
				},
				dataLabels: {
					enabled: false
				},
				fill: {
					gradient: {
						enabled: true,
						opacityFrom: 0.55,
						opacityTo: 0
					}
				},
				markers: {
					size: 5,
					colors: ['#000524'],
					strokeColor: '#00BAEC',
					strokeWidth: 3
				},
				series: [
					{
						data: data
					}
				],
				tooltip: {
					theme: 'dark'
				},
				xaxis: {
					type: 'datetime'
				},
				yaxis: {
					min: 0,
					tickAmount: 4
				}
			};

			const chart1 = new ApexCharts(
				document.querySelector('#charts .top'),
				options1
			);

			chart1.render();

			const options2 = {
				chart: {
					id: 'chart1',
					width: '100%',
					height: '25%',
					type: 'bar',
					foreColor: '#ccc',
					brush: {
						target: 'chart2',
						enabled: true
					},
					selection: {
						enabled: true,
						fill: {
							color: '#fff',
							opacity: 0.4
						},
						xaxis: {
							min: new Date('27 Jul 2017 10:00:00').getTime(),
							max: new Date('14 Aug 2017 10:00:00').getTime()
						}
					}
				},
				colors: ['#FF0080'],
				series: [
					{
						data: data
					}
				],
				stroke: {
					width: 2
				},
				grid: {
					borderColor: '#444'
				},
				markers: {
					size: 0
				},
				xaxis: {
					type: 'datetime',
					tooltip: {
						enabled: false
					}
				},
				yaxis: {
					tickAmount: 2
				}
			};

			const chart2 = new ApexCharts(
				document.querySelector('#charts .bottom'),
				options2
			);

			chart2.render();
		},
		toggleChartVisibility(): void {
			if (this.showChart) {
				this.animatingChartOut = true;
				this.showChart = false;
				window.setTimeout(() => {
					this.animatingChartOut = false;
				}, 500);
			} else {
				this.animatingChartIn = true;
				window.setTimeout(() => {
					this.showChart = true;
					this.animatingChartIn = false;
				}, 500);
			}
		}
	},
	async mounted(): Promise<void> {
		this.loading = true;
		this.test = await this.fetchServerData();
		this.renderChart();
		this.loading = false;
	}
});
</script>

<template>
	<SiteHeader :fixedHeading="true" />
	<main>
		<RefreshButton
			:loading="loading"
			:style="{ pointerEvents: loading ? 'none' : 'all' }"
			@click="refresh()"
		/>
		<div class="counters" :class="{ loading: loading }">
			<div
				class="counter total"
				:class="{
					transitionToLeft: animatingChartIn,
					transitionToCenter: animatingChartOut,
					areaLeft: showChart || animatingChartOut
				}"
			>
				<output name="totalCounter" title="All players online">{{
					loading ? '...' : hirez + community + pugs
				}}</output>
				<label for="totalCounter">Players online</label>
				<button
					class="showMore"
					:class="{
						disabled:
							animatingChartIn || animatingChartOut || loading
					}"
					:title="`${showChart ? 'Hide' : 'Show'} history chart`"
					@click="toggleChartVisibility()"
				></button>
			</div>
			<div
				id="charts"
				:class="{
					disabled: animatingChartIn || animatingChartOut || loading,
					shown: showChart
				}"
			>
				<div class="top"></div>
				<div class="bottom"></div>
			</div>
			<span class="counterLead total"></span>
			<span class="counterLead hirez"></span>
			<span class="counterLead community"></span>
			<span class="counterLead pugs"></span>
			<div class="counter hirez">
				<output name="hirezCounter" title="Players on HiRez servers">{{
					loading ? '...' : hirez
				}}</output>
				<label for="hirezCounter">HiRez</label>
			</div>
			<div class="counter community">
				<output
					name="communityCounter"
					title="Players on Community servers"
					>{{ loading ? '...' : community }}</output
				>
				<label for="communityCounter">Community</label>
			</div>
			<div class="counter pugs">
				<output name="pugsCounter" title="Players on PUGs servers">{{
					loading ? '...' : pugs
				}}</output>
				<label for="pugsCounter">PUGs</label>
			</div>
		</div>

		<div class="scrollPrompt">Server List</div>

		<div
			class="table"
			:style="{ gridTemplateRows: `repeat(${test.length}, 1fr)` }"
		>
			<div
				v-for="[index, server] in Object.entries(test)"
				:key="index"
				class="serverRow"
				:style="{
					gridArea: `${parseInt(index) + 1} / 1 / ${
						parseInt(index) + 2
					} / 7`
				}"
			>
				<div></div>
				<div>{{ server.mode }}</div>
				<div>{{ server.name }}</div>
				<div>{{ server.type }}</div>
				<div>{{ server.map }}</div>
				<div>{{ server.players.length }}</div>
			</div>
		</div>
	</main>

	<SiteFooter />
</template>

<style lang="scss">
@import '@/css/root.css';

main {
	gap: unset;
}

.counters {
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: calc(42vh - var(--header_height)) 10vh 48vh;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	place-items: center;
	width: min(100vw, 1200px);

	&::before {
		content: '';
		position: absolute;
		width: 120vh;
		height: 120vh;
		border: 0px solid #0134;
		border-radius: 50%;
		box-shadow: 50px -5px 0px #0138, 10px -35px 0px #0135,
			25px -25px 0px #0133;
		opacity: 0;
		transition: 1s ease-out opacity;
		animation: spin 3s linear infinite;
		user-select: none;
		pointer-events: none;

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}

	&.loading::before {
		opacity: 0.5;
	}

	.counter {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 100%;

		&.total {
			grid-area: 1 / 2 / 2 / 3;
			justify-content: flex-end;
			transform: translateX(0%);

			&.transitionToLeft {
				transform: translateX(-100%);
				transition: 0.5s ease transform;
			}

			&.transitionToCenter {
				transform: translateX(100%);
				transition: 0.5s ease transform;
			}

			&.areaLeft {
				grid-area: 1 / 1 / 2 / 2;
			}

			> button.showMore {
				all: unset;
				position: absolute;
				right: 3.5rem;
				bottom: 12vh;
				display: block;
				width: 2rem;
				height: 2rem;
				background-color: #8882;
				background-image: url('@/assets/icons/query_stats.svg');
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				border-radius: 50%;
				cursor: pointer;
			}
		}

		&.hirez {
			grid-area: 3 / 1 / 4 / 2;
		}

		&.community {
			grid-area: 3 / 2 / 4 / 3;
		}

		&.pugs {
			grid-area: 3 / 3 / 4 / 4;
		}

		output {
			font-size: 15vh;
			font-weight: 300;
		}

		label {
			transform: translateY(-3rem);
		}
	}

	.counterLead {
		$line_thickness: 4px;
		position: absolute;
		inset: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		mask-image: linear-gradient(
			transparent,
			#000 30%,
			#000 70%,
			transparent
		);
		overflow: hidden;

		&::before,
		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			color: inherit;
			border: $line_thickness solid currentColor;
			border-radius: 20px;
		}

		&.total {
			grid-area: 2 / 2 / 3 / 3;

			&::before {
				position: absolute;
				bottom: calc(50% - ($line_thickness / 2));
				right: calc(50% - ($line_thickness / 2));
			}

			&::after {
				position: absolute;
				bottom: calc(50% - ($line_thickness / 2));
				left: calc(50% - ($line_thickness / 2));
			}
		}

		&.hirez {
			grid-area: 2 / 1 / 3 / 2;

			&::before {
				position: absolute;
				top: calc(50% - ($line_thickness / 2));
				left: calc(50% - ($line_thickness / 2));
			}

			&::after {
				content: unset;
			}
		}

		&.community {
			grid-area: 2 / 2 / 3 / 3;

			&::before {
				width: $line_thickness;
				background-color: currentColor;
				border: unset;
			}

			&::after {
				content: unset;
			}
		}

		&.pugs {
			grid-area: 2 / 3 / 3 / 4;

			&::before {
				position: absolute;
				top: calc(50% - ($line_thickness / 2));
				right: calc(50% - ($line_thickness / 2));
			}

			&::after {
				content: unset;
			}
		}
	}
}

#charts {
	grid-area: 1 / 2 / 2 / 4;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	width: 100%;
	height: 100%;
	padding-bottom: 10px;
	opacity: 0;
	visibility: hidden;

	&.shown {
		opacity: 1;
		visibility: visible;
		transition: 0.2s ease opacity;
	}

	> .top,
	> .bottom {
		width: 100%;
		background-color: #4441;
		border-radius: 10px;

		> div {
			width: 100%;
		}
	}

	> .top {
		height: 40%;
	}

	> .bottom {
		height: 25%;
	}
}

.scrollPrompt {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	transform: translateY(-4rem);
	opacity: 0.7;
	cursor: pointer;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 2.5rem;
		width: 0.8rem;
		height: 3px;
		color: inherit;
		background-color: currentColor;
		border-radius: 3px;
	}

	&::before {
		transform: translateX(-0.34rem) rotate(40deg);
		transform-origin: 100% 50%;
	}

	&::after {
		transform: translateX(0.34rem) rotate(-40deg);
		transform-origin: 0% 50%;
	}
}

.table {
	$online: #00df00;
	$idle: #f5b041;
	$offline: #df0000;
	display: grid;
	grid-template-columns: 12px 6ch 1fr 10ch 1fr 1fr;
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 15px;
	width: min(100vw, 1200px);

	.serverRow {
		display: grid;
		grid-template-columns: inherit;
		grid-template-rows: 1fr;
		grid-column-gap: inherit;
		justify-content: center;
		align-items: center;
		height: 3rem;
		background-color: #f9f9f9;
		border-radius: 7px;

		> div {
			/* Indicator */
			&:nth-child(1) {
				width: 7px;
				height: 80%;
				margin-left: 5px;
				background-color: $idle;
				border-radius: 5px;
			}
			/* Number */
			&:last-child {
				margin-right: 10px;
				margin-left: auto;
				font-size: larger;
			}
		}
	}
}

.total {
	color: #000;
}

.hirez {
	color: var(--primary_color);
}

.community {
	color: var(--primary_color_light);
}

.pugs {
	color: var(--secondary_color);
}
</style>
