<template>
	<div class="bg-gray-800 dark:bg-gray-800">
		<a class="hidden" href="#content">Sisältö</a>
		<Header />

		<main
			id="content"
			class="flex flex-col max-w-screen-2xl mx-auto relative"
		>
			<Nuxt keep-alive class="flex-grow" />
		</main>

		<Footer />
	</div>
</template>