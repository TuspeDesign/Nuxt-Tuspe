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
							Verkkotunnus eli domain on sivujesi nimi ja osoite.
							Jos sinulla ei vielä ole verkkotunnusta, olet
							päätynyt oikeaan paikkaan. Meidän kauttamme voit
							varata erittäin kilpailukykyisellä hinnalla minkä
							tahansa päätteen. Olemme Traficomin jälleenmyyjä eli
							myös fi-tunnukset.
						</p>
						<p>
							Meiltä saat verkkotunnuksen myös ilman muita
							sopimuksia sekä ilmaiset nimipalvelimet tarvittaessa
							sekä voimme siirtää verkkotunnuksen nykyiseltä
							palveluntarjoajalta meille ilman lisäkustannuksia.
						</p>
						<p>
							Olipa tarpeesi mikä tahansa, me hoidamme sen
							puolestasi.
						</p>
					</div>

					<div class="mt-6 text-center">
						<nuxt-link to="/yhteys" class="button"
							>Nimet kuntoon!</nuxt-link
						>
					</div>
				</div>
			</div>
		</section>

		<section id="longDescription" class="py-8 mt-8">
			<div class="max-w-prose mx-auto">
				<h2 class="text-title text-4xl font-norm mb-8 mt-0 text-center">
					Huolehdimme kaiken valmiiksi
				</h2>

				<div class="text-primary">
					<ul class="mt-0 mb-6 p-0">
						<li>
							Verkkotunnuksen rekisteröinti sinun tiedoillasi.
						</li>
						<li>
							Uusimme vuosittain verkkotunnuksen automaattisesti.
						</li>
						<li>
							Ilmaiset nimipalvelimet tarvittaessa (<a
								class="text-link"
								href="https://www.cloudflare.com/"
								title="Suojaa palvelusi Cloudflaren avulla"
								target="_blank"
								hreflang="en"
								>Cloudflare</a
							>).
						</li>
						<li>Sähköpostiasiat kuntoon.</li>
						<li>
							Verkkotunnuksien rekisteröinnissä mahdollisimman
							halvat hinnat sekä mahdollisesti muita rahan
							arvoisia vinkkejä tulevaisuudelle.
						</li>
					</ul>

					<p>
						Emme usko määräaikaisiin sopimuksiin vaan verkkotunnus
						on aina sinun eli voit koska tahansa siirtää
						verkkotunnuksen meiltä toiselle palveluntarjoajalle tai
						vaihtaa haluamasi nimipalvelimet siihen.
					</p>
					<p>
						Hoidamme tarvittaessa myös yrityksesi sähköpostipalvelut
						kuntoon. Meiltä onnistuvat omalla verkkotunnuksella
						ilmaiset Gmail tai Outlook sekä maksulliset
						<a
							class="text-link"
							href="https://gsuite.google.fi/intl/fi/"
							title="Tuttu ja turvallinen Gmail yritysten tarpeisiin räätälöitynä."
							hreflang="fi"
							>GSuite</a
						>
						tai
						<a
							class="text-link"
							href="https://www.office.com/?omkt=fi-FI"
							title="Sähköposti ja Office-sovellusten Premium-versiot"
							hreflang="fi"
							>Office 365</a
						>. Myös käyttöopastusta.
					</p>
					<p>
						Riippumatta siitä kuka huolehtii kotisivujen
						hyvinvoinnista, suosittelemme käyttämään maksutonta
						Cloudflare-palvelua (mm. nimipalvelut, kotisivujen
						suojaus, parempi välimuisti), koska sen avulla on
						mahdollista nopeuttaa huomattavasti kansainvälistä
						liikennettä sivustolla sekä suojata yrityksen kotisivut
						paremmin mahdollisilta palvelunestohyökkäyksiltä.
						Cloudflarella on palvelimia ympäri maailman, joten jos
						sivustosi käyttää heidän välimuistia vierailija
						vierailee todellisuudessa lähimmällä serverillä mikä
						saattaa vähentää huomattavasti latausaikaa.
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
				title: "Verkkotunnukset",
				titleAlt: "Parannetaan yhdessä sivustosi näkyvyyttä hakukoneissa",
				description:
					"Meidän kauttamme voit varata erittäin kilpailukykyisellä hinnalla minkä tahansa päätteen. Olemme Traficomin jälleenmyyjä.",
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
						content: this.titleAlt,
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
						content: this.titleAlt,
					},
				],
			};
		},
	};
</script>