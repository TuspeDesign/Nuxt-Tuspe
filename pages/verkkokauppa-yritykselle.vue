<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-2 gap-6">
            <div class="m-auto">
                <img class="rounded-3xl" src="https://tuspe.com/images/webstore-page.webp">
            </div>

            <div class="m-auto">
                <h1 class="text-4xl text-blue-900">Myyntiä 24/7 vaikka ympäri maailman</h1>
                <p class="mt-10">Mitä jos pistetään pakettiin erittäin kustannustehokas verkkokauppa, joka taipuu yrityksesi tarpeiden mukaan ja joka on räätälöity juuri sinun yritykselle? Meiltä verkkokauppa täysin "Avaimet käteen"-palveluna, jossa teema, tuotteet ja kaikki sisältö ovat valmiina. Sinun tarvitsee vain haaveilla ja me toteutamme unelmasi.</p>
                <p class="mt-5">Olipa kyseessä meidän SaaS-palvelu ProcessWirelle tai WordPress-sivuston Woocommerce, saat aina mutkattoman ja toimivan ratkaisun.</p>
                <p class="mt-5">Ota rohkeasti yhteyttä ja tilaa ilmainen kartoitus nykyiseen verkkokauppaan tai suunnitelma uuteen.</p>

                <button class="mt-10 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYllapito()"> Kauppa kuntoon! </button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 m-auto mx-15 px-20 text-center">
            <h2 class="text-3xl text-blue-900 mt-20 text-center">Kauppa, josta asiakkaasi lähtee ostoskassi mukanaan</h2>

            <p class="mt-1">Verkkokaupassa teknisen toteutuksen lisäksi on hyvä huomioida visuaalisuus sekä tuotteiden kertova ja informatiivinen teksti. Tuotekuvilla ja videoilla on myös suuri merkitys, sillä asiakas ostaa tuotteen varmemmin, mitä enemmän ostopäätöstä vahvistavaa tietoa siitä on tarjolla. Tekstin pitäisi olla myös mahdollisimman uniikkia sisältäen sopivasti avainsanoja. Kyllä, mahdollisimman hyviä hakusanoja pitäisi olla otsikoissa, osoitteissa ja tuotetekstissä.</p>
            <p class="mt-1">Kuulostaako vaikealle? Ei hätää, meidän kautta on mahdollista tilata myös tuotekuvat ja hyvin optimoidut tekstit tuotesivuille ja muualle kauppaan. Miksi tuhlata omaa aikaa miettimiseen, jos voi jättää ongelmat ammattilaiselle ja keskittyä omaan ydinbisnekseen?</p>
		    <p class="mt-1">Ennen projektin alkua määrittelemme tarkkaan mitkä ovat sinun unelmasi ja teemme tarjouksen sen perusteella. Tarvittaessa graafkko tekee teemasta luonnoksen minkä perusteella koodarit koodaavat siitä kauniin, nopean ja helposti päivitettävän kokonaisuuden. Emme käytä valmiita teemoja vaan räätälöimme koodin juuri sinulle ja olemme henkilökohtaisesti vastuussa sen toimivuudesta. Lopputulos on viisaasti rakennettu myyntikanava eikä vain teknisesti kaunis toteutus.</p>
		    <p class="mt-1">Haluamme kannustaa sinua kansainväliseen kauppaan, joten meidän kauppaan rajoittamattomasti tuotteita ja kieliä ilman lisämaksua. Valmiit integraatiot löytyvät yleisimmille maksuliikenteen tarjoajille emmekä rajoita kuljetusyhtiöitä. Kysy meiltä parhaat kumppanit juuri sinun tarpeisiin.</p>
		    <p class="mt-1">Maksatko liikaa nykyisestä verkkokaupasta? Onko verkkokauppa viimeisen päälle optimoitu vai voisiko jotain vielä parantaa? Alkaako vanha verkkokauppa olemaan liian kankea tulevaisuuden kasvulle? Tarvitsetko integraation? Tilaa ilmainen tilanteen kartoitus ja keskustellaan miten voisimme auttaa sinua myymään paremmin.</p>
        
            <h2 class="text-3xl text-blue-900 mt-10 text-center">Muutama esimerkki ylpeydenaiheistamme</h2>
            <p class="mt-1 text-center">Liitetäänkö sinunkin yrityksesi tähän huippujoukkueeseen?</p>
        </div>

        <div class="grid grid-cols-4 gap-7 m-auto mx-20 mt-10">
            <p><a href="https://navyblue.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-navyblue-2020.webp">
			</a></p>
            <p><a href="https://lennol.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-lennol-2019.webp">
			</a></p>
            <p><a href="https://kupilka.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-kupilka-2018.webp">
			</a></p>
            <p><a href="https://omamuutto.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-omamuutto-2020.webp">
			</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goToYllapito(){
                this.$router.push('/yllapito'); 
            }
        }
    }
</script>