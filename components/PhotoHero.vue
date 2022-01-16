<template>
	<div v-if="image" id="hero" class="h-screen relative overflow-hidden">
		<nuxt-link
			to="/"
			id="logo"
			class="
				absolute
				top-6
				left-6
				z-40
				text-center
				leading-tight
				no-underline
			"
			rel="home"
			hreflang="fi"
		>
			<span class="block text-logo-top text-white font-bold">TUSPE</span>
			<span class="block text-logo-bottom text-content font-normal"
				>DESIGN</span
			>
		</nuxt-link>
		<div
			class="
				px-6
				w-full
				absolute
				top-0
				left-0
				md:left-10 md:w-auto
				h-screen
				z-20
				grid
				box-border
			"
		>
			<div class="self-center text-center -mt-14 md:text-left">
				<header class="uppercase mb-4">
					<div
						v-if="titleSmall"
						id="question"
						class="
							text-lg text-normal
							line-before
							text-content
							relative
							inline-block
							mb-4
						"
					>
						{{ titleSmall }}
					</div>

					<div
						id="heroTextBig"
						class="font-bold text-white leading-snug"
					>
						<template v-if="!titleBig">
							<no-ssr>
								<vue-typed-js
									:strings="[
										'uusi ilme kotisivuille?',
										'monipuolinen verkkokauppa?',
										'luotettava ylläpitopalvelu?',
										'parempia tuloksia hakukoneissa?',
										'verkkotunnuksen rekisteröinti?',
										'apua päivitykseen?',
									]"
									:loop="true"
									:backSpeed="10"
									:showCursor="false"
									:cursorChar="''"
									:smartBackspace="true"
								>
									<span class="typing text-2xl w-full" />
								</vue-typed-js>
							</no-ssr>
						</template>
						<h1 v-else class="max-w-xl text-xl m-0 leading-snug">
							{{ titleBig }}
						</h1>
					</div>
				</header>

				<div
					v-if="description"
					class="text-content text-md leading-normal max-w-xl"
				>
					{{ description }}
				</div>

				<div v-if="contact" id="heroButtons" class="mt-6">
					<nuxt-link
						v-if="!titleBig"
						to="/kotisivut-yritykselle"
						class="
							hidden
							md:inline-block md:align-middle
							h-12
							px-10
							border-2 border-gray-400 border-solid
							rounded-full
							uppercase
							no-underline
							mb-2
							md:mr-2
							bg-link
							text-button
							font-bold
						"
						title="Kotisivut yritykselle ketterästi ja ammattitaidolla"
					>
						<div class="grid text-center w-full h-full">
							<span class="self-center">Verkkosivustot</span>
						</div>
					</nuxt-link>

					<nuxt-link
						to="/yhteys"
						class="
							inline-block
							align-middle
							h-12
							px-10
							border-2 border-gray-400 border-solid
							rounded-full
							uppercase
							no-underline
							font-bold
						"
						:class="{
							'text-content': !titleBig,
							'bg-link text-button': titleBig,
						}"
						title="Ota rohkeasti yhteyttä"
					>
						<div class="grid text-center w-full h-full">
							<span class="self-center">{{ contact }}</span>
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>

		<Photo :image="image" :title="alt" :width="width" :height="height" />

		<div
			v-if="linkLeft || linkRight"
			id="heroNav"
			class="absolute top-5 right-4 z-30 text-center"
		>
			<nuxt-link
				v-if="linkLeft"
				:to="`/${linkLeft.path}`"
				class="inline-block w-12 h-12 no-underline text-content"
				:title="linkLeft.name"
				rel="prev"
			>
				<div class="grid w-full h-full">
					<span class="self-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<title>Nuoli vasemmalle</title>
							<path
								d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
							/>
						</svg>
					</span>
				</div>
			</nuxt-link>

			<nuxt-link
				v-if="linkRight"
				:to="`/${linkRight.path}`"
				class="inline-block w-12 h-12 no-underline text-content"
				:title="linkRight.name"
				rel="next"
			>
				<div class="grid w-full h-full">
					<span class="self-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<title>Nuoli oikealle</title>
							<path
								d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
							/>
						</svg>
					</span>
				</div>
			</nuxt-link>
		</div>

		<a
			href="#info"
			class="absolute right-4 bottom-10 md:bottom-6 w-12 h-12 grid z-30"
			title="Lue lisää"
			rel="nofollow"
		>
			<svg
				class="self-center mx-auto"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<title>Nuoli alaspäin</title>
				<path
					d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
				/>
			</svg>
		</a>
	</div>
</template>

<script>
	import { VueTypedJs } from "vue-typed-js";
	export default {
		components: {
			VueTypedJs,
		},
		name: "HeroImage",
		props: {
			image: {
				type: String,
				default: "laptop",
			},
			width: {
				type: String,
				default: "1920",
			},
			height: {
				type: String,
				default: "1080",
			},
			alt: {
				type: String,
				default:
					"Luomme kotisivuja ja verkkokauppoja, jotka tekevät sinun elämästä helppoa",
			},
			titleSmall: {
				type: String,
				default: null,
			},
			titleBig: {
				type: String,
				default: null,
			},
			description: {
				type: String,
				default: null,
			},
			linkLeft: {
				type: Object,
				default: null,
			},
			linkRight: {
				type: Object,
				default: null,
			},
			contact: {
				type: String,
				default: null,
			},
			metaTitle: {
				type: String,
				default: "",
			},
			metaDescription: {
				type: String,
				default: "",
			},
		},
		head() {
			return {
				title: this.metaTitle
					? this.metaTitle + " | Tuspe Design"
					: this.titleBig + " | Tuspe Design",
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.metaTitle ? this.metaTitle : this.titleBig,
					},
					{
						hid: Math.random(),
						name: "description",
						content: this.metaDescription
							? this.metaDescription
							: this.description,
					},
					{
						name: "twitter:description",
						property: "og:description",
						content: this.metaDescription
							? this.metaDescription
							: this.description,
					},
					{
						name: "twitter:image",
						property: "og:image",
						type: "image/jpeg",
						content:
							"https://tuspe.com/images/" + this.image + "-1080.jpg",
					},
					{
						property: "og:image:secure_url",
						type: "image/jpeg",
						content:
							"https://tuspe.com/images/" + this.image + "-1080.jpg",
					},
					{
						property: "og:image:width",
						content: this.width,
					},
					{
						property: "og:image:height",
						content: this.height,
					},
					{
						name: "twitter:image:alt",
						content: this.alt,
					},
				],
			};
		},
	};
</script>

<style scoped>
	#hero,
	#hero .h-screen {
		min-height: 620px;
	}
	@media screen and (min-width: 480px) {
		#question:before {
			content: "";
			display: block;
			width: 5px;
			height: 30px;
			background-color: var(--text-link);
			position: absolute;
			top: 0;
			left: -12px;
		}
	}
	@media screen and (min-width: 840px) {
		#heroTextBig {
			min-height: 43px;
		}
	}
	@media screen and (max-width: 840px) {
		#heroTextBig {
			min-height: 61px;
		}
	}
</style>