<template>
	<div>
		<div class="pt-4 px-6">
			<div class="text-center">
				<h1 class="text-4xl font-bold pb-10 md:pb-16 m-0 text-primary">
					Miksi tyytyä hyvään,<br />kun voi saada
					<nuxt-link
						to="/kotisivut-yritykselle"
						class="font-bold text-link"
						title="Kotisivut yritykelle - suunnittelua ja toteutusta suurella sydämellä"
						>parasta</nuxt-link
					>?
				</h1>
			</div>

			<ul
				class="
					grid
					lg:grid-cols-2
					xl:grid-cols-3
					gap-4
					md:gap-10
					m-0
					p-0
				"
			>
				<li
					v-for="(e, i) in menu"
					:key="i"
					class="
						block
						lg:transform lg:hover:scale-110 lg:duration-300
					"
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
									type="image/jpeg"
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
									md:absolute md:-top-8 md:-left-4
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
								<h2
									class="text-xl font-bold m-0"
									v-html="e.name"
								/>
								<div class="description mt-2 text-sm">
									{{ e.description }}
								</div>
							</figcaption>
						</figure>
					</nuxt-link>
				</li>
			</ul>
		</div>

		<div id="quality" class="text-center py-6 mt-6 px-6">
			<h2 class="text-4xl font-bold text-title">
				Laadukkaat verkkosivut<br />ovat hyvää asiakaspalvelua
			</h2>

			<p class="text-base mt-5 text-primary">
				Kehitä liiketoimintaasi tilaamalla uudet kotisivut yrityksellesi
				tai uudista nykyiset sivusi.<br />
				Ota yhteyttä, saat ilmaisen kartoituksen verkkosivustosta ja
				ehdotuksen,<br />
				miten voisimme parantaa myyntiänne. Kartoitus ei ole sitova.
			</p>

			<h3 class="text-title font-bold text-xl mt-6 mb-0">
				Tuspe Design Oy
			</h3>
			<p class="mt-2 text-primary">
				<span class="block">Petäjäpolku 11-15, 37130 Nokia</span>
				<span class="block">3129423-2</span>
			</p>

			<div
				class="
					grid
					sm:grid-cols-2
					gap-2
					md:gap-6
					max-w-md
					mx-auto
					mt-4
					md:mt-0
				"
			>
				<a
					class="text-link grid h-12 md:text-right bg-primary"
					href="tel:+358407746121"
					rel="nofollow"
				>
					<span class="self-center">+358 40 774 6121</span>
				</a>
				<a
					class="text-link grid h-12 md:text-left bg-primary"
					href="mailto:moro@tuspe.com"
					rel="nofollow"
				>
					<span class="self-center">moro@tuspe.com</span>
				</a>
			</div>
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
						name: "twitter:image:alt",
						content:
							"Luomme kotisivuja ja verkkokauppoja, jotka tekevät sinun elämästä helppoa",
					},
					{
						name: "twitter:image",
						property: "og:image",
						type: "image/jpeg",
						content: "https://tuspe.com/images/tuspesimple.jpg",
					},
					{
						property: "og:image:secure_url",
						type: "image/jpeg",
						content: "https://tuspe.com/images/tuspesimple.jpg",
					},
					{
						property: "og:image:width",
						content: "1200",
					},
					{
						property: "og:image:height",
						content: "630",
					},
				],
				link: [
					{
						rel: "me",
						type: "text/html",
						href: "https://timoanttila.com",
						title: "Yrittäjän henkilökohtainen sivusto",
					},
					{
						rel: "me",
						type: "application/atom+xml",
						href: "https://github.com/TuspeDesign/Nuxt-Tuspe/commits/master.atom",
						title: "Uusimmat muutokset projektiin Githubissa",
					},
				],
			};
		},
	};
</script>