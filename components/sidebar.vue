<template>
	<div>
    	<button class="fixed w-12 h-12 top-6 right-6 z-50" @click="openMenu">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"	
		>
			<path
				d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
			/>
		</svg>
		</button>
		<nav 
			class="
				fixed
				top-24 
				right-0 
				z-40 
				w-40 
				text-center 
				bg-blue-900 
				text-white 
				py-6
				inset-y-0
				shadow-2xl
				hidden
			"
		>
			<div>
				<ul>
					<li class="relative block sm:inline-block">
					<nuxt-link
						to="/"
						class="
							block
							no-underline
							hover:underline
							uppercase
							p-4
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
							p-4
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
							p-4
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
							p-4
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
							p-4
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
							p-4
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
							p-4
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
							p-4
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
							p-4
						"
					>
						Ota yhteyttä
					</nuxt-link>
				</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	export default{
		name: "SideBar",
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
		methods: {
			openMenu() {
				this.active = this.active ? null : "open";
			},
		},
	};
</script>