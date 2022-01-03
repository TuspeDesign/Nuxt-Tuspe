<template>
	<div>
		<section id="mainDescription" class="grid gap-10 lg:grid-cols-2">
			<Photo
				:image="image"
				title="Kotisivut yritykselle ketterästi ja ammattitaidolla"
			/>
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
							Tehdäänkö asioista helppoa ja sujuvaa?
							Verkkoviidakossa suunnistamisen ei tarvitse olla
							hankalaa ja aikaa vievää. Jos haluat yrityksesi koko
							verkkonäkyvyyden kerralla kuntoon, olet juuri nyt
							oikeassa osoitteessa.
						</p>
						<p>
							Kokemus, aito into ja asiakkaiden toimeksiannot
							sydämellä tehtynä luovat tekemisemme moottorin. Emme
							lupaa kuuta taivaalta, mutta meillä kotisivusi ja
							verkkokauppasi suunnittelu ja toteutus ovat
							luotettavissa käsissä.
						</p>
						<p>Paiskataanko kättä ja laitetaan hihat heilumaan?</p>
					</div>

					<div class="mt-10 text-center">
						<nuxt-link to="/yhteys" class="button"
							>Luodaan fiiliksiä!</nuxt-link
						>
					</div>
				</div>
			</div>
		</section>

		<section id="longDescription" class="py-8 mt-8">
			<div class="max-w-prose mx-auto">
				<h2 class="text-title text-4xl font-norm mb-8 mt-0 text-center">
					Avaimet käteen
				</h2>

				<div class="text-primary">
					<p>
						Se tunne, kun jäät koukkuun hyvään kirjaan tai sarjaan..
						Mitäs jos luotaisiin sama fiilis asiakkaallesi
						kotisivuistasi?
					</p>
					<p>
						Olipa kyseessä kotisivut tai
						<nuxt-link
							class="text-link"
							to="/verkkokauppa-yritykselle"
							title="Myyntiä 24/7 vaikka ympäri maailman"
							>verkkokauppa yrityksellesi</nuxt-link
						>, saat meiltä avaimet käteen-ratkaisun. Lopputulos ei
						ole pelkkä teknisesti kaunis toteutus vaan viisaasti
						rakennettu myyntikanava, jonka sisältö ja ulkoasu
						puhuttelevat asiakkaitasi juuri oikealla tavalla.
						Luodaan sinun yrityksen näköinen kotisivu.
					</p>
					<p>
						Kotisivuilla on suuri merkitys edelleen tämän päivän
						digimaailmassa. Kotisivu on alusta, jossa kerrot
						yrityksesi tarinan ja saat asiakkaasi kiinnostumaan
						tuotteistasi ja palveluistasi. Se on myyntikanava ja
						yrityksesi kotipaikka verkossa. Somekanavat voivat tukea
						myyntiä ja näkyvyyttä, mutta omat kotisivut tiivistää
						kaiken yhteen paikkaan.
					</p>
					<p>
						Kun mietit yhteistyökumppania kotisivujesi tekijälle,
						huomio suunnittelussa, toteutuksessa ja hinnassa, mitä
						kaikkea todellisuudessa saat:
					</p>

					<ol class="my-6 mx-0 p-0">
						<li>
							Tarvitsetko vain teknisen ratkaisun, jonne tuotat
							itse sisällön?
						</li>
						<li>
							Mitä analytiikkatyökaluja tarvitaan, jotta
							asiakkaasi ja sidosryhmäsi löytävät yrityksesi
							tuotteet ja palvelut?
						</li>
						<li>
							Mikä on
							<nuxt-link
								class="text-link"
								to="/hakukoneoptimointi"
								title="Mitä hakukoneoptimointi tarkoittaa ja mikä on avainsanatutkimus?"
								>avainsanatutkimus</nuxt-link
							>? Erittäin tärkeä sisällön suunnittelun lähtökohta,
							jossa kotisivujesi kertova teksti optimoidaan niin,
							että asiakkaasi löytävät hakemillaan sanoilla
							hakukoneiden kautta juuri sinun yrityksesi.
						</li>
						<li>
							Onko kotisivujen päivittäminen vaikeaa? Ei ole ja
							kyllä osaat, kun asiat kerrotaan ja opastetaan
							ymmärrettävästi sinulle kuten me teemme.
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
							puolestasi, jonka jälkeen verkkotunnuksen hallinta
							on joko sinun nimipalvelimilla tai meidän
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
						Et jää yksin näiden kysymysten kanssa vaan me olemme
						valmiit auttamaan sinut ylitse ongelmien. Laske alustava
						tarjous kotisivuillesi sen mukaan, miten kattavan
						kokonaisuuden haluat.
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
				title: "Suunnittelua ja toteutusta suurella sydämellä",
				description:
					"Kotisivut ovat pelivälineesi digikentällä. Hyvin rakennetut ja toimivat sivut ovat ilo silmälle, aperitiivi ostohalulle sekä maali asiakkaan bisnekseen.",
				image: "websites-page",
			};
		},
		head() {
			return {
				title: "Kotisivut yritykselle ketterästi ja ammattitaidolla | Tuspe Design",
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.title,
					},
					{
						hid: "websites",
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