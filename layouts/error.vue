<template>
	<PhotoHero
		:titleSmall="`Virhe ${error.statusCode}`"
		:titleBig="`Hups! ${title}`"
		description="Pahoittelemme, jos aiheutimme mielipahaa tarjoamalla tämän haluamasi sivun sijasta. Kannattaa suunnata seuraavaksi etusivulle. Toivottavasti löydät mitä etsit."
		:alt="title"
		:linkLeft="linkLeft"
		:linkRight="linkRight"
		noLinkDown="1"
	/>
</template>

<script>
	export default {
		layout: "default",
		props: ["error"],
		data() {
			return {
				title: null,
				linkLeft: {
					name: "Laadukkaat verkkosivut ovat hyvää asiakaspalvelua",
					path: "",
				},
				linkRight: {
					name: "Luomme kotisivuja ja verkkokauppoja, jotka tekevät sinun elämästä helppoa",
					path: "kotisivut-yritykselle",
				},
			};
		},
		mounted() {
			this.title =
				this.error.statusCode === 404
					? "Sivua ei löytynyt"
					: "Virheellä maaliin";
		},
	};
</script>
