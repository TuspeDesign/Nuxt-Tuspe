<template>
	<footer v-if="site" class="bg-gray-900 text-white py-2 px-6 mt-12">
		<div class="grid grid-cols-2 container mx-auto">
			
			<div class="text-left m-auto">
				<ul>
					<nuxt-link to="/info" class="no-underline hover:underline text-gray-400 hover:text-white">
					Tietosuojaseloste</nuxt-link>
				</ul>
			</div>

			<div class="text-right m-auto">
				<ul>
					<a href="https://www.dataline.fi/" class="no-underline hover:underline text-gray-400 hover:text-white inline-block">Dataline Group Oy</a>
					<a href="https://www.tuspe.com/" class="no-underline hover:underline text-gray-400 hover:text-white inline-block ml-4">Tuspe Design</a>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		computed: {
			site: function () {
			},
		},
	};
</script>