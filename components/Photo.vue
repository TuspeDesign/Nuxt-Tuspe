<template>
	<picture v-if="image" class="block w-full h-full overflow-hidden">
		<source
			:srcset="`/images/${image}-667.webp 667w, /images/${image}-1080.webp`"
			type="image/webp"
		/>
		<source
			:srcset="`/images/${image}-667.jpg 667w, /images/${image}.jpg`"
			type="image/jpeg"
		/>
		<img
			:src="`/images/${image}.jpg`"
			:srcset="`/images/${image}-667.jpg 667w, /images/${image}.jpg`"
			type="image/jpeg"
			:alt="title"
			:width="width"
			:height="height"
			loading="lazy"
			class="block h-full w-full object-cover object-center"
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
				type: String,
				default: 1920,
			},
			height: {
				type: String,
				default: 1080,
			},
		},
	};
</script>