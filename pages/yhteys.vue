<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-2 gap-6">
            <div class="m-auto">
                <img class="rounded-3xl" src="https://tuspe.com/images/sport-page.webp">
            </div>

            <div class="m-auto">
                <h1 class="text-4xl text-blue-900">Yhteystiedot</h1>
                <h3 class="mt-10">Tuspe Design Oy</h3><p>Petäjäpolku 11-15 K 70<br>37130 Nokia<br>3129423-2</p>
                <h3 class="mt-5">Timo Anttila</h3><p>Teknologiajohtaja<br><a class="text-blue-500 hover:underline" href="mailto:myynti@tuspe.com" rel="nofollow">myynti@tuspe.com</a><br><a class="text-blue-500 hover:underline" href="tel:+358407746121" rel="nofollow">040 774 6121</a></p>
                <h3 class="mt-5">Urheiluseurat</h3><p><a class="text-blue-500 hover:underline" href="mailto:myynti@dataline.fi">myynti@dataline.fi</a><br><a class="text-blue-500 hover:underline" href="tel:+358400273150" rel="nofollow">0400 273 150</a></p>
            </div>
        </div>

<div class="grid grid-cols-1 text-center">
    <div class="mt-20"><h2 class="text-3xl text-blue-900">Valmiina kehittämään kotisivuja tai kuuntelemaan ilmaisia vinkkejä?</h2></div>
        <div class="container">
        <form class="mt-10 w-full max-w-xl mx-auto">
            <div class="flex flex-wrap mt-2">
                <div class="w-full px-3">
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Nimi / yritys" required>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-3">
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone" type="phone" placeholder="Puhelin" required>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-3">
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Sähköposti" required>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-3">
                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" type="message" placeholder="Miten voimme auttaa?" required></textarea>
                </div>
            </div>

            <p><button class="mt-5 bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" @click="null"> Lähetä </button></p>
            <p class="mt-2"><a class="text-blue-500 hover:underline" href="/tietosuoja">Rekisteri- ja tietosuojaseloste</a></p>
        </form>
        </div>
    </div>
</div>
</template>

<script>

</script>