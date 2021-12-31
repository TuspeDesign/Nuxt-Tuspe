<template>
	<div>
		<nuxt-link
			id="logo"
			class="lg:absolute lg:top-0 lg:left-0 lg:z-40 pt-6 block w-32"
			to="/"
			rel="home"
			title="Tuspe Design Oy - Laadukkaat kotisivut ja verkkokaupat yritykselle"
		>
			<picture>
				<source srcset="/images/tuspe-logo.webp" type="image/webp" />
				<source srcset="/images/tuspe-logo.png" type="image/png" />
				<img src="/images/tuspe-logo.png" alt="Tuspe Design Oy" />
			</picture>
		</nuxt-link>

		<div class="text-center">
			<h1 class="text-4xl font-bold pt-10 pb-20 m-0 text-primary">
				Miksi tyytyä hyvään,<br />kun voi saada
				<nuxt-link
					to="/kotisivut-yritykselle"
					class="font-bold text-link"
					title="Kotisivut yritykelle - suunnittelua ja toteutusta suurella sydämellä"
					>parasta</nuxt-link
				>?
			</h1>
		</div>

		<ul class="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 m-0 p-0">
			<li
				v-for="(e, i) in menu"
				:key="i"
				class="block lg:transform lg:hover:scale-110 lg:duration-300"
			>
				<nuxt-link
					:to="e.path"
					class="
						block
						text-primary
						max-w-xl
						mx-auto
						relative
						no-underline
					"
				>
					<figure class="block m-0">
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
								class="
									rounded-2xl
									shadow-image
									block
									w-full
									h-auto
								"
								width="436"
								height="556"
							/>
						</picture>

						<figcaption
							class="
								md:absolute md:-top-8 md:-left-5
								2xl:-left-8
								md:w-80
								lg:p-6
								sm:rounded-2xl
								p-4
								text-center
								bg-box
								box-shadow
							"
						>
							<h2 class="text-lg font-bold m-0" v-html="e.name" />
							<div class="description mt-2 text-sm">
								{{ e.description }}
							</div>
						</figcaption>
					</figure>
				</nuxt-link>
			</li>
		</ul>

		<div id="contactMe" class="text-center mt-12">
			<h2 class="text-4xl font-bold text-title">
				Laadukkaat verkkosivut<br />ovat hyvää asiakaspalvelua
			</h2>

			<p class="text-base mt-5 text-primary">
				Kehitä liiketoimintaasi tilaamalla uudet kotisivut yrityksellesi
				tai uudista nykyiset sivusi.<br />
				Ota yhteyttä, saat ilmaisen kartoituksen verkkosivustosta ja
				ehdotuksen,<br />
				miten voisimme parantaa myyntiänne.
			</p>

			<p>
				<nuxt-link
					class="button"
					to="/yhteys"
					title="Ota rohkeasti yhteyttä ja tutustutaan!"
				>
					Ilmainen kartoitus!
				</nuxt-link>
			</p>
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