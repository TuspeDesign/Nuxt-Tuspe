<template>
	<header
		class="
			fixed
			top-0
			left-0
			z-50
			grid
			w-full
			py-4
			px-6
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
    </header>
</template>

<script>
    export default {
        methods: {
			openMenu() {
				this.active = this.active ? null : "open";
			},
		},
    }
</script>