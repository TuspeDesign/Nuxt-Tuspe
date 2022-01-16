<template>
	<div>
		<PhotoHero
			titleSmall="Hakukoneoptimointi"
			titleBig="Parannetaan sivustosi näkyvyyttä hakukoneissa"
			description="Hyvin optimoitu nettisivu on Googlen kaveri ja luo maksutonta	liikennettä hakukoneiden kautta. tuottaa maksutonta liikennettä hakukoneista. Kisataan yhdessä ykköseksi!"
			:alt="title"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
			contact="Hakukoneita viettelemään!"
		/>

		<div id="info" class="max-w-prose mx-auto px-6 py-10 md:py-14">
			<div class="text-content">
				<p>
					Meidän kaikki sivustomme on teknisesti automaattisesti
					optimoituja parhaalla mahdollisella tavalla, samalla tavalla
					kuin esim. WordPress tarjoaa siihen tarkoitetuilla
					lisäosillaan. Valitettavasti hakukoneoptimointi on paljon
					muutakin kuin pelkkää teknistä osaamista. SISÄLTÖ ON KINGI!
				</p>
				<p>
					Otsikoissa ja sisältöteksteissä tulisi olla sopiva määrä
					hakusanoja, avainsanoja, luomassa parempia hakutuloksia sekä
					niiden tulisi olla mahdollisimman uniikkeja. Verkkokaupan
					tuotteet voivat olla samoja kuin kymmenillä tai sadoilla
					kilpailijoilla, joten miten juuri sinun tuotteesi
					erottautuvat joukosta?
				</p>

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
					name: "Verkkosivujen luotettavat ylläpitopalvelut",
					path: "yllapito",
				},
				linkRight: {
					name: "Verkkotunnuksen rekisteröinti ja uusiminen yritykselle",
					path: "verkkotunnukset",
				},
			};
		},
	};
</script>