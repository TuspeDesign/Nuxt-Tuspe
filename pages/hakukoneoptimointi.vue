<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-2 gap-6">
            <div class="m-auto">
                <img class="rounded-3xl" src="https://tuspe.com/images/websites-page.webp">
            </div>

             <div class="m-auto">
                <h1 class="text-4xl text-blue-900">Hakukoneoptimointi</h1>
                <p class="mt-10">Meidän kaikki sivustomme on teknisesti automaattisesti optimoituja parhaalla mahdollisella tavalla, samalla tavalla kuin esim. WordPress tarjoaa siihen tarkoitetuilla lisäosillaan. Valitettavasti hakukoneoptimointi on paljon muutakin kuin pelkkää teknistä osaamista. SISÄLTÖ ON KINGI!</p>
                <p class="mt-5">Otsikoissa ja sisältöteksteissä tulisi olla sopiva määrä hakusanoja, avainsanoja, luomassa parempia hakutuloksia sekä niiden tulisi olla mahdollisimman uniikkeja. Verkkokaupan tuotteet voivat olla samoja kuin kymmenillä tai sadoilla kilpailijoilla, joten miten juuri sinun tuotteesi erottautuvat joukosta?</p>

                <button class="mt-10 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYllapito()"> Hakukoneita viettelemään! </button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 m-auto mx-15 px-20 text-center">
            <h2 class="text-3xl text-blue-900 mt-20">Mitä hakukoneoptimointi tarkoittaa ja mikä on avainsanatutkimus?</h2>

            <p class="mt-1">Hakukoneoptimointi (SEO) on sivuston näkyvyyden parantamista hakukonetuloksissa orgaanisen, eli maksuttoman, liikenteen osalta. Hakukoneoptimointi on kustannustehokasta, sillä hyvin optimoitu sivusto löytyy hakukoneista oikeilla hakusanoilla riittävän korkealta orgaanisesti ja se saa myös maksetussa hakukonemainonnassa paremmat laatupisteet.</p>
		    <p class="mt-1">Hakukoneoptimointiin kiinteästi liittyvä avainsanatutkimus kannattaa tehdä jo kotisivujen ja verkkokaupan suunnitteluvaiheessa. Avainsanatutkimuksella selvitetään, miten paljon hakuja tehdään tietyillä sanoilla yrityksesi toimialalla ja tuotteisiin tai palveluihin liittyen. Kun volyymiltaan suurimmat avainsanat on selvitetty, upotetaan ne kotisivujesi tai verkkokauppasi sisältöteksteihin. Näin mahdollistetaan kotisivujesi sekä sen alasivujen löytyminen potentiaalisille asiakkaillesi.</p>
		    <p class="mt-1">Vaikka kotisivusi ja verkkokauppasi olisivat visuaalisesti ja rakenteeltaan upeat ja lyömättömät, eivät asiakkaasi välttämättä löydä sivuja, jollei niitä ole hakukoneoptimoitu.</p>
		    <p class="mt-1">Onko sinulla jo valmiit kotisivut tai verkkokauppa, joiden sisältöä olisi syytä tarkistaa? Kysy kattavaa analyysia sivujesi nykyisestä tilanteesta. Tarkistetaan, ovatko sivusi hakukoneoptimoidut ja miten sivujen tehokkuutta voisi parantaa. Saat myös tekniset parannukset jo olemassa olevaan sivustoon.</p>
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