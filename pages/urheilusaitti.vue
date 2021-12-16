<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-2 gap-6">
            <div class="m-auto">
                <img class="rounded-3xl" src="https://tuspe.com/images/sport-page.webp">
            </div>

            <div class="m-auto">
                <h1 class="text-4xl text-blue-900">Monipuolinen ja helposti päivitettävä urheilusaitti</h1>
                <p class="mt-10">Elämän ei pidä olla vaikeaa, kallista ja aikaa vievää seuran kotisivuja päivittäessä. Mitäs jos hoitaisimme kaikki matsit joukkuettain automaattisesti ja päivittäisimme vielä tuloksetkin pelien jälkeen? Videot? Tilastot? Check. Haluamme säästää sinun aikaasi tärkeämmälle.</p>
			    <p class="mt-5">Olemme kehittäneet urheilusaittimme vastaamaan seurojen tarpeita ja kehitämme sitä koko ajan paremmaksi Mestis-seurojemme avulla. Haluamme, että seurojen fanit saavat erittäin hyvän kokemuksen vierailusta sekä seurojen on helppoa päivittää ja lisätä sisältöä. Ominaisuuksia on automatisoitu niin pitkälle kuin mahdollista.</p>
			    <p class="mt-5">Urheilusaittimme perusominaisuuksiin kuuluvat mm. helposti luotavat uutiset, komeat pelaajaesittelyt, videot YouTubesta, tilastot ja ottelut Tilastokeskukselta, verkko- ja huutokauppa, aitioden esittelyt ja varaukset, kausipaikat sekä paljon muuta seuran elämää helpottavia ominaisuuksia.</p>
            
                <button class="mt-10 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYhteys()"> Nyt palloa maaliin! </button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 m-auto mx-15 px-20 text-center">
            <h2 class="text-3xl text-blue-900 mt-20 text-center">Liitetäänkö sinunkin seurasi huippujoukkoon?</h2>
        </div>

        <div class="container flex items-center justify-center">
            <div class="grid grid-cols-7 gap-1 m-auto mx-10 mt-10">
                <p><a href="https://joensuunkiekkopojat.fi/">
				    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/logos/jokipo.webp">
			    </a></p>
                <p><a href="https://kiekko-vantaa.fi/">
				    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/logos/kiekkovantaa.webp">
			    </a></p>
                <p><a href="https://rokihockey.fi/">
				    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/logos/roki.webp">
			    </a></p>
                <p><a href="https://juniorijokipojat.fi/">
				    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/logos/juniorijokipojat.webp">
			    </a></p>
                <p><a href="https://www.kurra.fi/">
				    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/logos/kurra.webp">
			    </a></p>
                <p><a href="https://kapylanpallo.fi/">
				    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/logos/kapa.webp">
			    </a></p>
                <p><a href="https://pkku.fi/">
				    <img class="transform hover:scale-110 duration-300 px-5 w-64" src="https://tuspe.com/images/logos/pkku.webp">
			    </a></p>
            </div>
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