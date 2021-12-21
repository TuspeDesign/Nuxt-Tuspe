<template>
	<div class="container mx-auto font-serif">
		<div class="text-center">
			<h1 class="text-4xl text-blue-900 font-bold mt-5">Miksi tyytyä hyvään,<br>kun voi saada <a class="text-blue-500 hover:underline font-bold" href="/kotisivut-yritykselle">parasta</a>?</h1>
		</div>
	
		<div class="grid grid-cols-3 gap-10 mt-20">
			<p class="transform hover:scale-110 duration-300"><a href="/kotisivut-yritykselle">

				<div class="absolute -top-6 -left-24 p-6 mx-20 text-center bg-white rounded-2xl shadow-2xl">
					<h1 class="text-lg text-blue-900 font-bold">Kotisivut yritykselle<br>sinun toiveillasi</h1>

					<p class="mt-2 text-sm">Ei vain ulkoisesti kaunis ratkaisu vaan toimiva myyntikanava. Sinä unelmoit, me toteutamme.</p>
				</div>

				<img class="rounded-3xl" src="https://tuspe.com/images/websites.webp">
			</a></p>

			<p class="transform hover:scale-110 duration-300"><a href="/verkkokauppa-yritykselle">

				<div class="absolute -top-6 -left-24 p-6 mx-20 text-center bg-white rounded-2xl shadow-2xl">
					<h1 class="text-lg text-blue-900 font-bold">Verkkokauppa<br>yritykselle</h1>

					<p class="mt-2 text-sm">Aloita maailmanvalloitus monipuolisella ja ketterällä verkkokaupalla.</p>
				</div>

				<img class="rounded-3xl" src="https://tuspe.com/images/webstores.webp">
			</a></p>

			<p class="transform hover:scale-110 duration-300 hover:header-blue-500"><a href="/yllapito">

				<div class="absolute -top-6 -left-24 p-6 mx-20 text-center bg-white rounded-2xl shadow-2xl">
					<h1 class="text-lg text-blue-900 font-bold">Luotettava koti<br>verkkosivustolle</h1>

					<p class="mt-2 text-sm">Meillä on turvallista ja hyvä olla. Jos sivustosi saisi valita, asuisivat ne Tuspen hoidossa.</p>
				</div>

				<img class="rounded-3xl" src="https://tuspe.com/images/hosting.webp">
			</a></p>
		</div>

		<div id="contactMe" class="text-center mt-12">
			<h2 class="text-3xl text-blue-900 font-bold"><span class="text-blue-500 font-bold">Laadukkaat verkkosivut</span><br>ovat hyvää asiakaspalvelua</h2>
			<p class="text-base mt-5 ">Kehitä liiketoimintaasi tilaamalla uudet kotisivut yrityksellesi tai uudista nykyiset sivusi.<br> Ota yhteyttä, saat ilmaisen kartoituksen verkkosivustosta ja ehdotuksen,<br> miten voisimme parantaa myyntiänne.</p>

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