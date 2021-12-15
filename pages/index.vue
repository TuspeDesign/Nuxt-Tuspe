<template>
	<div class="container mx-auto py-10 font-serif">
		<div class="text-center mt-10">
			<h1 class="text-4xl text-blue-900 font-bold">Miksi tyytyä hyvään,<br>kun voi saada <a class="text-blue-500 hover:underline font-bold" href="/kotisivut-yritykselle">parasta</a>?</h1>
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
			<h2 class="text-3xl text-blue-900 font-bold"><span class="text-blue-500 font-bold">Laadukkaat verkkosivut</span><br>ovat hyvää asiakaspalvelua</h2>
			<p class="text-base mt-5 ">Kehitä liiketoimintaasi tilaamalla uudet kotisivut yrityksellesi tai uudista nykyiset sivusi.<br> Ota yhteyttä, saat ilmaisen kartoituksen verkkosivustosta ja ehdotuksen, miten voisimme parantaa myyntiänne.</p>

			<button class="mt-10 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYhteys()"> Ilmainen kartoitus! </button>
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
		methods:{
            goToYhteys(){
                this.$router.push('/yhteys'); 
            }
        }
	});
</script>