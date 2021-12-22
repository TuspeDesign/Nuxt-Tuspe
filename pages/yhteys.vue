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
            <!-- <div class="mt-20"><h2 class="text-3xl text-blue-900">Valmiina kehittämään kotisivuja tai kuuntelemaan ilmaisia vinkkejä?</h2></div>
                <form class="mt-10 w-full max-w-xl mx-auto">
                    <div class="flex flex-wrap mt-2">
                        <div class="w-full px-3">
                            <input class="block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="customer.nimi" name="nimi" type="text" minlength="2" maxlength="50" required/>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full px-3">
                            <input class="block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="customer.puhelin" name="puhelin" type="text" minlength="10" maxlength="12" required/>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full px-3">
                            <input class="block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="customer.email" name="email" type="email" minlength="2" maxlength="50" required/>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full px-3">
                            <textarea class="block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="customer.viesti" name="viesti" type="text" minlength="1" maxlength="200" required></textarea>
                        </div>
                    </div>

                    <p><button class="mt-5 bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" @click="null"> Lähetä </button></p>
                    <p class="mt-2"><a class="text-blue-500 hover:underline" href="/tietosuoja">Rekisteri- ja tietosuojaseloste</a></p>
                </form>

                <h2 class="text-3xl text-blue-900 mt-20 text-center">Huippujoukko kumppaneina</h2>-->
        </div> 

        <div class="container flex items-center justify-center">
            <div class="grid grid-cols-3 gap-8 m-auto mx-10 mt-20">
                <p><a href="https://molentum.fi/">
                    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/partners/molentum.webp">
                </a></p>
                <p><a href="https://www.ratsukko.com/">
                    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/partners/ratsukko.webp">
                </a></p>
                <p><a href="https://www.dataline.fi/">
                    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/partners/dataline.webp">
                </a></p>
            </div>
        </div>
    </div>
</template>

<script>

</script>