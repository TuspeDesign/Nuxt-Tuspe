<template>
	<Tutorial />
</template>

<script lang="ts">
	import Vue from "vue";
	import Json from "";

	export default Vue.extend({
		data() {
			return {
				page: null,
			};
		},
		async fetch() {
			const temp = await fetch(``);
		},
	});
</script>
