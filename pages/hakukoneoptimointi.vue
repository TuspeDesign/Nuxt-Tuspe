<template>
	<div>
		<section id="mainDescription" class="grid gap-10 lg:grid-cols-2">
			<Photo :image="image" :title="title" />
			<div id="description" class="grid">
				<div class="self-center max-w-prose mx-auto">
					<h1
						class="text-title text-4xl font-norm mb-8 leading-tight"
					>
						{{ title }}
					</h1>

					<div class="text-primary">
						<p>
							Meidän kaikki sivustomme on teknisesti
							automaattisesti optimoituja parhaalla mahdollisella
							tavalla, samalla tavalla kuin esim. WordPress
							tarjoaa siihen tarkoitetuilla lisäosillaan.
							Valitettavasti hakukoneoptimointi on paljon muutakin
							kuin pelkkää teknistä osaamista. SISÄLTÖ ON KINGI!
						</p>
						<p>
							Otsikoissa ja sisältöteksteissä tulisi olla sopiva
							määrä hakusanoja, avainsanoja, luomassa parempia
							hakutuloksia sekä niiden tulisi olla mahdollisimman
							uniikkeja. Verkkokaupan tuotteet voivat olla samoja
							kuin kymmenillä tai sadoilla kilpailijoilla, joten
							miten juuri sinun tuotteesi erottautuvat joukosta?
						</p>
					</div>

					<div class="mt-6">
						<nuxt-link to="/yhteys" class="button"
							>Hakukoneita viettelemään!</nuxt-link
						>
					</div>
				</div>
			</div>
		</section>

		<section id="longDescription" class="max-w-prose mx-auto px-6 py-12">
			<h2 class="text-title text-4xl font-norm mb-8 text-center">
				Mitä hakukoneoptimointi tarkoittaa ja mikä on avainsanatutkimus?
			</h2>

			<div class="text-primary">
				<p>
					Hakukoneoptimointi (SEO) on sivuston näkyvyyden parantamista
					hakukonetuloksissa orgaanisen, eli maksuttoman, liikenteen
					osalta. Hakukoneoptimointi on kustannustehokasta, sillä
					hyvin optimoitu sivusto löytyy hakukoneista oikeilla
					hakusanoilla riittävän korkealta orgaanisesti ja se saa myös
					maksetussa hakukonemainonnassa paremmat laatupisteet.
				</p>
				<p>
					Hakukoneoptimointiin kiinteästi liittyvä avainsanatutkimus
					kannattaa tehdä jo kotisivujen ja verkkokaupan
					suunnitteluvaiheessa. Avainsanatutkimuksella selvitetään,
					miten paljon hakuja tehdään tietyillä sanoilla yrityksesi
					toimialalla ja tuotteisiin tai palveluihin liittyen. Kun
					volyymiltaan suurimmat avainsanat on selvitetty, upotetaan
					ne kotisivujesi tai verkkokauppasi sisältöteksteihin. Näin
					mahdollistetaan kotisivujesi sekä sen alasivujen löytyminen
					potentiaalisille asiakkaillesi.
				</p>
				<p>
					Vaikka kotisivusi ja verkkokauppasi olisivat visuaalisesti
					ja rakenteeltaan upeat ja lyömättömät, eivät asiakkaasi
					välttämättä löydä sivuja, jollei niitä ole
					hakukoneoptimoitu.
				</p>
				<p>
					Onko sinulla jo valmiit kotisivut tai verkkokauppa, joiden
					sisältöä olisi syytä tarkistaa? Kysy kattavaa analyysia
					sivujesi nykyisestä tilanteesta. Tarkistetaan, ovatko sivusi
					hakukoneoptimoidut ja miten sivujen tehokkuutta voisi
					parantaa. Saat myös tekniset parannukset jo olemassa olevaan
					sivustoon.
				</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hakukoneoptimointi (SEO)",
				description:
					"Hakukoneoptimointi (SEO) on sivuston näkyvyyden parantamista hakukonetuloksissa orgaanisen, eli maksuttoman, liikenteen osalta. Kisataan yhdessä ykköseksi!",
				image: "websites-page",
			};
		},
		head() {
			return {
				title: this.title + " | Tuspe Design",
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content:
							"Parannetaan yhdessä sivustosi näkyvyyttä hakukoneissa",
					},
					{
						hid: "seo",
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
						size: "720x900",
						content: "https://tuspe.com/images/" + this.image + ".jpg",
					},
				],
			};
		},
	};
</script>