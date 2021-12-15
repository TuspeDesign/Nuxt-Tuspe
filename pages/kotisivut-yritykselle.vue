<template>
    <div class="container mx-auto py-10 font-serif">
        <div class="grid grid-cols-2 gap-6">
            <div class="m-auto">
                <img class="rounded-3xl" src="https://tuspe.com/images/websites-page.webp">
            </div>

             <div class="m-auto">
                <h1 class="text-4xl text-blue-900">Suunnittelua ja toteutusta suurella sydämellä</h1>
                <p class="mt-10 text-">Tehdäänkö asioista helppoa ja sujuvaa? Verkkoviidakossa suunnistamisen ei tarvitse olla hankalaa ja aikaa vievää. Jos haluat yrityksesi koko verkkonäkyvyyden kerralla kuntoon, olet juuri nyt oikeassa osoitteessa.</p>
                <p class="mt-5">Kokemus, aito into ja asiakkaiden toimeksiannot sydämellä tehtynä luovat tekemisemme moottorin. Emme lupaa kuuta taivaalta, mutta meillä kotisivusi ja verkkokauppasi suunnittelu ja toteutus ovat luotettavissa käsissä.</p>
                <p class="mt-5">Paiskataanko kättä ja laitetaan hihat heilumaan?</p>

                <button class="mt-10 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" @click="goToYhteys()"> Luodaan fiiliksiä! </button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 m-auto mx-15 px-20 text-center">
            <h2 class="text-3xl text-blue-900 mt-20">Avaimet käteen</h2>

            <p class="mt-1">Se tunne, kun jäät koukkuun hyvään kirjaan tai sarjaan.. Mitäs jos luotaisiin sama fiilis asiakkaallesi kotisivuistasi?</p>
		    <p class="mt-5">Olipa kyseessä kotisivut tai <a class="text-blue-500 hover:underline" href="/verkkokauppa-yritykselle">verkkokauppa yrityksellesi</a>, saat meiltä avaimet käteen-ratkaisun. Lopputulos ei ole pelkkä teknisesti kaunis toteutus vaan viisaasti rakennettu myyntikanava, jonka sisältö ja ulkoasu puhuttelevat asiakkaitasi juuri oikealla tavalla. Luodaan sinun yrityksen näköinen kotisivu.</p>
		    <p class="mt-5">Kotisivuilla on suuri merkitys edelleen tämän päivän digimaailmassa. Kotisivu on alusta, jossa kerrot yrityksesi tarinan ja saat asiakkaasi kiinnostumaan tuotteistasi ja palveluistasi. Se on myyntikanava ja yrityksesi kotipaikka verkossa. Somekanavat voivat tukea myyntiä ja näkyvyyttä, mutta omat kotisivut tiivistää kaiken yhteen paikkaan.</p>
		    <p class="mt-5">Kun mietit yhteistyökumppania kotisivujesi tekijälle, huomio suunnittelussa, toteutuksessa ja hinnassa, mitä kaikkea todellisuudessa saat:</p>
		    <ul>
			    <li class="mt-1">Tarvitsetko vain teknisen ratkaisun, jonne tuotat itse sisällön?</li>
			    <li class="mt-1">Mitä analytiikkatyökaluja tarvitaan, jotta asiakkaasi ja sidosryhmäsi löytävät yrityksesi tuotteet ja palvelut?</li>
			    <li class="mt-1">Mikä on <a href="/hakukoneoptimointi">avainsanatutkimus</a>? Erittäin tärkeä sisällön suunnittelun lähtökohta, jossa kotisivujesi kertova teksti optimoidaan niin, että asiakkaasi löytävät hakemillaan sanoilla hakukoneiden kautta juuri sinun yrityksesi.</li>
			    <li class="mt-1">Onko kotisivujen päivittäminen vaikeaa? Ei ole ja kyllä osaat, kun asiat kerrotaan ja opastetaan ymmärrettävästi sinulle kuten me teemme.</li>
			    <li class="mt-1">Miten ja mistä hankkia <a href="/verkkotunnus">verkkotunnus</a> (domain)? Ei hätää, me hoidamme tarvittaessa kaiken puolestasi, jonka jälkeen verkkotunnuksen hallinta on joko sinun nimipalvelimilla tai meidän lisämaksuttomilla. Me emme veloita ryöstöhintoja verkkotunnuksen vuosimaksuista.</li>
			    <li class="mt-1">Millaisia <a href="/yllapito">ylläpitopalveluita</a> tarvitsen?</li>
		    </ul>
		    <p class="mt-5">Et jää yksin näiden kysymysten kanssa vaan me olemme valmiit auttamaan sinut ylitse ongelmien. Laske alustava tarjous kotisivuillesi sen mukaan, miten kattavan kokonaisuuden haluat.</p>
        
            <h2 class="text-3xl text-blue-900 mt-10 text-center">Muutama esimerkki ylpeydenaiheistamme</h2>
            <p class="mt-1 text-center">Liitetäänkö sinunkin yrityksesi tähän huippujoukkueeseen?</p>
        </div>

        <div class="grid grid-cols-4 gap-7 m-auto mx-20 mt-10">
            <p><a href="https://venehotelli.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-venehotelli-2020.webp">
			</a></p>
            <p><a href="https://www.ratsukko.com/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-ratsukko-2020.webp">
			</a></p>
            <p><a href="https://quje.fi/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-quje-2020.webp">
			</a></p>
            <p><a href="https://www.hamari.pro/">
				<img class="rounded-3xl transform hover:scale-110 duration-300" src="https://tuspe.com/images/references/ref-processwire-hamari-2018.webp">
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