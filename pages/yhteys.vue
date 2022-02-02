<template>
	<div>
		<PhotoHero
			titleSmall="Yhteystiedot"
			titleBig="Kotisivut yritykselle yhdellä puhelinsoitolla"
			description="Älä turhaan stressaa yrityksen nettisivuista. Pistetään pallo kentälle ja suunnitellaan tulevaisuus yhdessä."
			alt="Tuspen yhteystiedot"
			:linkLeft="linkLeft"
			:linkRight="linkRight"
		/>

		<div id="info" class="max-w-prose mx-auto px-4 py-10 md:py-14">
			<div
				class="
					text-content
					grid
					gap-6
					text-center
					md:grid-cols-3 md:text-left
				"
			>
				<div>
					<h3 class="m-0">Tuspe Design Oy</h3>
					<p class="mt-2">
						Petäjäpolku 11-15 K 70<br />37130 Nokia<br />3129423-2
					</p>
				</div>

				<div>
					<h3 class="m-0">Timo Anttila</h3>
					<p class="mt-2">
						Teknologiajohtaja<br /><a
							class="text-link inline-block"
							href="mailto:myynti@tuspe.com"
							rel="nofollow"
							>myynti@tuspe.com</a
						><br /><a
							class="text-link inline-block"
							href="tel:+358407746121"
							rel="nofollow"
							>040 774 6121</a
						>
					</p>
				</div>

				<div>
					<h3 class="m-0">Urheiluseurat</h3>
					<p class="mt-2">
						<a
							class="text-link inline-block"
							href="mailto:myynti@dataline.fi"
							>myynti@dataline.fi</a
						><br /><a
							class="text-link inline-block"
							href="tel:+358103192727"
							rel="nofollow"
							>010 319 2727</a
						>
					</p>
				</div>
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
					name: "Luomme kotisivuja ja verkkokauppoja, jotka helpottavat yrityksesi toimintaa",
					path: "",
				},
			};
		},
	};
</script>