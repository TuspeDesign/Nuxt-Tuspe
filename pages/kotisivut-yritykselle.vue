<template>
	<div>
		<PhotoHero
			titleSmall="Räätälöity kokonaisuus"
			titleBig="Kotisivut yritykselle ketterästi ja ammattitaidolla"
			description="Kotisivut ovat pelivälineesi digikentällä. Hyvin rakennetut ja toimivat sivut ovat ilo silmälle, aperitiivi ostohalulle sekä maali yrityksen bisnekseen."
			alt="Kotisivut yritykselle ketterästi ja ammattitaidolla"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
			contact="Luodaan fiiliksiä!"
			:metaDescription="title"
		/>

		<div id="info" class="max-w-prose mx-auto px-4 py-10 md:py-14">
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
				{{ title }}
			</h2>
			<div class="text-content">
				<p>
					Tehdäänkö asioista helppoa ja sujuvaa? Verkkoviidakossa
					suunnistamisen ei tarvitse olla hankalaa ja aikaa vievää.
					Jos haluat yrityksesi koko verkkonäkyvyyden kerralla
					kuntoon, olet juuri nyt oikeassa osoitteessa.
				</p>

				<p>
					Se tunne, kun jäät koukkuun hyvään kirjaan tai sarjaan..
					Mitäs jos luotaisiin sama fiilis asiakkaallesi
					kotisivuistasi?
				</p>

				<p>
					Kokemus, aito into ja asiakkaiden toimeksiannot sydämellä
					tehtynä luovat tekemisemme moottorin. Emme lupaa kuuta
					taivaalta, mutta meillä kotisivusi ja verkkokauppasi
					suunnittelu ja toteutus ovat luotettavissa käsissä.
				</p>

				<p>
					Olipa kyseessä kotisivut tai
					<nuxt-link
						class="text-link"
						to="/verkkokauppa-yritykselle"
						title="Myyntiä 24/7 vaikka ympäri maailman"
						>verkkokauppa yrityksellesi</nuxt-link
					>, saat meiltä avaimet käteen-ratkaisun. Lopputulos ei ole
					pelkkä teknisesti kaunis toteutus vaan viisaasti rakennettu
					myyntikanava, jonka sisältö ja ulkoasu puhuttelevat
					asiakkaitasi juuri oikealla tavalla. Luodaan sinun yrityksen
					näköinen kotisivu.
				</p>

				<p>
					Kotisivuilla on suuri merkitys edelleen tämän päivän
					digimaailmassa. Kotisivu on alusta, jossa kerrot yrityksesi
					tarinan ja saat asiakkaasi kiinnostumaan tuotteistasi ja
					palveluistasi. Se on myyntikanava ja yrityksesi kotipaikka
					verkossa. Somekanavat voivat tukea myyntiä ja näkyvyyttä,
					mutta omat kotisivut tiivistää kaiken yhteen paikkaan.
				</p>
				<p>
					Kun mietit yhteistyökumppania kotisivujesi tekijälle, huomio
					suunnittelussa, toteutuksessa ja hinnassa, mitä kaikkea
					todellisuudessa saat:
				</p>

				<ol class="my-6 mx-0 p-0">
					<li>
						Tarvitsetko vain teknisen ratkaisun, jonne tuotat itse
						sisällön?
					</li>
					<li>
						Mitä analytiikkatyökaluja tarvitaan, jotta asiakkaasi ja
						sidosryhmäsi löytävät yrityksesi tuotteet ja palvelut?
					</li>
					<li>
						Mikä on
						<nuxt-link
							class="text-link"
							to="/hakukoneoptimointi"
							title="Mitä hakukoneoptimointi tarkoittaa ja mikä on avainsanatutkimus?"
							>avainsanatutkimus</nuxt-link
						>? Erittäin tärkeä sisällön suunnittelun lähtökohta,
						jossa kotisivujesi kertova teksti optimoidaan niin, että
						asiakkaasi löytävät hakemillaan sanoilla hakukoneiden
						kautta juuri sinun yrityksesi.
					</li>
					<li>
						Onko kotisivujen päivittäminen vaikeaa? Ei ole ja kyllä
						osaat, kun asiat kerrotaan ja opastetaan ymmärrettävästi
						sinulle kuten me teemme.
					</li>
					<li>
						Miten ja mistä hankkia
						<nuxt-link
							class="text-link"
							to="/verkkotunnus"
							title="Verkkotunnus eli domain on sivujesi nimi ja osoite"
							>verkkotunnus</nuxt-link
						>
						(domain)? Ei hätää, me hoidamme tarvittaessa kaiken
						puolestasi, jonka jälkeen verkkotunnuksen hallinta on
						joko sinun nimipalvelimilla tai meidän
						lisämaksuttomilla. Me emme veloita ryöstöhintoja
						verkkotunnuksen vuosimaksuista.
					</li>
					<li>
						Millaisia
						<nuxt-link
							class="text-link"
							to="/yllapito"
							title="Verkkosivujen luotettavat ylläpitopalvelut"
							>ylläpitopalveluita</nuxt-link
						>
						tarvitsen?
					</li>
				</ol>

				<p>
					Ei huolta, et jää yksin näiden kysymysten kanssa vaan me
					olemme valmiit auttamaan sinut ylitse haasteiden.
				</p>

				<p>Paiskataanko kättä ja laitetaan hihat heilumaan?</p>

				<Contact />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "Ei vain ulkoisesti kaunis ratkaisu vaan toimiva myyntikanava. Sinä unelmoit, me toteutamme.",
				linkLeft: {
					name: "Laadukkaat verkkosivut ovat hyvää asiakaspalvelua",
					path: "",
				},
				linkRight: {
					name: "Kauppa, josta asiakkaasi lähtee ostoskassi mukanaan",
					path: "verkkokauppa-yritykselle",
				},
			};
		},
	};
</script>

<style scoped>
	ol li + li {
		margin-top: 10px;
	}
</style>