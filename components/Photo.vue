<template>
	<picture
		v-if="image"
		class="block w-full h-full overflow-hidden rounded-2xl shadow-lg"
	>
		<source
			:srcset="`/images/${image}-mobile.webp 1000w, /images/${image}.webp`"
			type="image/webp"
		/>
		<source
			:srcset="`/images/${image}-mobile.jpg 1000w, /images/${image}.jpg`"
			type="image/jpeg"
		/>
		<img
			:src="`/images/${image}.jpg`"
			:srcset="`/images/${image}-mobile.jpg 1000w, /images/${image}.jpg`"
			type="image/jpeg"
			:alt="title"
			:width="width"
			:height="height"
			loading="lazy"
			class="block h-full w-full max-w-full object-cover object-center"
		/>
	</picture>
</template>

<script>
	export default {
		name: "Picture",
		props: {
			image: {
				type: String,
				default: "websites",
			},
			title: {
				type: String,
				default:
					"Luomme kotisivuja ja verkkokauppoja, jotka tekevät sinun elämästä helppoa",
			},
			width: {
				type: Number,
				default: 720,
			},
			height: {
				type: Number,
				default: 900,
			},
		},
	};
</script>