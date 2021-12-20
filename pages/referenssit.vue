<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-1 gap-6 m-auto mx-15 px-24 text-center">
            <h1 class="text-4xl text-blue-900">Esimerkkejä töistämme</h1>

            <p class="mt-1 text-center">Olemme toteuttaneet monipuolisesti erilaisia kotisivuja ja verkkokauppoja kaikenlaisille ja<br>eri kokoisille toimijoille toiminimistä kansainvälisiin yrityksiin.<br> Teemme suurimman osan töistämme alihankintana.</p>

            <div class="mt-5 px-50">
                <button class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYhteys()"> Tilaa ilmainen kartoitus! </button>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-7 m-auto mx-20 mt-20">
            <p><a href="https://navyblue.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-navyblue-2020.webp">
			</a></p>
            <p><a href="https://lennol.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-lennol-2019.webp">
			</a></p>
            <p><a href="https://venehotelli.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-venehotelli-2020.webp">
			</a></p>
            <p><a href="https://omamuutto.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-omamuutto-2020.webp">
			</a></p>
            <p><a href="https://www.ratsukko.com/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-ratsukko-2020.webp">
			</a></p>
            <p><a href="https://quje.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-quje-2020.webp">
			</a></p>
            <p><a href="https://kupilka.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-kupilka-2018.webp">
			</a></p>
            <p><a href="https://puhtausala.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-puhtausala-2019.webp">
			</a></p>
            <p><a href="https://www.hamari.pro/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-hamari-2018.webp">
			</a></p>
            <p><a href="https://www.konejonnit.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-konejonnit-2020.webp">
			</a></p>
            <p><a href="https://osuuskaupparock.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-okr-2019.webp">
			</a></p>
            <p><a href="https://helant.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-helant-2018.webp">
			</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goToYhteys(){
                this.$router.push('/yhteys'); 
            }
        }
    }
</script>