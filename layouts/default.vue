<template>
	<div class="bg-gray-50">
		<a class="hidden" href="#content">Sisältö</a>

		<nuxt-link
			id="logo"
			class="block sm:inline-block w-48 py-5 px-10"
			to="/"
			rel="home"
		>
			<img src="https://tuspe.com/images/tuspe-logo.png"/>
		</nuxt-link>
		
		<!-- <Sidebar/> -->
		<main
			id="content"
			class="flex flex-col max-w-screen-xl mx-auto -mt-5"
		>
			<Nuxt keep-alive class="flex-grow" />
		</main>
		<Footer/>
	</div>
</template>

<script>
	import Header from "@/components/header";
	import Footer from "@/components/footer";
	import Sidebar from "@/components/sidebar";

	export default {
		components: {
			Header,
			Footer,
			Sidebar,
		},
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
	};
</script>