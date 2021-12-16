<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-2 gap-6">
            <div class="m-auto">
                <img class="rounded-3xl" src="https://tuspe.com/images/hosting-page.webp">
            </div>

            <div class="m-auto">
                <h1 class="text-4xl text-blue-900">Verkkosivujen luotettavat ylläpitopalvelut</h1>
                <p class="mt-10 text-">Kun verkkosivuillesi on luotettava ylläpitopalvelu, voit varmistua siitä, että sivut toimivat, niistä on varmuuskopiot ja tarvittaessa saat nopeasti pienet tai suuremmatkin sivuston muutokset niille. Älä turhaan stressaa vaan keskity huoletta omaan ydinbisnekseen.</p>
                <p class="mt-5">Kaikki data on turvassa kahdella 24/7 monitoroidulla palvelimella ja voimme tarvittaessa palauttaa sivuston nopeasti varmuuskopiosta. Reiluina tyyppeinä emme veloita jokaisesta pienistä muutoksesta tai päivityksestä erikseen vaan semmoiset kuuluvat ylläpitoon.</p>
                <p class="mt-5">Tsekkaa alta mitä kaikkea pakettiin kuuluu.</p>

                <button class="mt-10 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYhteys()"> Parasta pakettiin! </button>
            </div>    
        </div>

        <div class="grid grid-cols-1 gap-6 m-auto mx-15 px-20 text-center">
            <h2 class="text-3xl text-blue-900 mt-20 text-center">Kaikki tarvittavat palvelut</h2>
            <p class="mt-1">Tämän kaiken saat 15€:n kuukausimaksulla (18.60€ sis. ALV). Turvallisuus ja toimivuus ovat arvokkaita asioista, mutta niiden toteutumisen ei tarvitse olla kallista kukkarollesi. Hintamme ovat pysyvästi edulliset.</p>
            <ul class="mt-1 text-left">
			    <li>- Rajoittamaton ja nopea liikenne</li>
			    <li>- Aina sopivasti tilaa kotisivuille</li>
			    <li>- Varmuuskopiointi kahdesti päivässä</li>
			    <li>- Palautus aikaisempaan versioon varmuuskopiosta</li>
			    <li>- Pienet päivitykset kotisivuille (alle 15 min)</li>
			    <li>- SSL-sertifikaatti (https)</li>
			    <li>- Verkkokauppaan kehitetyt uudet ominaisuudet ja päivitykset.</li>
			    <li>- Alennetut hinnat uusille projekteille.</li>
			    <li>- Sisällönhallintaohjelmien ja niiden moduulien päivitykset</li>
			    <li>- Aina uusimpia paketteja ja suojausia käyttävä palvelin</li>
			    <li>- Uusi <a class="text-blue-500 hover:underline" href="/verkkotunnukset">verkkotunnus</a> (domain) ensimmäiseksi vuodeksi (esim. fi tai com)</li>
			    <li>- Tarvittaessa nimipalvelut verkkotunnukselle (2)</li>
			    <li>- Tekninen tuki + hyvät vinkit tulevaisuudelle</li>
		    </ul>

            <p class="mt-1">Hoidamme tarvittaessa myös yrityksesi sähköpostipalvelut kuntoon.<br>Meiltä onnistuvat omalla verkkotunnuksella ilmaiset Gmail tai Outlook sekä maksulliset <a class="text-blue-500 hover:underline" href="https://gsuite.google.fi/intl/fi/pricing.html" target="_blank" rel="noopener">Google GSuite</a> tai <a class="text-blue-500 hover:underline" href="https://www.microsoft.com/fi-fi/microsoft-365/enterprise/compare-office-365-plans" target="_blank" rel="noopener">Microsoft Office 365</a>. Myös käyttöopastusta.</p>
		    <p class="mt-1">Palvelimilla käytössä peilaava RAID-levy sekä palvelimien tarjoaja, <a class="text-blue-500 hover:underline" href="https://www.ovh-hosting.fi/" target="_blank" rel="noopener" hreflang="fi">OVH</a>, vamistaa 24/7 palvelimien laitteiston toimivuuden päivystävällä teknisellä tiimillä. He reagoivat heti jos palvelimissa havaitaan ongelmia.</p>
		    <p class="mt-1">Suosimme ilmaista <a class="text-blue-500 hover:underline" href="https://www.cloudflare.com/" title="Suojaa palvelusi Cloudflaren avulla" target="_blank" rel="noopener" hreflang="en">Cloudflaren</a> tarjoamaa nimipalvelua verkkotunnuksille omien turvallisten palvelimiemme lisäksi, koska heillä on palvelimia ympäri maailman runkoverkon tärkeimmissä paikoissa ja nimipalvelun avulla on mahdollista välimuistittaa eli kopioida meidän palvelimella oleva kotisivu heidän verkkoon ja näin vähentää vierailijan sivun latausaikaa huomattavasti. Heidän avullaan myös mahdollista suojata sivusto paremmin mahdollisilta palvelunestohyökkäyksiltä.</p>
		    <p class="mt-1">Liian hyvää, mutta totta. Kaikki nämä palvelut sekä tekninen osaamisemme vain puhelinsoiton päässä. Siirretään palvelusi Tuspen hotelliin.</p>
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