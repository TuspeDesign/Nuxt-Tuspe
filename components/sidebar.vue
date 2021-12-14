<template>
    <aside>
		<h3>Osastot</h3>
		<ul class="m-0 p-0">
			<li
				v-for="e in site.menu"
				:key="e.id"
				@click="openMenu"
				class="block sm:inline-block"
			>
				<nuxt-link :to="e.slug" class="block p-2">
					{{ e.name }}
				</nuxt-link>
			</li>
		</ul>
	</aside>
</template>

<script>
	export default{
		name: "SideBar",
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
	};
</script>

<style scoped>

</style>