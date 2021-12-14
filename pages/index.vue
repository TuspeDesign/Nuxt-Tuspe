<template>
	<div class="container mx-auto">
		<div class="text-center mt-10">
			<h1 class="">Miksi tyytyä hyvään,<br>kun voi saada <a class="text-blue-500 hover:underline" href="/kotisivut-yritykselle">parasta</a>?</h1>
		</div>
	
		<div class="grid grid-cols-3 gap-7 mt-20">
			<p><a href="/kotisivut-yritykselle">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/websites.webp">
			</a></p>

			<p><a href="/verkkokauppa-yritykselle">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/webstores.webp">
			</a></p>

			<p><a href="/yllapito">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/hosting.webp">
			</a></p>
		</div>

		<div id="contactMe" class="text-center mt-20">
			<h2 class=""><span class="text-blue-500">Laadukkaat verkkosivut</span><br>ovat hyvää asiakaspalvelua</h2>
			<p>Kehitä liiketoimintaasi tilaamalla uudet kotisivut yrityksellesi tai uudista nykyiset sivusi. Ota yhteyttä, saat ilmaisen kartoituksen verkkosivustosta ja ehdotuksen, miten voisimme parantaa myyntiänne.</p>
			<p><a class="text-blue-500 hover:underline" href="/yhteys">Ilmainen kartoitus</a></p>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	// import Json from "";

	export default Vue.extend({
		data() {
			return {
				page: null,
			};
		},
		async fetch() {
			const temp = await fetch(``);
		},
	});
</script>
