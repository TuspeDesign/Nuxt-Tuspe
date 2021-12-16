<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-2 gap-6">
            <div class="m-auto">
                <img class="rounded-3xl" src="https://tuspe.com/images/websites-page.webp">
            </div>

             <div class="m-auto">
                <h1 class="text-4xl text-blue-900">Verkkotunnus</h1>
                <p class="mt-10 text-">Verkkotunnus eli domain on sivujesi nimi ja osoite. Jos sinulla ei vielä ole verkkotunnusta, olet päätynyt oikeaan paikkaan. Meidän kauttamme voit varata erittäin kilpailukykyisellä hinnalla minkä tahansa päätteen. Olemme Traficomin jälleenmyyjä eli myös fi-tunnukset.</p>
                <p class="mt-5">Meiltä saat verkkotunnuksen myös ilman muita sopimuksia sekä ilmaiset nimipalvelimet tarvittaessa sekä voimme siirtää verkkotunnuksen nykyiseltä palveluntarjoajalta meille ilman lisäkustannuksia.</p>
                <p class="mt-5">Olipa tarpeesi mikä tahansa, me hoidamme sen puolestasi.</p>

                <button class="mt-10 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYllapito()"> Nimet kuntoon! </button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 m-auto mx-15 px-20 text-center">
            <h2 class="text-3xl text-blue-900 mt-20">Huolehdimme kaiken valmiiksi</h2>

            <ul class="mt-1 text-left">
                <li>- Verkkotunnuksen rekisteröinti sinun tiedoillasi (<a class="text-blue-500 hover:underline" href="https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/fi-verkkotunnushaku" title="Tarkista, onko haluamasi fi-verkkotunnus vapaana." target="_blank" hreflang="fi">Traficom</a> / <a class="text-blue-500 hover:underline" href="https://www.namecheap.com/" title="Tarkista, onko haluamasi verkkotunnus vapaana." target="_blank" hreflang="en">Namecheap</a>).</li>
                <li>- Uusimme vuosittain verkkotunnuksen automaattisesti.</li>
                <li>- Ilmaiset nimipalvelimet tarvittaessa (<a class="text-blue-500 hover:underline" href="https://www.cloudflare.com/" title="Suojaa palvelusi Cloudflaren avulla" target="_blank" hreflang="en">Cloudflare</a>).</li>
                <li>- Sähköpostiasiat kuntoon.</li>
                <li>- Verkkotunnuksien rekisteröinnissä mahdollisimman halvat hinnat sekä mahdollisesti muita rahan arvoisia vinkkejä tulevaisuudelle.</li>
            </ul>
		    
            <p>Emme usko määräaikaisiin sopimuksiin vaan verkkotunnus on aina sinun eli voit koska tahansa siirtää verkkotunnuksen meiltä toiselle palveluntarjoajalle tai vaihtaa haluamasi nimipalvelimet siihen.</p>
		    <p>Hoidamme tarvittaessa myös yrityksesi sähköpostipalvelut kuntoon. Meiltä onnistuvat omalla verkkotunnuksella ilmaiset Gmail tai Outlook sekä maksulliset <a class="text-blue-500 hover:underline" href="https://gsuite.google.fi/intl/fi/" title="Tuttu ja turvallinen Gmail yritysten tarpeisiin räätälöitynä." hreflang="fi">GSuite</a> tai <a class="text-blue-500 hover:underline" href="https://www.office.com/?omkt=fi-FI" title="Sähköposti ja Office-sovellusten Premium-versiot" hreflang="fi">Office 365</a>. Myös käyttöopastusta.</p>
		    <p>Riippumatta siitä kuka huolehtii kotisivujen hyvinvoinnista, suosittelemme käyttämään maksutonta Cloudflare-palvelua (mm. nimipalvelut, kotisivujen suojaus, parempi välimuisti), koska sen avulla on mahdollista nopeuttaa huomattavasti kansainvälistä liikennettä sivustolla sekä suojata yrityksen kotisivut paremmin mahdollisilta palvelunestohyökkäyksiltä. Cloudflarella on palvelimia ympäri maailman, joten jos sivustosi käyttää heidän välimuistia vierailija vierailee todellisuudessa lähimmällä serverillä mikä saattaa vähentää huomattavasti latausaikaa.</p>
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