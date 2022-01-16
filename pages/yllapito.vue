<template>
	<div>
		<PhotoHero
			titleSmall="Koti nettisivuille"
			titleBig="Verkkosivujen luotettavat ylläpitopalvelut"
			description="Älä turhaan stressaa verkkosivuston toimivuudesta tai varmuuskopioista vaan keskity huoletta omaan ydinbisnekseen."
			:alt="title"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
			contact="Parasta pakettiin"
		/>

		<div id="info" class="max-w-prose mx-auto px-6 py-10 md:py-14">
			<div class="text-content">
				<p>
					Kaikki data on turvassa kahdella 24/7 monitoroidulla
					palvelimella ja voimme tarvittaessa palauttaa sivuston
					nopeasti varmuuskopiosta. Reiluina tyyppeinä emme veloita
					jokaisesta pienistä muutoksesta tai päivityksestä erikseen
					vaan semmoiset kuuluvat ylläpitoon.
				</p>

				<p>
					Tämän kaiken saat 15€:n kuukausimaksulla (18.60€ sis. ALV).
					Turvallisuus ja toimivuus ovat arvokkaita asioista, mutta
					niiden toteutumisen ei tarvitse olla kallista kukkarollesi.
					Hintamme ovat pysyvästi edulliset.
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
						Aina uusimpia paketteja ja suojausia käyttävä palvelin
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
					Palvelimilla käytössä peilaava RAID-levy sekä palvelimien
					tarjoaja,
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
					tarjoamaa nimipalvelua verkkotunnuksille omien turvallisten
					palvelimiemme lisäksi, koska heillä on palvelimia ympäri
					maailman runkoverkon tärkeimmissä paikoissa ja nimipalvelun
					avulla on mahdollista välimuistittaa eli kopioida meidän
					palvelimella oleva kotisivu heidän verkkoon ja näin vähentää
					vierailijan sivun latausaikaa huomattavasti. Heidän avullaan
					myös mahdollista suojata sivusto paremmin mahdollisilta
					palvelunestohyökkäyksiltä.
				</p>
				<p>
					Liian hyvää, mutta totta. Kaikki nämä palvelut sekä tekninen
					osaamisemme vain puhelinsoiton päässä. Siirretään palvelusi
					Tuspen hotelliin.
				</p>
				<Contact />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				linkLeft: {
					name: "Monipuolinen ja helposti päivitettävä urheilusaitti",
					path: "urheilu",
				},
				linkRight: {
					name: "Parannetaan sivustosi näkyvyyttä hakukoneissa",
					path: "hakukoneoptimointi",
				},
			};
		},
	};
</script>