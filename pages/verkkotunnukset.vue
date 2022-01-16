<template>
	<div>
		<PhotoHero
			titleSmall="Verkkotunnukset"
			titleBig="Verkkotunnuksen rekisteröinti ja uusiminen puolestasi"
			description="Meidän kauttamme voit varata erittäin kilpailukykyisellä hinnalla minkä tahansa päätteen. Olemme Traficomin jälleenmyyjä."
			alt="Rekisteröimme ja uusimme verkkotunnukset yrityksen puolesta"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
			contact="Nimet kuntoon!"
		/>

		<div id="info" class="max-w-prose mx-auto px-6 py-10 md:py-14">
			<div class="text-content">
				<p>
					Verkkotunnus eli domain on sivujesi nimi ja osoite. Jos
					sinulla ei vielä ole verkkotunnusta, olet päätynyt oikeaan
					paikkaan. Meidän kauttamme voit varata erittäin
					kilpailukykyisellä hinnalla minkä tahansa päätteen. Olemme
					Traficomin jälleenmyyjä eli myös fi-tunnukset.
				</p>
				<p>
					Meiltä saat verkkotunnuksen myös ilman muita sopimuksia sekä
					ilmaiset nimipalvelimet tarvittaessa sekä voimme siirtää
					verkkotunnuksen nykyiseltä palveluntarjoajalta meille ilman
					lisäkustannuksia.
				</p>
				<p>Olipa tarpeesi mikä tahansa, me hoidamme sen puolestasi.</p>

				<ul class="mt-0 mb-6 p-0">
					<li>Verkkotunnuksen rekisteröinti sinun tiedoillasi.</li>
					<li>Uusimme vuosittain verkkotunnuksen automaattisesti.</li>
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
						Verkkotunnuksien rekisteröinnissä mahdollisimman halvat
						hinnat sekä mahdollisesti muita rahan arvoisia vinkkejä
						tulevaisuudelle.
					</li>
				</ul>

				<p>
					Emme usko määräaikaisiin sopimuksiin vaan verkkotunnus on
					aina sinun eli voit koska tahansa siirtää verkkotunnuksen
					meiltä toiselle palveluntarjoajalle tai vaihtaa haluamasi
					nimipalvelimet siihen.
				</p>
				<p>
					Hoidamme tarvittaessa myös yrityksesi sähköpostipalvelut
					kuntoon. Meiltä onnistuvat omalla verkkotunnuksella ilmaiset
					Gmail tai Outlook sekä maksulliset
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
					Riippumatta siitä kuka huolehtii kotisivujen hyvinvoinnista,
					suosittelemme käyttämään maksutonta Cloudflare-palvelua (mm.
					nimipalvelut, kotisivujen suojaus, parempi välimuisti),
					koska sen avulla on mahdollista nopeuttaa huomattavasti
					kansainvälistä liikennettä sivustolla sekä suojata yrityksen
					kotisivut paremmin mahdollisilta palvelunestohyökkäyksiltä.
					Cloudflarella on palvelimia ympäri maailman, joten jos
					sivustosi käyttää heidän välimuistia vierailija vierailee
					todellisuudessa lähimmällä serverillä mikä saattaa vähentää
					huomattavasti latausaikaa.
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
					name: "Parannetaan sivustosi näkyvyyttä hakukoneissa",
					path: "hakukoneoptimointi",
				},
				linkRight: {
					name: "Kotisivut yritykselle yhdellä puhelinsoitolla",
					path: "yhteys",
				},
			};
		},
	};
</script>