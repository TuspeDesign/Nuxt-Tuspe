<template>
	<div class="container mx-auto font-serif">
		<div class="text-center">
			<h1 class="text-4xl text-blue-900 font-bold mt-10 mb-16">
				Miksi tyytyä hyvään,<br />kun voi saada
				<a
					class="text-blue-500 hover:underline font-bold"
					href="/kotisivut-yritykselle"
					>parasta</a
				>?
			</h1>
		</div>

		<ul class="grid grid-cols-3 gap-10 m-0 p-0">
			<li
				v-for="(e, i) in menu"
				:key="i"
				class="relative block transform hover:scale-110 duration-300"
			>
				<nuxt-link :to="e.path">
					<picture>
						<source
							:srcset="`/images/${e.image}-700.webp 700w, /images/${e.image}.webp`"
							type="image/webp"
						/>
						<source
							:srcset="`/images/${e.image}-700.jpg 700w, /images/${e.image}.jpg`"
							type="image/jpg"
						/>
						<img
							:src="`/images/${e.image}.jpg`"
							:srcset="`/images/${e.image}-700.jpg 700w, /images/${e.image}.jpg`"
							type="image/jpeg"
							:alt="e.name"
							class="rounded-2xl shadow-lg block"
							width="436"
							height="556"
						/>
					</picture>

					<div
						class="
							absolute
							-top-6
							-left-14
							p-6
							mx-10
							text-center
							bg-white
							rounded-2xl
							shadow-2xl
							w-80
						"
					>
						<h2
							class="text-lg text-blue-900 font-bold m-0"
							v-html="e.name"
						/>
						<div class="description mt-2 text-sm">
							{{ e.description }}
						</div>
					</div>
				</nuxt-link>
			</li>
		</ul>

		<div id="contactMe" class="text-center mt-12">
			<h2 class="text-4xl text-blue-900 font-bold">
				<span class="text-blue-500 font-bold"
					>Laadukkaat verkkosivut</span
				><br />ovat hyvää asiakaspalvelua
			</h2>
			<p class="text-base mt-5">
				Kehitä liiketoimintaasi tilaamalla uudet kotisivut yrityksellesi
				tai uudista nykyiset sivusi.<br />
				Ota yhteyttä, saat ilmaisen kartoituksen verkkosivustosta ja
				ehdotuksen,<br />
				miten voisimme parantaa myyntiänne.
			</p>

			<button
				class="
					mt-10
					bg-blue-500
					hover:bg-blue-800
					text-white
					font-bold
					py-4
					px-10
					rounded-lg
					shadow-lg
					uppercase
				"
				@click="goToYhteys()"
			>
				Ilmainen kartoitus!
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menu: [
					{
						name: "Kotisivut yritykselle<br/>sinun toiveillasi",
						description:
							"Ei vain ulkoisesti kaunis ratkaisu vaan toimiva myyntikanava. Sinä unelmoit, me toteutamme.",
						image: "websites",
						path: "kotisivut-yritykselle",
					},
					{
						name: "Verkkokauppa<br/>yritykselle",
						description:
							"Aloita maailmanvalloitus monipuolisella ja ketterällä verkkokaupalla.",
						image: "webstores",
						path: "verkkokauppa-yritykselle",
					},
					{
						name: "Luotettava koti<br/>verkkosivustolle",
						description:
							"Meillä on turvallista ja hyvä olla. Jos sivustosi saisi valita, asuisivat ne Tuspen hoidossa.",
						image: "hosting",
						path: "yllapito",
					},
				],
				description:
					"Digitoimisto Tuspe Design toteuttaa käyttäjäystävälliset, visuaalisesti upeat, informatiiviset ja hakukoneoptimoidut kotisivut yritykselle ja urheiluseuralle. Erotu eduksesi!",
			};
		},
		head() {
			return {
				title: "Tuspe Design | Valloita nettimarkkinat laadukkailla ratkaisuilla",
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content:
							"Valloita nettimarkkinat laadukkailla ratkaisuilla!",
					},
					{
						hid: "home",
						name: "description",
						content: this.description,
					},
					{
						name: "twitter:description",
						property: "og:description",
						content: this.description,
					},
					{
						name: "twitter:image",
						property: "og:image",
						type: "image/jpg",
						size: "1200x630",
						content: "https://tuspe.com/images/tuspesimple.jpg",
					},
					{
						name: "twitter:image:alt",
						content:
							"Luomme kotisivuja ja verkkokauppoja, jotka tekevät sinun elämästä helppoa",
					},
				],
			};
		},
	};
</script>