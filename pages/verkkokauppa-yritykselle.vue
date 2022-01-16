<template>
	<div>
		<PhotoHero
			titleSmall="Kauppa auki 24/7"
			titleBig="Valloita maailman monipuolisella verkkokaupalla"
			description="Mitä jos pistetään pakettiin kustannustehokas verkkokauppa, joka taipuu yrityksesi tarpeiden mukaan ja joka on räätälöity juuri sinun yritykselle? Sinun tarvitsee vain haaveilla ja me toteutamme unelmasi."
			alt="Kotisivut yritykselle ketterästi ja ammattitaidolla"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
			contact="Kauppa kuntoon!"
		/>

		<div id="info" class="max-w-prose mx-auto px-6 py-10 md:py-14">
			<h2
				class="
					text-xl
					font-bold
					text-title
					leading-snug
					mt-0
					mb-6
					text-center
				"
			>
				Kauppa, josta asiakkaasi lähtee ostoskassi mukanaan
			</h2>
			<div class="text-content">
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

				<p>
					Olipa kyseessä meidän SaaS-palvelu ProcessWirelle tai
					WordPress-sivuston Woocommerce, saat aina mutkattoman ja
					toimivan ratkaisun.
				</p>
				<p>
					Ota rohkeasti yhteyttä ja tilaa ilmainen kartoitus nykyiseen
					verkkokauppaan tai suunnitelma uuteen.
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
					name: "Laadukkaat verkkosivut ovat hyvää asiakaspalvelua",
					path: "kotisivut-yritykselle",
				},
				linkRight: {
					name: "Monipuolinen ja helposti päivitettävä urheilusaitti",
					path: "urheilu",
				},
			};
		},
	};
</script>