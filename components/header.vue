<template>
	<header
		class="
			top-0
			left-0
			grid
			bg-gray-900
			flex-auto
			text-white
			py-5
			px-5
		"
	>
		<nuxt-link
			id="logo"
			class="block sm:inline-block w-36"
			to="/"
			rel="home"
		>
			<img src="https://tuspe.com/images/tuspe-logo.png"/>
		</nuxt-link>

		<button @click="openMenu" id="menuToggler" class="sm:hidden">
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
			class="bg-gray-900 z-20 relative box-border lg:text-right lg:grid float:right"
			:class="{ active: active, hidden: !active }"
		>
			<ul class="self-center m-0 p-0">
				<li @click="openMenu" class="block sm:inline-block">
					<nuxt-link
						to="/"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
						rel="home"
					>
						Etusivu
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/kotisivut-yritykselle"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Kotisivut
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/verkkokauppa-yritykselle"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Verkkokaupat
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/yllapito"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Ylläpito
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/urheilusaitti"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Urheilusaitti
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/hakukoneoptimointi"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Hakukoneoptimointi
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/verkkotunnukset"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Verkkotunnus
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/referenssit"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Referenssit
					</nuxt-link>
				</li>

				<li class="relative block sm:inline-block">
					<nuxt-link
						to="/yhteys"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-2
						"
					>
						Ota yhteyttä
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "Header",
		components: {
		},
		data() {
			return {
				hover: false,
				scrollPosition: 0,
			};
		},
		methods: {
			openMenu() {
				this.active = this.active ? null : "open";
			},
		},
		mounted() {
			this.path = $nuxt.$route.path;
		},
	};
</script>