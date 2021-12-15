<template>
	<div class="bg-gray-50">
		<a class="hidden" href="#content">Sisältö</a>

		<Header/>
		<main
			id="content"
			class="flex flex-col max-w-screen-xl mx-auto mt-20"
		>
			<Nuxt keep-alive class="flex-grow" />
		</main>
		<Footer/>
	</div>
</template>

<script>
	import Header from "@/components/header";
	import Footer from "@/components/footer";

	export default {
		components: {
			Header,
			Footer,
		},
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
	};
</script>