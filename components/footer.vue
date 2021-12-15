<template>
	<footer v-if="site" class="py-2 px-6 mt-20">
		<div class="grid grid-cols-1 bg-gray-50 container mx-auto">
			
			<div class="m-auto">
				<div id="contactInfo">
					<h3 class="">Tuspe Design Oy</h3><p><a href="mailto:info@tuspe.com" rel="nofollow">info@tuspe.com</a><br><a href="tel:+358407746121" rel="nofollow">040 774 6121</a></p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
	};
</script>