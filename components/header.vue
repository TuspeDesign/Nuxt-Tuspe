<template>
	<header>
		<nuxt-link
			id="logo"
			class="absolute top-6 left-6 z-40 block sm:inline-block w-32"
			to="/"
			rel="home"
			title="Tuspe Design Oy - Laadukkaat kotisivut ja verkkokaupat yritykselle"
		>
			<picture>
				<source srcset="/images/tuspe-logo.webp" type="image/webp" />
				<source srcset="/images/tuspe-logo.png" type="image/png" />
				<img src="/images/tuspe-logo.png" alt="Tuspe Design Oy" />
			</picture>
		</nuxt-link>

		<button
			@click="openMenu"
			id="menuToggler"
			class="fixed top-6 right-6 z-50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<title>Avaa / sulje mobiilivalikko</title>
				<path
					d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
				/>
			</svg>
		</button>

		<nav
			class="
				fixed
				top-0
				right-0
				w-92
				bg-gray-900
				z-40
				h-screen
				text-center
			"
			:class="{ active: active, hidden: !active }"
		>
			<ul class="self-center m-0 p-0">
				<li
					v-for="(e, i) in menu"
					:key="i"
					@click="openMenu"
					class="block"
				>
					<nuxt-link
						:to="`/${e.path}`"
						class="block text-white no-underline uppercase p-2"
					>
						{{ e.name }}
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "Header",
		components: {},
		data() {
			return {
				active: null,
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
						name: "Referenssit",
						path: "referenssit",
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
		},
	};
</script>