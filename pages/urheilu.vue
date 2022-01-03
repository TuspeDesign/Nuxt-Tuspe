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
							Elämän ei pidä olla vaikeaa, kallista ja aikaa
							vievää seuran kotisivuja päivittäessä. Mitäs jos
							hoitaisimme kaikki matsit joukkuettain
							automaattisesti ja päivittäisimme vielä tuloksetkin
							pelien jälkeen? Videot? Tilastot? Check. Haluamme
							säästää sinun aikaasi tärkeämmälle.
						</p>
						<p>
							Olemme kehittäneet urheilusaittimme vastaamaan
							seurojen tarpeita ja kehitämme sitä koko ajan
							paremmaksi Mestis-seurojemme avulla. Haluamme, että
							seurojen fanit saavat erittäin hyvän kokemuksen
							vierailusta sekä seurojen on helppoa päivittää ja
							lisätä sisältöä. Ominaisuuksia on automatisoitu niin
							pitkälle kuin mahdollista.
						</p>
					</div>

					<div class="mt-6 text-center">
						<nuxt-link class="button" to="/yhteys"
							>Nyt palloa maaliin!</nuxt-link
						>
					</div>
				</div>
			</div>
		</section>

		<section id="longDescription" class="py-8 mt-8">
			<div class="max-w-prose mx-auto">
				<h2 class="text-title text-4xl font-norm mb-8 mt-0 text-center">
					Liitetäänkö sinunkin seurasi huippujoukkoon?
				</h2>

				<div class="text-primary">
					<p>
						Urheilusaittimme perusominaisuuksiin kuuluvat mm.
						helposti luotavat uutiset, komeat pelaajaesittelyt,
						videot YouTubesta, tilastot ja ottelut
						Tilastokeskukselta, verkko- ja huutokauppa, aitioden
						esittelyt ja varaukset, kausipaikat sekä paljon muuta
						seuran elämää helpottavia ominaisuuksia.
					</p>
				</div>

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
									:srcset="`/images/logos/${e.image}.jpg`"
									type="image/jpg"
								/>
								<img
									:src="`/images/logos/${e.image}.jpg`"
									type="image/jpg"
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
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "Monipuolinen ja helposti päivitettävä urheilusaitti",
				description:
					"Kotisivut ovat pelivälineesi digikentällä. Hyvin rakennetut ja toimivat kotisivut ovat ilo silmälle sekä maali bisnekseen. Liity mukaan alati kasvavaan joukkoon.",
				image: "sport-page",
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
			};
		},
		head() {
			return {
				title: "Helppokäyttöinen urheilusaitti seuralle | Tuspe Design",
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.title,
					},
					{
						hid: "sport",
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
						content: "https://tuspe.com/images/" + this.image + ".jpg",
					},
					{
						property: "og:image:secure_url",
						type: "image/jpg",
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