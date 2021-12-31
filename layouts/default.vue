<template>
	<div id="prison" class="bg-primary w-full min-h-screen" :class="mode">
		<a class="hidden" href="#content">Sisältö</a>

		<header
			class="bg-menu fixed top-0 right-0 lg:right-2 z-50 h-screen"
			:class="{ 'w-12': !active }"
		>
			<div
				id="asideButtons"
				class="text-center absolute top-0 right-0 z-50"
			>
				<nuxt-link
					to="/"
					class="w-12 h-12 grid no-underline font-bold text-logo"
					rel="home"
					title="Tuspe Design Oy"
					aria-label="Linkki etusivulle"
				>
					<span class="self-center" aria-label="Tuspe">T</span>
				</nuxt-link>

				<button
					@click="openMenu"
					id="menuToggler"
					class="w-12 h-12 border-0 bg-transparent"
					title="Tutustu Tuspen tarjontaan"
					aria-label="Valikon avaaminen ja sulkeminen"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<title>Mobiilivalikko</title>
						<path
							d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
						/>
					</svg>
				</button>

				<ul
					id="contacts"
					class="m-0 p-0 mt-2"
					aria-label="Yhteydenotto"
				>
					<li class="block">
						<a
							id="whatsapp"
							class="grid w-12 h-12"
							href="https://api.whatsapp.com/send?phone=358407746121"
							target="_blank"
							rel="noopener nofollow"
							title="Ota rohkeasti yhteyttä"
							aria-label="Yhteydenotto palvelulla WhatsApp"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="34"
								height="34"
								viewBox="0 0 24 24"
								class="self-center mx-auto"
							>
								<title>
									Ota rohkeasti yhteyttä ja keskustellaan
									miten voisimme auttaa
								</title>
								<path
									d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
								/></svg
						></a>
					</li>

					<li class="block">
						<a
							class="grid w-12 h-12"
							href="mailto:moro@tuspe.com"
							rel="nofollow"
							title="Lähetä sähköpostia"
							aria-label="Yhteydenotto sähköpostilla"
						>
							<svg
								class="self-center mx-auto"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
							>
								<title>Kirje</title>
								<path
									d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"
								/>
							</svg>
						</a>
					</li>
				</ul>

				<ul
					id="colors"
					class="m-0 p-0 mt-4"
					aria-label="Sivuston väriteemat"
				>
					<li v-for="(e, i) in modes" :key="i" class="block">
						<button
							@click="changeColors(e.name)"
							class="w-12 h-10 bg-transparent border-0"
						>
							<div
								class="
									w-6
									h-6
									rounded-full
									mx-auto
									border-color
								"
								:class="{ 'border-active': mode == e.name }"
								:style="`background-color:${e.color}`"
							>
								<span class="hidden">{{ e.name }} mode</span>
							</div>
						</button>
					</li>
				</ul>

				<ul class="m-0 p-0 text-center">
					<li class="block">
						<button
							@click="changeSize(fontSize + 1)"
							class="
								w-12
								h-10
								border-0
								bg-transparent
								text-xl
								font-bold
							"
							:disabled="fontSize >= 25"
						>
							A+
						</button>
					</li>
					<li class="block">
						<button
							@click="changeSize(fontSize - 1)"
							class="
								w-12
								h-10
								border-0
								bg-transparent
								text-xl
								font-bold
							"
							:disabled="fontSize <= 14"
						>
							A-
						</button>
					</li>
				</ul>
			</div>

			<nav
				class="pr-14 block h-screen text-center px-6"
				:class="{ active: active, hidden: !active }"
			>
				<div class="border-bottom mb-4">
					<h2 class="text-title font-bold text-xl my-3">
						Tuspe Design
					</h2>
				</div>

				<ul class="m-0 p-0">
					<li
						v-for="(e, i) in menu"
						:key="i"
						@click="openMenu"
						class="block"
					>
						<nuxt-link
							:to="`/${e.path}`"
							class="block no-underline uppercase p-2"
						>
							{{ e.name }}
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</header>

		<main
			class="block overflow-x-hidden"
			:style="`--fontSize:${fontSize}px`"
		>
			<div
				id="content"
				class="max-w-screen-2xl mx-auto relative pt-6 2xl:px-10"
			>
				<Nuxt keep-alive />
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mode: "light",
				modes: [
					{ name: "light", color: "#f3f5f4" },
					{ name: "blue", color: "#04293a" },
					{ name: "dark", color: "#121212" },
					{ name: "sepia", color: "#c9a787" },
				],
				active: null,
				fontSize: 16,
				menu: [
					{
						name: "Etusivu",
						path: "",
					},
					{
						name: "Kotisivut",
						path: "kotisivut-yritykselle",
					},
					{
						name: "Verkkokaupat",
						path: "verkkokauppa-yritykselle",
					},
					{
						name: "Urheiluseurat",
						path: "urheilu",
					},
					{
						name: "Hakukoneoptimointi",
						path: "hakukoneoptimointi",
					},
					{
						name: "Verkkotunnukset",
						path: "verkkotunnukset",
					},
					{
						name: "Ylläpitopalvelut",
						path: "yllapito",
					},
					{
						name: "Ota yhteyttä",
						path: "yhteys",
					},
				],
			};
		},
		methods: {
			openMenu() {
				this.active = this.active ? null : "open";
			},
			changeColors(e) {
				this.mode = e;
			},
			changeSize(e = 16) {
				if (e > 25) e = 25;
				else if (e < 14) e = 14;
				this.fontSize = e;
			},
		},
	};
</script>