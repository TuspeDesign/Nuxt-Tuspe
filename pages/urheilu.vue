<template>
	<div>
		<PhotoHero
			titleSmall="Urheilu"
			titleBig="Monipuolinen ja helposti päivitettävä urheilusaitti"
			description="Kotisivut ovat pelivälineesi digikentällä. Hyvin rakennetut ja toimivat kotisivut ovat ilo silmälle sekä maali bisnekseen. Liity mukaan alati kasvavaan joukkoon."
			alt="Helppokäyttöinen urheilusaitti seuralle"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
			contact="Palloa maaliin!"
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
				Liitetäänkö sinunkin seurasi huippujoukkoon?
			</h2>
			<div class="text-content">
				<p>
					Elämän ei pidä olla vaikeaa, kallista ja aikaa vievää seuran
					kotisivuja päivittäessä. Mitäs jos hoitaisimme kaikki matsit
					joukkuettain automaattisesti ja päivittäisimme vielä
					tuloksetkin pelien jälkeen? Videot? Tilastot? Check.
					Haluamme säästää sinun aikaasi tärkeämmälle.
				</p>
				<p>
					Olemme kehittäneet urheilusaittimme vastaamaan seurojen
					tarpeita ja kehitämme sitä koko ajan paremmaksi
					Mestis-seurojemme avulla. Haluamme, että seurojen fanit
					saavat erittäin hyvän kokemuksen vierailusta sekä seurojen
					on helppoa päivittää ja lisätä sisältöä. Ominaisuuksia on
					automatisoitu niin pitkälle kuin mahdollista.
				</p>

				<p>
					Urheilusaittimme perusominaisuuksiin kuuluvat mm. helposti
					luotavat uutiset, komeat pelaajaesittelyt, videot
					YouTubesta, tilastot ja ottelut Tilastokeskukselta, verkko-
					ja huutokauppa, aitioden esittelyt ja varaukset, kausipaikat
					sekä paljon muuta seuran elämää helpottavia ominaisuuksia.
				</p>

				<ul class="text-center mt-10 mb-0 p-0">
					<li
						v-for="(e, i) in clubs"
						:key="i"
						class="inline-block align-middle"
					>
						<nuxt-link :to="e.url" class="block p-2">
							<picture class="block">
								<source
									:srcset="`/images/logos/${e.image}.webp`"
									type="image/webp"
								/>
								<source
									:srcset="`/images/logos/${e.image}.png`"
									type="image/png"
								/>
								<img
									:src="`/images/logos/${e.image}.png`"
									type="image/png"
									:alt="e.name"
									width="80"
									height="80"
									loading="lazy"
									class="
										block
										transform
										hover:scale-110
										duration-300
									"
								/>
							</picture>
						</nuxt-link>
					</li>
				</ul>
				<Contact />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				clubs: [
					{
						name: "Joensuun Kiekko-Pojat",
						url: "https://joensuunkiekkopojat.fi/",
						image: "jokp",
					},
					{
						name: "Kiekko-Vantaa",
						url: "https://kiekko-vantaa.fi/",
						image: "kiekkovantaa",
					},
					{
						name: "RoKi Hockey",
						url: "https://rokihockey.fi/",
						image: "roki",
					},
					{
						name: "Juniori Jokipojat",
						url: "https://juniorijokipojat.fi/",
						image: "juniorijokipojat",
					},
					{
						name: "Kurra Hockey",
						url: "https://www.kurra.fi/",
						image: "kurra",
					},
					{
						name: "Käpylän Pallo",
						url: "https://kapylanpallo.fi/",
						image: "kapa",
					},
					{
						name: "Pallokerho Keski-Uusimaa",
						url: "https://pkku.fi/",
						image: "pkku",
					},
				],
				linkLeft: {
					name: "Verkkokauppa yritykselle suunnittelusta toteutukseen",
					path: "verkkokauppa-yritykselle",
				},
				linkRight: {
					name: "Verkkosivujen luotettavat ylläpitopalvelut",
					path: "yllapito",
				},
			};
		},
	};
</script>