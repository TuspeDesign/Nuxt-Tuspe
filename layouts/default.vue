<template>
	<div id="prison" class="bg-primary min-h-screen" :class="mode">
		<a class="hidden" href="#content">Sisältö</a>
		<a class="hidden" href="#sidebar">Sivupalkki</a>

		<nav
			:class="{ hidden: !active }"
			class="fixed top-0 left-0 z-40 grid bg-secondary text-center"
		>
			<ul
				id="menu"
				class="self-center -mt-14 mb-0 p-0 max-w-screen-sm mx-auto"
				role="menu"
				aria-label="Navigointi"
			>
				<li
					v-for="(item, i) in menu"
					:key="i"
					class="block"
					role="none"
				>
					<nuxt-link
						:to="`/${item.path}`"
						class="
							block
							text-content
							no-underline
							text-md
							uppercase
							hover:text-link
							p-2
						"
						role="menuitem"
					>
						{{ item.name }}
					</nuxt-link>
				</li>
			</ul>
		</nav>

		<aside
			id="sidebar"
			class="
				fixed
				z-50
				w-screen
				h-14
				bottom-0
				right-0
				bg-menu
				text-center
				md:top-0 md:h-screen md:w-14
			"
		>
			<button
				@click="openMenu"
				class="
					w-14
					h-14
					mx-auto
					inline-block
					align-middle
					bg-transparent
					border-0
					m-0
					p-0
				"
			>
				<svg
					v-if="!active"
					class="self-center mx-auto mt-1"
					viewBox="0 0 100 80"
					width="30"
					height="30"
				>
					<title>Avaa mobiilivalikko</title>
					<rect width="100" height="20" />
					<rect y="30" width="100" height="20" />
					<rect y="60" width="100" height="20" />
				</svg>
				<svg
					v-else
					class="self-center mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<title>Ajaa ja sulje mobiilivalikko</title>
					<path
						d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
					/>
				</svg>
			</button>

			<button
				@click="toggleAccessibility = !toggleAccessibility"
				v-bind:class="{ open: toggleAccessibility }"
				class="
					w-14
					h-14
					mx-auto
					inline-block
					align-middle
					bg-transparent
					border-0
					md:m-0
					p-0
				"
				title="Menu toggle for accessibility"
				aria-label="Open / close the accessibility menu"
			>
				<div class="grid w-full">
					<svg
						class="self-center mx-auto block"
						width="36"
						height="36"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
					>
						<title>Accessibility</title>
						<path
							d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m0 2c5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10m0 1c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9m-.011 11.5c-.474.006-.765.448-.989.804-.483.767-1.005 1.58-1.455 2.264-.155.238-.325.43-.609.432-.285.002-.526-.343-.389-.632.366-.769 1.953-3.539 1.953-5.868 0-.806-.429-1-1-1h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.57 0-1 .194-1 1 0 2.329 1.587 5.099 1.953 5.868.137.289-.103.634-.389.632-.284-.002-.454-.194-.609-.432-.45-.684-.973-1.497-1.455-2.264-.226-.359-.52-.806-1-.804h-.011zm.011-8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5"
						/>
					</svg>
				</div>
			</button>

			<div
				v-bind:class="{
					hidden: !toggleAccessibility,
					open: toggleAccessibility,
				}"
				id="accessibility"
				class="
					bg-menu
					absolute
					-top-12
					left-0
					w-full
					text-center
					md:relative md:top-0 md:w-12 md:mt-2 md:mx-auto
				"
			>
				<ul class="m-0 p-0">
					<li
						v-for="(e, i) in colors"
						:key="i"
						class="inline-block align-middle"
						role="none"
					>
						<button
							@click="fixStyles(e.name)"
							class="
								w-12
								h-12
								mx-auto
								bg-transparent
								border-0
								text-center
								p-0
							"
							role="listitem"
							title="Change the theme"
							aria-label="Choose the best theme for your eyes"
						>
							<div
								class="
									w-8
									h-8
									rounded-full
									mx-auto
									border
									border-solid
									border-gray-100
									border-opacity-80
								"
								:style="`background-color:${e.color}`"
								:aria-label="`Theme ${e.name}`"
							>
								<span class="hidden">{{ e.name }}Mode</span>
							</div>
						</button>
					</li>

					<li class="inline-block align-middle" role="none">
						<button
							@click="changeSize(fontSize + 1)"
							class="
								w-12
								h-12
								mx-auto
								bg-transparent
								border-0
								p-0
							"
							role="listitem"
							title="Font magnification"
							aria-label="Increase the font size of the site"
							:disabled="fontSize >= 25"
						>
							<div
								class="
									grid
									w-full
									h-full
									text-right
									md:text-center
								"
							>
								<span
									class="
										self-center
										font-bold
										text-content text-lg
									"
									>A+</span
								>
							</div>
						</button>
					</li>

					<li class="inline-block align-middle" role="none">
						<button
							@click="changeSize(fontSize - 1)"
							class="
								w-12
								h-12
								mx-auto
								bg-transparent
								border-0
								p-0
							"
							role="listitem"
							title="Font reduction"
							aria-label="Reduce the font size of the site"
							:disabled="fontSize <= 14"
						>
							<div
								class="
									grid
									w-full
									h-full
									text-right
									md:text-center
								"
							>
								<span
									class="
										self-center
										font-bold
										text-content text-lg
									"
									>A-</span
								>
							</div>
						</button>
					</li>
				</ul>
			</div>

			<a
				class="
					w-14
					h-14
					mx-auto
					inline-block
					align-middle
					md:m-0 md:grid
				"
				href="https://api.whatsapp.com/send?phone=358407746121"
				rel="nofollow"
			>
				<div class="grid w-full h-full">
					<svg
						class="self-center mx-auto"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<title>WhatsApp</title>
						<path
							d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
						/>
					</svg>
				</div>
			</a>

			<a
				class="
					w-14
					h-14
					mx-auto
					inline-block
					align-middle
					md:m-0 md:grid
				"
				href="mailto:moro@tuspe.com"
				rel="nofollow"
			>
				<div class="grid w-full h-full">
					<svg
						class="self-center mx-auto"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<title>Sähköposti</title>
						<path
							d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"
						/>
					</svg>
				</div>
			</a>
		</aside>

		<main
			id="content"
			class="block overflow-x-hidden"
			:style="`--fontSize:${fontSize}px`"
		>
			<Nuxt keep-alive />
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mode: "dark",
				colors: [
					{ name: "blue", color: "#04293a" },
					{ name: "dark", color: "#121212" },
				],
				fontSize: 16,
				active: null,
				toggleAccessibility: null,
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
						name: "Urheilusaitti",
						path: "sportti",
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
			changeSize(e = 16) {
				if (e > 25) e = 25;
				else if (e < 14) e = 14;
				this.fontSize = e;
			},
			changeColors(e) {
				this.mode = e;
			},
			fixStyles(color = "dark") {
				this.mode = color;
			},
		},
	};
</script>