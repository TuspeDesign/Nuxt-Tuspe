<template>
	<section id="mainDescription" class="grid gap-10 lg:grid-cols-2">
		<Photo :image="image" :title="title" />
		<div id="description" class="grid">
			<div class="self-center max-w-prose mx-auto text-center">
				<h1 class="text-title text-4xl font-bold mb-8 mt-0">
					Yhteystiedot
				</h1>

				<div class="text-primary">
					<h3 class="m-0">Tuspe Design Oy</h3>
					<p class="mt-2">
						Petäjäpolku 11-15 K 70<br />37130 Nokia<br />3129423-2
					</p>
					<h3 class="mt-5 mb-0">Timo Anttila</h3>
					<p class="mt-2">
						Teknologiajohtaja<br /><a
							class="text-link"
							href="mailto:myynti@tuspe.com"
							rel="nofollow"
							>myynti@tuspe.com</a
						><br /><a
							class="text-link"
							href="tel:+358407746121"
							rel="nofollow"
							>040 774 6121</a
						>
					</p>
					<h3 class="mt-5 mb-0">Urheiluseurat</h3>
					<p class="mt-2">
						<a class="text-link" href="mailto:myynti@dataline.fi"
							>myynti@dataline.fi</a
						><br /><a
							class="text-link"
							href="tel:+358400273150"
							rel="nofollow"
							>0400 273 150</a
						>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				title: "Pistetään pallo kentälle ja suunnitellaan strategioita",
				description:
					"Valmiina kehittämään kotisivuja tai kuuntelemaan ilmaisia vinkkejä?",
				image: "sport-page",
			};
		},
		head() {
			return {
				title: "Yhteystiedot | Tuspe Design",
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.title,
					},
					{
						hid: "contact",
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
						size: "720x900",
						content: "https://tuspe.com/images/" + this.image + ".jpg",
					},
				],
			};
		},
	};
</script>