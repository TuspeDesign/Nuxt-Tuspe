<template>
	<div>
		<section id="mainDescription" class="grid gap-10 lg:grid-cols-2">
			<Photo :image="image" :title="title" />
			<div id="description" class="grid">
				<div class="self-center max-w-prose mx-auto">
					<h1
						class="
							text-title text-4xl
							font-bold
							mb-8
							mt-0
							text-center
						"
					>
						{{ title }}
					</h1>

					<div class="text-primary">
						<p>
							Kun verkkosivuillesi on luotettava ylläpitopalvelu,
							voit varmistua siitä, että sivut toimivat, niistä on
							varmuuskopiot ja tarvittaessa saat nopeasti pienet
							tai suuremmatkin sivuston muutokset niille. Älä
							turhaan stressaa vaan keskity huoletta omaan
							ydinbisnekseen.
						</p>
						<p>
							Kaikki data on turvassa kahdella 24/7 monitoroidulla
							palvelimella ja voimme tarvittaessa palauttaa
							sivuston nopeasti varmuuskopiosta. Reiluina
							tyyppeinä emme veloita jokaisesta pienistä
							muutoksesta tai päivityksestä erikseen vaan
							semmoiset kuuluvat ylläpitoon.
						</p>
						<p>Tsekkaa alta mitä kaikkea pakettiin kuuluu.</p>
					</div>

					<div class="mt-6 text-center">
						<nuxt-link to="/yhteys" class="button"
							>Parasta pakettiin!</nuxt-link
						>
					</div>
				</div>
			</div>
		</section>

		<section id="longDescription" class="py-8 mt-8">
			<div class="max-w-prose mx-auto">
				<h2 class="text-title text-4xl font-norm mb-8 mt-0 text-center">
					Kaikki tarvittavat palvelut
				</h2>

				<div class="text-primary">
					<p>
						Tämän kaiken saat 15€:n kuukausimaksulla (18.60€ sis.
						ALV). Turvallisuus ja toimivuus ovat arvokkaita
						asioista, mutta niiden toteutumisen ei tarvitse olla
						kallista kukkarollesi. Hintamme ovat pysyvästi
						edulliset.
					</p>
					<ul class="mb-0 mt-6 p-0">
						<li>Rajoittamaton ja nopea liikenne</li>
						<li>Aina sopivasti tilaa kotisivuille</li>
						<li>Varmuuskopiointi kahdesti päivässä</li>
						<li>Palautus aikaisempaan versioon varmuuskopiosta</li>
						<li>Pienet päivitykset kotisivuille (alle 15 min)</li>
						<li>SSL-sertifikaatti (https)</li>
						<li>
							Verkkokauppaan kehitetyt uudet ominaisuudet ja
							päivitykset.
						</li>
						<li>Alennetut hinnat uusille projekteille.</li>
						<li>
							Sisällönhallintaohjelmien ja niiden moduulien
							päivitykset
						</li>
						<li>
							Aina uusimpia paketteja ja suojausia käyttävä
							palvelin
						</li>
						<li>
							Uusi
							<nuxt-link class="text-link" to="/verkkotunnukset"
								>verkkotunnus</nuxt-link
							>
							(domain) ensimmäiseksi vuodeksi (esim. fi tai com)
						</li>
						<li>Tarvittaessa nimipalvelut verkkotunnukselle (2)</li>
						<li>Tekninen tuki + hyvät vinkit tulevaisuudelle</li>
					</ul>

					<p>
						Hoidamme tarvittaessa myös yrityksesi sähköpostipalvelut
						kuntoon.<br />Meiltä onnistuvat omalla verkkotunnuksella
						ilmaiset Gmail tai Outlook sekä maksulliset
						<a
							class="text-link"
							href="https://gsuite.google.fi/intl/fi/pricing.html"
							target="_blank"
							rel="noopener"
							>Google GSuite</a
						>
						tai
						<a
							class="text-link"
							href="https://www.microsoft.com/fi-fi/microsoft-365/enterprise/compare-office-365-plans"
							target="_blank"
							rel="noopener"
							>Microsoft Office 365</a
						>. Myös käyttöopastusta.
					</p>
					<p>
						Palvelimilla käytössä peilaava RAID-levy sekä
						palvelimien tarjoaja,
						<a
							class="text-link"
							href="https://www.ovh-hosting.fi/"
							target="_blank"
							rel="noopener"
							hreflang="fi"
							>OVH</a
						>, vamistaa 24/7 palvelimien laitteiston toimivuuden
						päivystävällä teknisellä tiimillä. He reagoivat heti jos
						palvelimissa havaitaan ongelmia.
					</p>
					<p>
						Suosimme ilmaista
						<a
							class="text-link"
							href="https://www.cloudflare.com/"
							title="Suojaa palvelusi Cloudflaren avulla"
							target="_blank"
							rel="noopener"
							hreflang="en"
							>Cloudflaren</a
						>
						tarjoamaa nimipalvelua verkkotunnuksille omien
						turvallisten palvelimiemme lisäksi, koska heillä on
						palvelimia ympäri maailman runkoverkon tärkeimmissä
						paikoissa ja nimipalvelun avulla on mahdollista
						välimuistittaa eli kopioida meidän palvelimella oleva
						kotisivu heidän verkkoon ja näin vähentää vierailijan
						sivun latausaikaa huomattavasti. Heidän avullaan myös
						mahdollista suojata sivusto paremmin mahdollisilta
						palvelunestohyökkäyksiltä.
					</p>
					<p>
						Liian hyvää, mutta totta. Kaikki nämä palvelut sekä
						tekninen osaamisemme vain puhelinsoiton päässä.
						Siirretään palvelusi Tuspen hotelliin.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "Verkkosivujen luotettavat ylläpitopalvelut",
				description:
					"Älä turhaan stressaa verkkosivuston ylläpidosta tai varmuuskopioinnista vaan keskity huoletta omaan ydinbisnekseen. Luotettavat ylläpitopalvelut Tuspelta.",
				image: "hosting-page",
			};
		},
		head() {
			return {
				title: this.title + " | Tuspe Design",
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.title,
					},
					{
						hid: "domain",
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
						type: "image/jpeg",
						content: "https://tuspe.com/images/" + this.image + ".jpg",
					},
					{
						property: "og:image:secure_url",
						type: "image/jpeg",
						content: "https://tuspe.com/images/" + this.image + ".jpg",
					},
					{
						property: "og:image:width",
						content: "720",
					},
					{
						property: "og:image:height",
						content: "900",
					},
					{
						name: "twitter:image:alt",
						content: this.title,
					},
				],
			};
		},
	};
</script>