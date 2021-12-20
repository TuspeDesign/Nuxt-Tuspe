<template>
    <button @click="toggle">Valikko
		<nav>
			<div class="">
				<ul>
					<li class="relative block sm:inline-block">
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
				</ul>
			</div>
		</nav>
	</button>
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
			
		},
	};
</script>