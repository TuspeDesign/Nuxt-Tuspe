<template>
	<div class="bg-gray-50">
		<a class="hidden" href="#content">Sisältö</a>
		<Header />

		<main
			id="content"
			class="flex flex-col max-w-screen-xl mx-auto relative"
		>
			<Nuxt keep-alive class="flex-grow" />
		</main>

		<Footer />
	</div>
</template>