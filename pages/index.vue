<template>
	<div>
		<PhotoHero
			titleSmall="Kuinka voimme auttaa?"
			description="Luomme kotisivuja ja verkkokauppoja, jotka helpottavat yrityksesi toimintaa. Selkeät asiakaspolut vievät kohderyhmäsi oikeaan paikkaan - yhtä helposti kaikilla laitteilla."
			contact="Ota yhteyttä"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
			metaTitle="Valloita nettimarkkinat laadukkailla ratkaisuilla"
			metaDescription="Digitoimisto Tuspe Design toteuttaa käyttäjäystävälliset, visuaalisesti upeat, informatiiviset ja hakukoneoptimoidut kotisivut yritykselle ja urheiluseuralle. Erotu eduksesi!"
		/>

		<div id="info" class="py-12 px-6 text-center">
			<h1 class="text-xl font-bold text-title leading-snug mt-0 mb-6">
				Laadukkaat verkkosivut<br />ovat hyvää asiakaspalvelua
			</h1>

			<div class="text-content mx-auto max-w-lg">
				<p>
					Verkkosivustossa erittäin tärkeitä ominaisuuksia sisällön
					lisäksi ovat asiakaspolut, käytettävyys, saavutettavuus,
					näkyvyys hakukoneissa, latausnopeus ja näyttävyys. Me luomme
					verkkopalveluita, jotka tarjoaa asiakkaille positiivisen
					vierailukokemuksen, kestää aikaa eikä huku massaan.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageActive: 0,
				imagesBefore: [],
				imagesAfter: [1, 2],
				title: "Valloita nettimarkkinat laadukkailla ratkaisuilla",
				linkLeft: {
					name: "Kotisivut yritykselle yhdellä puhelinsoitolla",
					path: "yhteys",
				},
				linkRight: {
					name: "Luomme kotisivuja ja verkkokauppoja, jotka tekevät sinun elämästä helppoa",
					path: "kotisivut-yritykselle",
				},
			};
		},
		head() {
			return {
				link: [
					{
						rel: "me",
						type: "text/html",
						href: "https://timoanttila.com",
						title: "Yrittäjän henkilökohtainen sivusto",
					},
					{
						rel: "me",
						type: "application/atom+xml",
						href: "https://github.com/TuspeDesign/Nuxt-Tuspe/commits/master.atom",
						title: "Uusimmat muutokset projektiin Githubissa",
					},
				],
			};
		},
	};
</script>