<template>
	<div>
		<section id="mainDescription" class="grid gap-10 lg:grid-cols-2">
			<Photo
				:image="image"
				title="Aloita maailman valloitus Tuspen verkkokaupalla"
			/>
			<div id="description" class="grid">
				<div class="self-center max-w-prose mx-auto">
					<h1 class="text-title text-4xl font-norm mt-0 mb-8">
						Myyntiä 24/7 vaikka ympäri maailman
					</h1>

					<div class="text-primary">
						<p>
							Mitä jos pistetään pakettiin erittäin
							kustannustehokas verkkokauppa, joka taipuu
							yrityksesi tarpeiden mukaan ja joka on räätälöity
							juuri sinun yritykselle? Meiltä verkkokauppa täysin
							"Avaimet käteen"-palveluna, jossa teema, tuotteet ja
							kaikki sisältö ovat valmiina. Sinun tarvitsee vain
							haaveilla ja me toteutamme unelmasi.
						</p>
						<p>
							Olipa kyseessä meidän SaaS-palvelu ProcessWirelle
							tai WordPress-sivuston Woocommerce, saat aina
							mutkattoman ja toimivan ratkaisun.
						</p>
						<p>
							Ota rohkeasti yhteyttä ja tilaa ilmainen kartoitus
							nykyiseen verkkokauppaan tai suunnitelma uuteen.
						</p>
					</div>

					<div class="mt-6">
						<nuxt-link to="/yhteys" class="button"
							>Kauppa kuntoon!</nuxt-link
						>
					</div>
				</div>
			</div>
		</section>

		<section id="longDescription" class="max-w-prose mx-auto mt-12">
			<h2
				class="
					text-title text-4xl
					font-norm
					mb-8
					leading-tight
					text-center
				"
			>
				Kauppa, josta asiakkaasi lähtee ostoskassi mukanaan
			</h2>

			<div class="text-primary">
				<p>
					Verkkokaupassa teknisen toteutuksen lisäksi on hyvä
					huomioida visuaalisuus sekä tuotteiden kertova ja
					informatiivinen teksti. Tuotekuvilla ja videoilla on myös
					suuri merkitys, sillä asiakas ostaa tuotteen varmemmin, mitä
					enemmän ostopäätöstä vahvistavaa tietoa siitä on tarjolla.
					Tekstin pitäisi olla myös mahdollisimman uniikkia sisältäen
					sopivasti avainsanoja. Kyllä, mahdollisimman hyviä
					hakusanoja pitäisi olla otsikoissa, osoitteissa ja
					tuotetekstissä.
				</p>
				<p>
					Kuulostaako vaikealle? Ei hätää, meidän kautta on
					mahdollista tilata myös tuotekuvat ja hyvin optimoidut
					tekstit tuotesivuille ja muualle kauppaan. Miksi tuhlata
					omaa aikaa miettimiseen, jos voi jättää ongelmat
					ammattilaiselle ja keskittyä omaan ydinbisnekseen?
				</p>
				<p>
					Ennen projektin alkua määrittelemme tarkkaan mitkä ovat
					sinun unelmasi ja teemme tarjouksen sen perusteella.
					Tarvittaessa graafkko tekee teemasta luonnoksen minkä
					perusteella koodarit koodaavat siitä kauniin, nopean ja
					helposti päivitettävän kokonaisuuden. Emme käytä valmiita
					teemoja vaan räätälöimme koodin juuri sinulle ja olemme
					henkilökohtaisesti vastuussa sen toimivuudesta. Lopputulos
					on viisaasti rakennettu myyntikanava eikä vain teknisesti
					kaunis toteutus.
				</p>
				<p>
					Haluamme kannustaa sinua kansainväliseen kauppaan, joten
					meidän kauppaan rajoittamattomasti tuotteita ja kieliä ilman
					lisämaksua. Valmiit integraatiot löytyvät yleisimmille
					maksuliikenteen tarjoajille emmekä rajoita kuljetusyhtiöitä.
					Kysy meiltä parhaat kumppanit juuri sinun tarpeisiin.
				</p>
				<p>
					Maksatko liikaa nykyisestä verkkokaupasta? Onko verkkokauppa
					viimeisen päälle optimoitu vai voisiko jotain vielä
					parantaa? Alkaako vanha verkkokauppa olemaan liian kankea
					tulevaisuuden kasvulle? Tarvitsetko integraation? Tilaa
					ilmainen tilanteen kartoitus ja keskustellaan miten voisimme
					auttaa sinua myymään paremmin.
				</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "Suunnittelemme ja toteutamme verkkokaupan yrityksellesi",
				description:
					"Olipa kyseessä meidän SaaS-palvelu ProcessWirelle tai WordPress-sivuston Woocommerce, saat aina mutkattoman ja toimivan ratkaisun.",
				image: "webstore-page",
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
						hid: "store",
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