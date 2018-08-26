<template>
<div id="home">
    <section class="site-info">
        <form>
            <fieldset>
                <h4>Company Info :</h4>
                <div class="form-group">
                <label >Name</label>
                <input v-model="companyName" type="text" class="form-control" id="Company-name"  placeholder="Enter Name" >              
                </div>
                <div class="form-group">
                <label >PIVA</label>
                <input v-model="piva"  type="text" class="form-control" id="Company-piva"  placeholder="Enter PIVA">              
                </div>
                <div class="form-group">
                <label >Address</label>
                <input v-model="address" type="text" class="form-control" id="Company-email"  placeholder="Enter Address">              
                </div>
                <div class="form-group">
                <label >Email address</label>
                <input v-model="email" type="email" class="form-control" id="Company-email"  placeholder="Enter email">              
                </div>
                <div class="form-group">
                <label >Tel</label>
                <input v-model="tel" type="text" class="form-control" id="Company-tel"  placeholder="Enter Tel">              
                </div>
            </fieldset> 
            <fieldset>
              <h4>Demo Settings</h4>
              <div class="form-group">
                <label for="exampleSelect1">Website Sections number</label>
                <div>
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#">&laquo;</a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">4</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">5</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">6</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">7</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">8</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">9</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">10</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">&raquo;</a>
                        </li>
                    </ul>
                </div>
              </div>
              <div class="form-group">
                    <label for="exampleSelect1">Website Language</label>
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary active">IT</button>
                        </div>
                        <div class="btn-group mr-2" role="group" aria-label="Second group">
                            <button type="button" class="btn btn-secondary">EN</button>
                        </div>
                        <div class="btn-group  mr-2" role="group" aria-label="Third group">
                          <button type="button" class="btn btn-secondary">FR</button>
                        </div>
                        <div class="btn-group  mr-2" role="group" aria-label="fourth group">
                            <button type="button" class="btn btn-secondary">DU</button>
                        </div>
                    </div>
              </div>
            </fieldset>
            <!--<button type="button" class="btn btn-success btn-lg btn-block">GENERATE</button>-->
          </form>
    </section>
    <br>
    <section class="tabs">
            <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a v-on:click="tab = 'privacy'" v-bind:class="{ active: tab == 'privacy' }" class="nav-link" data-toggle="tab" href="#">Privacy</a>
                    </li>
                    <li class="nav-item">
                      <a v-on:click="tab = 'web-policy-privacy'" v-bind:class="{ active: tab == 'web-policy-privacy' }" class="nav-link" data-toggle="tab" href="#">Web Policty Privacy</a>
                    </li>
                    <li class="nav-item">
                      <a v-on:click="tab = 'contact'" v-bind:class="{ active: tab == 'contact' }" class="nav-link" data-toggle="tab" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a v-on:click="tab = 'functions'" v-bind:class="{ active: tab == 'functions' }" class="nav-link " data-toggle="tab" href="#">functions.php</a>
                    </li>
                    <li class="nav-item">
                        <a  v-on:click="tab = 'front-page'" v-bind:class="{ active: tab == 'front-page' }" class="nav-link" data-toggle="tab" href="#">front-page.php</a>
                    </li>
                  </ul>
                  <div id="myTabContent" class="tab-content">
                    <div v-if="tab == 'privacy'" class="tab-pane fade active show" id="privacy">
                        <section>
                            <prism>{{privacyCode()}}</prism>
                            <button class="btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect">
                            <i class="fa fa-copy mr-1"></i> Copy code
                            </button>
                        </section>
                    </div>
                    <div v-if="tab == 'web-policy-privacy'" class="tab-pane fade active show" id="web-policy-privacy">
                        <section>
                            <prism>{{webPolicyPrivacyCode()}}</prism>
                            <button class="btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect">
                            <i class="fa fa-copy mr-1"></i> Copy code
                            </button>
                        </section>
                    </div>
                    <div v-if="tab == 'contact'" class="tab-pane fade active show" id="Contact">
                        <section>
                            <prism>{{contactCode()}}</prism>
                            <button class="btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect">
                            <i class="fa fa-copy mr-1"></i> Copy code
                            </button>
                        </section>
                    </div>
                    <div v-if="tab == 'functions'" class="tab-pane fade active show" id="functions.php">
                        <section>
                            <prism>{{functionsCode()}}</prism>
                            <button class="btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect">
                            <i class="fa fa-copy mr-1"></i> Copy code
                            </button>
                        </section>
                    </div>
                    <div v-if="tab == 'front-page'" class="tab-pane fade active show" id="front-page.php">
                        <section>
                            <prism>{{frontPageCode()}}</prism>
                            <button class="btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect">
                            <i class="fa fa-copy mr-1"></i> Copy code
                            </button>
                        </section>
                    </div>
                  </div>
    </section>
</div>
</template>

<script>



export default {
    name: 'Home',
    data (){
        return{
            companyName: "",
            piva: "",
            address: "",
            email: "",
            tel: "",
            sections: "",
            language: "",
            tab: "privacy",
            isActive: true,
            privacyCode: function(){
return `
Ai sensi dell’art 13 del D.Lgs. 196/2003 (Codice in materia di protezione dei dati personali) la scrivente <strong>${this.companyName}</strong>, in qualità di titolare del trattamento, informa che i dati personali acquisiti con riferimento ai rapporti commerciali instaurati formeranno oggetto di trattamento nel rispetto della normativa sopra richiamata.
<br>
In relazione ai suddetti trattamenti fornisce inoltre le seguenti informazioni.
<br>
Le finalità del trattamento dei dati personali da Voi conferiti sono: esecuzione dei contratti con Voi stipulati e dei connessi impegni, adempimento degli obblighi di legge connessi al rapporto contrattuale, gestione organizzativa del contratto, eventuali collaborazioni professionali esterne per l’adempimento degli obblighi di legge, tutela dei diritti contrattuali, analisi statistiche interne, attività di marketing attraverso l’invio di materiale promozionale e pubblicitario inerente prodotti o servizi analoghi a quelli oggetto del rapporto commerciale in essere, nelle situazioni già autorizzate con l’espressione del consenso.
<br>
I dati personali verranno trattati in forma cartacea, informatizzata e telematica ed inseriti nelle pertinenti banche dati cui potranno accedere, e quindi venirne a conoscenza, gli incaricati al trattamento dei dati espressamente designati dal titolare come incaricati del trattamento dei dati personali e che potranno effettuare operazioni di consultazione, utilizzo, elaborazione, raffronto ed ogni altra opportuna operazione anche automatizzata nel rispetto delle disposizioni di legge atte a garantire, tra l’altro, la riservatezza e la sicurezza dei dati nonché l’esattezza, l’aggiornamento e la pertinenza dei dati rispetto alle finalità dichiarate.
<br>
Il conferimento dei dati anagrafici è in relazione all’espletamento di tutte le attività necessarie e funzionali all’esecuzione degli obblighi contrattuali e legali. Ne consegue che l’eventuale rifiuto a fornire i dati per tali finalità potrà determinare l’impossibilità della scrivente a dar corso ai rapporti contrattuali medesimi e agli obblighi di legge.
<br>
I dati potranno essere comunicati alle seguenti categorie di soggetti:
<br>
– ente poste, aziende di trasporto e spedizionieri per gli aspetti connessi alle spedizioni di merci e le pratiche doganali;
– istituti bancari per la gestione di incassi e pagamenti; amministrazioni finanziarie e altri aziende o enti pubblici in adempimento di obblighi normativi;
– società e studi legali per la tutela dei diritti contrattuali;
– agenti, rappresentanti, procacciatori che operano per la scrivente, aziende appaltatrici, lavoratori autonomi e aziende committenti;
– società di recupero crediti;
– nostri altri clienti e fornitori;
– altre società esterne in ottemperanza a obblighi contrattuali derivanti dalla normale attività aziendale.
<br>
Non è prevista la diffusione dei dati personali. In relazione ai predetti trattamenti potranno essere esercitati i diritti di cui all’articolo 7 D.Lgs. 196/2003, nei limiti ed alle condizioni previste dagli articolo 8, 9 e 10 del citato decreto legislativo, scrivendo o mettendosi in contatto con:
<br>
<strong>${this.companyName}</strong>
${this.address} – <a href="mailto:${this.email}">${this.email}</a> – P.Iva: ${this.piva}`;},
            webPolicyPrivacyCode: function(){
                return `
<div class="cookie-privacy">
<p><strong>Maggio 2015</strong></p>
<p><strong>Web Policy Privacy </strong><br>
La presente informativa, ai sensi dell’art. 13 del d.lgs. 196/2003 (di seguito, “<strong>Codice Privacy</strong>”) descrive le modalità di gestione del presente sito web di titolarità di&nbsp; <strong>${this.companyName}</strong> in riferimento al trattamento dei dati personali degli utenti che lo consultano, anche ai sensi di quanto richiesto dal Provvedimento del Garante della Privacy del 8.05.2014 “Individuazione delle modalità semplificate per l’informativa e l’acquisizione del consenso per l’uso dei cookie” (di seguito, “<strong>Provvedimento</strong>”).<br>
L’informativa è resa soltanto per il sito sopra menzionato e non anche per altri siti web o sezioni/pagine/spazi di titolarità di terzi – eventualmente consultati dall’utente tramite appositi link presenti all’interno dello stesso.</p>
<p><strong>1. TIPOLOGIA DI DATI TRATTATI E FINALITA’ DEL TRATTAMENTO</strong><br>
<strong>1.1. Dati di navigazione</strong><br>
I sistemi informatici e gli applicativi dedicati al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet.<br>
Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti che si connettono al sito. Tra i dati raccolti sono compresi gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all’ambiente informatico dell’utente.<br>
Questi dati vengono trattati, per il tempo necessario al raggiungimento della finalità per cui sono raccolti, al solo fine di ricavare informazioni statistiche anonime sull’uso del sito (accessi allo stesso) e per controllarne il regolare funzionamento.<br>
I dati potrebbero essere utilizzati per l’accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito.</p>
<p><strong>1.2. Dati forniti volontariamente dall’utente</strong><br>
Qualora agli utenti del presente sito sia richiesto, per accedere a determinati servizi, di conferire propri dati personali, sarà previamente rilasciata, nelle pagine relative ai singoli servizi, apposita e dettagliata Informativa sul relativo trattamento ai sensi dell’art. 13 del <a href="http://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">Codice</a> Privacy che specificherà limiti, finalità e modalità del trattamento stesso.</p>
<p><strong>1.3. Cookies</strong><br>
<strong><em>Cosa sono i cookie?</em></strong><br>
I cookie sono piccoli file di testo che vengono inviati dal sito web visitato dall’utente sul dispositivo dell’utente (solitamente al browser), dove vengono memorizzati in modo da poter riconoscere tale dispositivo alla successiva visita. Ad ogni visita successiva, infatti, i cookie sono reinviati dal dispositivo dell’utente al sito.<br>
Ciascun cookie contiene generalmente: il nome del server da cui il cookie è stato inviato; la scadenza ed un valore, solitamente un numero unico generato a caso dal computer Il server del sito web che trasferisce il cookie utilizza questo numero per riconoscervi quando tornate a visitare un sito o navigate da una pagina all’altra.<br>
I cookie possono essere istallati non solo dallo stesso gestore del sito visitato dall’utente (<strong>cookie di prima parte</strong>), ma anche da un sito diverso che istalla cookie per il tramite del primo sito (<strong>cookie di terze parti</strong>) ed è in grado di riconoscerli. Questo accade perché sul sito visitato possono essere presenti elementi (immagini, mappe, suoni, link a pagine web di altri domini, etc) che risiedono su server diversi da quello del sito visitato.<br>
In base alla finalità, i cookie si distinguono in <strong>cookie tecnici</strong> ed in <strong>cookie di profilazione</strong>.<br>
I cookie tecnici sono quelli utilizzati al solo fine di “<em>effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica, o nella misura strettamente necessaria al fornitore di un servizio della società dell’informazione esplicitamente richiesto dall’abbonato o dall’utente a erogare tale servizio</em>” (cfr. art. 122, co. 1, del Codice Privacy, come modificato dal d.lgs. 69/2012). In particolare, tali cookie sono solitamente usati per consentire una navigazione efficiente tra le pagine, memorizzare le preferenze (lingua, paese, ecc) &nbsp;degli utenti, effettuare autenticazioni informatiche, gestire il carrello degli acquisti o&nbsp; consentire acquisti online, etc. Alcuni di questi cookie (detti essenziali o <em>strictly necessary</em>) abilitano funzioni senza le quali non sarebbe possibile effettuare alcune operazioni. Ai sensi del suddetto art. 122, co. 1 del Codice Privacy l’utilizzo dei cookie tecnici non richiede il consenso degli utenti.<br>
Ai cookie tecnici sono assimilati i <strong>cookie cd. analytics </strong>se utilizzati direttamente dal gestore del sito ai&nbsp; per raccogliere informazioni aggregate sul numero degli utenti e su come questi visitano il sito stesso. Tali cookie consentono ai titolari e/o ai gestori dei siti web di capire come gli utenti interagiscono con i contenuti del sito ai fini di ottimizzazione dello stesso.<br>
I <strong>cookie di profilazione</strong> servono a tracciare la navigazione dell’utente, analizzare il suo comportamento ai fini marketing e creare profili sui suoi gusti, abitudini, scelte, etc in modo da trasmettere messaggi pubblicitari mirati in relazione agli interessi dell’utente stesso ed in linea con le preferenze da questi manifestati nella navigazione on line. Tali cookie possono essere istallati sul terminale dell’utente solo se questo abbia espresso il proprio consenso con le modalità semplificate&nbsp; indicate nel Provvedimento.<br>
In base alla loro durata, i cookie si distinguono in <strong>persistenti</strong>, che rimangono memorizzati, fino alla loro scadenza, sul dispositivo dell’utente, salva rimozione da parte di quest’ultimo, e <strong>di sessione</strong>, che non vengono memorizzati in modo persistente sul dispositivo dell’utente e svaniscono con la chiusura del browser.</p>
<p><strong><em><u>Quali cookie sono utilizzati dal presente sito? </u></em></strong><br>
<strong><em>a. Cookie tecnici.</em></strong><br>
Il presente sito fa uso di <strong>cookie tecnici</strong>, istallati dal sito stesso al fine di monitorare il funzionamento del sito e consentire una navigazione efficiente sullo stesso.<br>
Di seguito, sono riportati, per ciascun cookie tecnico che potrebbe essere utilizzato, il nome, la finalità di utilizzo e la tipologia/durata.</p>
<table border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="bottom" width="32%"><strong>NOME</strong></td>
<td width="39%"><strong>FINALITÀ</strong></td>
<td width="28%"><strong>TIPOLOGIA/DURATA</strong></td>
</tr>
<tr>
<td valign="bottom" width="32%">PHPSESSID</td>
<td valign="top" width="39%">cookie di sessione</td>
<td valign="top" width="28%">End of browser session</td>
</tr>
<tr>
<td valign="bottom" width="32%">_icl_current_language=en</td>
<td valign="top" width="39%">gestione lingue</td>
<td valign="top" width="28%">End of browser session</td>
</tr>
<tr>
<td valign="bottom" width="32%">wp_woocommerce_session_</td>
<td valign="top" width="39%">cookie di sessione modulo e-commerce</td>
<td valign="top" width="28%">End of browser session</td>
</tr>
<tr>
<td valign="bottom" width="32%">of_current_opt</td>
<td valign="top" width="39%">cookie di gestione del cms</td>
<td valign="top" width="28%">End of browser session</td>
</tr>
<tr>
<td valign="bottom" width="32%">wp-settings-time-</td>
<td valign="top" width="39%">cookie di gestione del cms</td>
<td valign="top" width="28%">1 year</td>
</tr>
<tr>
<td valign="bottom" width="32%">wp-settings-</td>
<td valign="top" width="39%">cookie di gestione del cms</td>
<td valign="top" width="28%">1 year</td>
</tr>
<tr>
<td width="32%">mc4wp_email</td>
<td valign="top" width="39%">cookie di gestione del cms in relazione a Mailchimp</td>
<td valign="top" width="28%">1 year</td>
</tr>
</tbody>
</table>
<p>I suddetti cookie non possono essere disabilitati utilizzando le funzioni di questo sito web, ma possono essere disattivati tramite le impostazioni del proprio browser in qualsiasi istante (con le modalità di seguito indicate). La loro disattivazione potrebbe precludere la fruizione ottimale di alcune aree del sito<strong>. </strong></p>
<p><strong><em>b. Cookie di performance e analytics</em></strong><br>
Sono utilizzati anche cookie <strong>analytics </strong>al fine di analizzare statisticamente &nbsp;il traffico sul sito, conteggiare gli accessi o le visite al sito stesso e consentire al titolare, anche grazie alle stime sui numeri e sui modelli di consumo, di migliorarne la struttura, le logiche di navigazione e i contenuti, di adattarlo agli interessi degli utenti, di accelerare le ricerche, ecc.<br>
Di seguito, sono riportati, per ciascun cookie analytics utilizzato, il nome, la finalità di utilizzo, la tipologia/durata e l’origine.</p>
<table border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="16%"><strong>NOME</strong></td>
<td width="47%"><strong>FINALITÀ</strong></td>
<td width="17%"><strong>TIPOLOGIA/DURATA</strong></td>
<td width="18%"><strong>ORIGINE</strong></td>
</tr>
<tr>
<td colspan="4" valign="bottom" width="100%"><strong>GOOGLE ANALYTICS</strong></td>
</tr>
<tr>
<td valign="top" width="16%">_ga</td>
<td rowspan="10" valign="top" width="47%">
<p align="center">Raccogliere informazioni statistiche circa l’utilizzo del sito da parte degli utenti, in particolare, sapere quanti sono ritornati e da dove sono venuti, quanti sono arrivati dai motori di ricerca, quanti sono arrivati direttamente al nostro URL, sapere quali pagine hanno visitato etc..</p>
</td>
<td valign="top" width="17%">2 years</td>
<td rowspan="10" valign="top" width="18%">
<p align="center">Google<br>
per maggiori informazioni sul servizio Google Analytics si veda http://www.google.it/analytics e https://www.google.com/analytics/learn/privacy.html?hl=it</p>
</td>
</tr>
<tr>
<td valign="top" width="16%">_gat</td>
<td valign="top" width="17%">10 minutes</td>
</tr>
<tr>
<td valign="top" width="16%">__utma</td>
<td valign="top" width="17%">2 years from set/update</td>
</tr>
<tr>
<td valign="top" width="16%">__utmt</td>
<td valign="top" width="17%">10 minutes</td>
</tr>
<tr>
<td valign="top" width="16%">__utmb</td>
<td valign="top" width="17%">30 mins from set/update</td>
</tr>
<tr>
<td valign="top" width="16%">__utmc</td>
<td valign="top" width="17%">End of browser session</td>
</tr>
<tr>
<td valign="top" width="16%">__utmz</td>
<td valign="top" width="17%">6 months from set/update</td>
</tr>
<tr>
<td valign="top" width="16%">__utmv</td>
<td valign="top" width="17%">2 years from set/update</td>
</tr>
<tr>
<td valign="top" width="16%">__utmx</td>
<td valign="top" width="17%">18 months</td>
</tr>
<tr>
<td valign="top" width="16%">__utmxx</td>
<td valign="top" width="17%">18 months</td>
</tr>
<tr>
<td colspan="4" valign="top" width="100%"><strong>PIWIK</strong></td>
</tr>
<tr>
<td valign="top" width="16%">_pk_id.</td>
<td rowspan="4" valign="top" width="47%">
<p align="center">Raccogliere informazioni statistiche circa l’utilizzo del sito da parte degli utenti, in particolare, sapere quanti sono ritornati e da dove sono venuti, quanti sono arrivati dai motori di ricerca, quanti sono arrivati direttamente al nostro URL, sapere quali pagine hanno visitato etc..</p>
</td>
<td valign="top" width="17%">2 years from set/update</td>
<td rowspan="4" valign="top" width="18%">
<p align="center">psmstats.com by Piwik<br>
per maggiori informazioni sul servizio Piwik si veda http://piwik.org/privacy/</p>
</td>
</tr>
<tr>
<td valign="top" width="16%">_pk_ses.</td>
<td valign="top" width="17%">End of browser session</td>
</tr>
<tr>
<td valign="top" width="16%">_pk_ref.</td>
<td valign="top" width="17%">6 months from set/update</td>
</tr>
<tr>
<td valign="top" width="16%">_pk_cvar.</td>
<td valign="top" width="17%">End of browser session</td>
</tr>
</tbody>
</table>
<p><strong>&nbsp;</strong></p>
<p><strong><em>c. Cookie di profilazione</em></strong><strong>.</strong><br>
<strong>Cookie di profilazione di terze parti</strong><br>
Nel corso della navigazione sul presente sito, l’utente potrebbe ricevere sul suo terminale cookie di profilazione installati e gestiti da terze parti al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dall’utente nell’ambito della sua navigazione in rete. Ciò accade perché, come sopra indicato, sul sito possono essere presenti elementi che risiedono su server diversi da quello sul quale si trova il sito visitato. Laddove terze parti impostino cookie mentre visitate il presente sito, ottengono informazioni relative al fatto che gli utenti lo hanno visitato. Maggiori informazioni sull’impiego dei cookie sono disponibili accedendo al link di seguito indicato al sito della terza parte. Il diniego del consenso all’utilizzo dei cookie di profilazione di terze parti non interferisce sulla possibilità di accedere al sito.<br>
<strong>Di seguito, </strong><strong>riportiamo il nome dei cookie di terza parte che potrebbero essere istallati da quest’ultima tramite il sito, lo scopo, il nome della terza parte ed il link al sito di quest’ultima.</strong></p>
<table border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="bottom" width="21%"><strong>Nome</strong></td>
<td valign="bottom" width="36%"><strong>Finalità</strong></td>
<td valign="bottom" width="14%"><strong>Terza Parte</strong></td>
<td valign="bottom" width="28%"><strong>Link al sito ove visionare l’informativa privacy della terza parte</strong></td>
</tr>
<tr>
<td valign="top" width="21%">locale</td>
<td rowspan="8" valign="top" width="36%">
<p align="center">Facebook usa i cookie per diversi motivi, ad esempio per poterti mostrare contenuti e inserzioni più pertinenti, per migliorare i prodotti e servizi e per garantire la sicurezza nei Servizi.</p>
</td>
<td rowspan="8" valign="top" width="14%">
<p align="center">Facebook</p>
</td>
<td rowspan="8" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
https://www.facebook.com/help/cookies/</p>
</td>
</tr>
<tr>
<td valign="top" width="21%">datr</td>
</tr>
<tr>
<td valign="top" width="21%">xs</td>
</tr>
<tr>
<td valign="top" width="21%">s</td>
</tr>
<tr>
<td valign="top" width="21%">lu</td>
</tr>
<tr>
<td valign="top" width="21%">fr</td>
</tr>
<tr>
<td valign="top" width="21%">csm</td>
</tr>
<tr>
<td valign="top" width="21%">c_user</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="bottom" width="14%"></td>
<td valign="bottom" width="28%"></td>
</tr>
<tr>
<td width="21%">ServerPool</td>
<td rowspan="7" valign="top" width="36%">
<p align="center">Tripadvisor utilizza i cookie per è comprendere come gli utenti utilizzino i loro servizi e di come questi possano essere migliorati.</p>
</td>
<td rowspan="7" valign="top" width="14%">
<p align="center">Tripadvisor</p>
</td>
<td rowspan="7" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
http://www.tripadvisor.it/pages/privacy.html</p>
</td>
</tr>
<tr>
<td width="21%">TASSK</td>
</tr>
<tr>
<td width="21%">TAUnique</td>
</tr>
<tr>
<td width="21%">TATravelInfo</td>
</tr>
<tr>
<td width="21%">CM</td>
</tr>
<tr>
<td width="21%">TASession</td>
</tr>
<tr>
<td width="21%">TACds</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="bottom" width="14%"></td>
<td valign="bottom" width="28%"></td>
</tr>
<tr>
<td valign="bottom" width="21%">__utma</td>
<td rowspan="13" valign="top" width="36%">
<p align="center">Twitter usa queste tecnologie per fornire, valutare e migliorare i propri servizi sotto diversi punti di vista.</p>
</td>
<td rowspan="13" valign="top" width="14%">
<p align="center">Twitter</p>
</td>
<td rowspan="13" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze: https://support.twitter.com/articles/20170519-uso-dei-cookie-e-di-altre-tecnologie-simili-da-parte-di-twitter</p>
</td>
</tr>
<tr>
<td valign="bottom" width="21%">__utmv</td>
</tr>
<tr>
<td valign="bottom" width="21%">__utmz</td>
</tr>
<tr>
<td valign="bottom" width="21%">auth_token</td>
</tr>
<tr>
<td valign="bottom" width="21%">guest_id</td>
</tr>
<tr>
<td valign="bottom" width="21%">pid</td>
</tr>
<tr>
<td valign="bottom" width="21%">remember_checked</td>
</tr>
<tr>
<td valign="bottom" width="21%">remember_checked_on</td>
</tr>
<tr>
<td valign="bottom" width="21%">secure_session</td>
</tr>
<tr>
<td valign="bottom" width="21%">twll</td>
</tr>
<tr>
<td valign="bottom" width="21%">dnt</td>
</tr>
<tr>
<td valign="bottom" width="21%">eu_cn</td>
</tr>
<tr>
<td valign="bottom" width="21%">external_referer</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="bottom" width="14%"></td>
<td valign="bottom" width="28%"></td>
</tr>
<tr>
<td valign="bottom" width="21%">PREF</td>
<td rowspan="20" valign="top" width="36%">
<p align="center">Google utilizza cookie per pubblicare annunci pubblicitari sulla base delle precedenti visite effettuate dagli utenti sul presente sito web.</p>
</td>
<td rowspan="20" valign="top" width="14%">
<p align="center">Google</p>
</td>
<td rowspan="20" valign="top" width="28%">
<p align="center">Per informazioni su come disattivare l’utilizzo dei cookie da parte di Google, visionare la pagina Preferenze annunci di Google alla URL http://www.google.com/settings/ads.<br>
In alternativa, visionare la pagina di disattivazione della Network Advertising Initiative http://www.networkadvertising.org/managing/opt_out.asp<br>
Gli utenti che intendono impedire l’istallazione sul proprio terminale dei cookie relativi a Google Analytics, possono scaricare e installare all’indirizzo <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a> il componente aggiuntivo del browser per la disattivazione di Google Analytics, sviluppato da Google, seguendo le istruzioni fornite</p>
</td>
</tr>
<tr>
<td valign="bottom" width="21%">lbcs</td>
</tr>
<tr>
<td valign="bottom" width="21%">ACCOUNT_CHOOSER</td>
</tr>
<tr>
<td valign="bottom" width="21%">APISID</td>
</tr>
<tr>
<td valign="bottom" width="21%">SAPISID</td>
</tr>
<tr>
<td valign="bottom" width="21%">HSID</td>
</tr>
<tr>
<td valign="bottom" width="21%">AID</td>
</tr>
<tr>
<td valign="bottom" width="21%">NID</td>
</tr>
<tr>
<td valign="bottom" width="21%">SID</td>
</tr>
<tr>
<td valign="bottom" width="21%">id</td>
</tr>
<tr>
<td valign="bottom" width="21%">_zlcmid</td>
</tr>
<tr>
<td valign="bottom" width="21%">_gat</td>
</tr>
<tr>
<td valign="bottom" width="21%">&nbsp;_drt_</td>
</tr>
<tr>
<td valign="bottom" width="21%">__gads</td>
</tr>
<tr>
<td valign="bottom" width="21%">exchange_uid</td>
</tr>
<tr>
<td valign="bottom" width="21%">FLC</td>
</tr>
<tr>
<td valign="bottom" width="21%">_ga_mftool</td>
</tr>
<tr>
<td valign="bottom" width="21%">TAID</td>
</tr>
<tr>
<td valign="bottom" width="21%">OGPC</td>
</tr>
<tr>
<td valign="bottom" width="21%">GAPS</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="top" width="36%"></td>
<td valign="top" width="14%"></td>
<td valign="top" width="28%"></td>
</tr>
<tr>
<td width="21%">uit</td>
<td rowspan="21" valign="top" width="36%">
<p align="center">Addthis usa i cookie per migliorare la qualità del sito e fornire pubblicità mirata e pertinente.</p>
</td>
<td rowspan="21" valign="top" width="14%">
<p align="center">Add This</p>
</td>
<td rowspan="21" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
http://www.addthis.com/privacy/</p>
</td>
</tr>
<tr>
<td width="21%">uvc</td>
</tr>
<tr>
<td width="21%">dt</td>
</tr>
<tr>
<td width="21%">di2</td>
</tr>
<tr>
<td width="21%">bt</td>
</tr>
<tr>
<td width="21%">vc</td>
</tr>
<tr>
<td width="21%">UID</td>
</tr>
<tr>
<td valign="bottom" width="21%">_conv_r</td>
</tr>
<tr>
<td valign="bottom" width="21%">_conv_s</td>
</tr>
<tr>
<td valign="bottom" width="21%">_conv_v</td>
</tr>
<tr>
<td valign="bottom" width="21%">km_ab_cbp</td>
</tr>
<tr>
<td valign="bottom" width="21%">km_ai</td>
</tr>
<tr>
<td valign="bottom" width="21%">guest_id</td>
</tr>
<tr>
<td valign="bottom" width="21%">&nbsp;__atuvc</td>
</tr>
<tr>
<td width="21%">UIDR</td>
</tr>
<tr>
<td width="21%">__atuvs</td>
</tr>
<tr>
<td width="21%">loc</td>
</tr>
<tr>
<td width="21%">pid</td>
</tr>
<tr>
<td width="21%">sess</td>
</tr>
<tr>
<td width="21%">uuid2</td>
</tr>
<tr>
<td width="21%">uuid</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="bottom" width="14%"></td>
<td valign="bottom" width="28%"></td>
</tr>
<tr>
<td width="21%">hcweb1_rc-hc</td>
<td rowspan="4" valign="top" width="36%">
<p align="center">HolidayCheck si avvale di AdServers di terzi per inserire avvisi pubblicitari sul Sito.</p>
</td>
<td rowspan="4" valign="top" width="14%">
<p align="center">Holiday Check</p>
</td>
<td rowspan="4" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
http://www.holidaycheck.it/</p>
</td>
</tr>
<tr>
<td width="21%">hc_agentuser</td>
</tr>
<tr>
<td width="21%">hc_agentagent</td>
</tr>
<tr>
<td width="21%">hcweb_branch</td>
</tr>
<tr>
<td width="21%"></td>
<td valign="top" width="36%"></td>
<td width="14%"></td>
<td valign="bottom" width="28%"></td>
</tr>
<tr>
<td width="21%">bcookie</td>
<td rowspan="2" valign="top" width="36%">
<p align="center">Linkedin usa i cookie per offrire pubblicità sia sul sito di LinkedIn che non, e offrire funzionalità personalizzate per l’utente attraverso i plugin di LinkedIn, come il pulsante “Condividi”</p>
</td>
<td rowspan="2" valign="top" width="14%">
<p align="center">Linkedin</p>
</td>
<td rowspan="2" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze: https://www.linkedin.com/legal/cookie-policy?trk=hp-cookie</p>
</td>
</tr>
<tr>
<td width="21%">_qca</td>
</tr>
<tr>
<td width="21%"></td>
<td valign="top" width="36%"></td>
<td valign="top" width="14%"></td>
<td valign="top" width="28%"></td>
</tr>
<tr>
<td valign="bottom" width="21%">__utmb</td>
<td rowspan="2" valign="top" width="36%">
<p align="center">Youtube utilizza i cookie anche quando l’utente interagisce con i servizi offerti ai partner, ad esempio servizi pubblicitari o funzioni di Google (proprietario di Youtube) che potrebbero venire visualizzate su altri siti.</p>
</td>
<td rowspan="2" valign="top" width="14%">
<p align="center">Youtube</p>
</td>
<td rowspan="2" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
https://www.youtube.com/?hl=it&amp;gl=IT</p>
</td>
</tr>
<tr>
<td width="21%">&nbsp;__atuvc</td>
</tr>
<tr>
<td width="21%"></td>
<td valign="top" width="36%"></td>
<td valign="top" width="14%"></td>
<td valign="top" width="28%"></td>
</tr>
<tr>
<td width="21%">__utma</td>
<td rowspan="9" valign="top" width="36%">
<p align="center">Meteo.it (Mediaset) usa questo tipo di informazione per fini statistici, come aiuto per migliorare i servizi offerti ai propri utenti.</p>
</td>
<td rowspan="9" valign="top" width="14%">
<p align="center">Meteo.it</p>
</td>
<td rowspan="9" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
http://www.meteo.it</p>
</td>
</tr>
<tr>
<td width="21%">__utmb</td>
</tr>
<tr>
<td width="21%">__utmc</td>
</tr>
<tr>
<td valign="bottom" width="21%">wt_nbg_Q3</td>
</tr>
<tr>
<td width="21%">__utmt</td>
</tr>
<tr>
<td width="21%">__utmz</td>
</tr>
<tr>
<td width="21%">IMRID</td>
</tr>
<tr>
<td width="21%">wteid_245406294797569</td>
</tr>
<tr>
<td width="21%">wtsid_245406294797569</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="bottom" width="14%"></td>
<td valign="top" width="28%"></td>
</tr>
<tr>
<td width="21%">PHPSESSID</td>
<td valign="top" width="36%">I cookie sono utilizzati per migliorare la navigazione globale dell’Utente e presentano informazioni pubblicitarie mirate in funzione degli interessi e del comportamento manifestato dall’Utente durante la&nbsp; navigazione.</td>
<td valign="top" width="14%">
<p align="center">wildix.com</p>
</td>
<td valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
https://www.wildix.com/it/informativa-privacy/</p>
</td>
</tr>
<tr>
<td width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="top" width="14%"></td>
<td valign="top" width="28%"></td>
</tr>
<tr>
<td width="21%">__cfduid</td>
<td rowspan="3" valign="top" width="36%">Zopim utilizza i cookie per visualizzare il contenuto personalizzato e pubblicità adeguata all’interno del Servizio e nelle visite successive.</td>
<td rowspan="3" valign="top" width="14%">
<p align="center">.zopim.com</p>
</td>
<td rowspan="3" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
https://www.zopim.com/privacy#cookie</p>
</td>
</tr>
<tr>
<td valign="bottom" width="21%">__zlcid</td>
</tr>
<tr>
<td valign="bottom" width="21%">__zprivacy</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="bottom" width="14%"></td>
<td valign="bottom" width="28%"></td>
</tr>
<tr>
<td width="21%">__utma</td>
<td rowspan="8" valign="top" width="36%">
<p align="center">Soundcloud.com utilizza cookie per pubblicare annunci pubblicitari sulla base delle precedenti visite effettuate dagli utenti sul presente sito web.</p>
</td>
<td rowspan="8" valign="top" width="14%">
<p align="center">Soundcloud.com</p>
</td>
<td rowspan="8" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
https://soundcloud.com/pages/cookies</p>
</td>
</tr>
<tr>
<td width="21%">__utmb</td>
</tr>
<tr>
<td width="21%">__utmc</td>
</tr>
<tr>
<td valign="bottom" width="21%">sc_anonymous_id</td>
</tr>
<tr>
<td width="21%">__utmt</td>
</tr>
<tr>
<td width="21%">__utmz</td>
</tr>
<tr>
<td width="21%">UID</td>
</tr>
<tr>
<td width="21%">UIDR</td>
</tr>
<tr>
<td valign="bottom" width="21%"></td>
<td valign="bottom" width="36%"></td>
<td valign="bottom" width="14%"></td>
<td valign="bottom" width="28%"></td>
</tr>
<tr>
<td width="21%">SSR</td>
<td rowspan="2" valign="top" width="36%">
<p align="center">Shinystat usa cookies per la trasmissione di identificativi di sessione necessari per consentire l’esplorazione sicura ed efficiente del sito.</p>
</td>
<td rowspan="2" valign="top" width="14%">
<p align="center">shinystat.com</p>
</td>
<td rowspan="2" valign="top" width="28%">
<p align="center">Per informazioni e gestione delle preferenze<br>
http://shinystat.com/en/informativa_sito.html</p>
</td>
</tr>
<tr>
<td valign="bottom" width="21%">SSP</td>
</tr>
</tbody>
</table>
<p>Si segnala in ogni caso che gli utenti possono gestire le proprie preferenze sulla pubblicità comportamentale online (cd. “on line behavioural advertising”) tramite il sito <a href="http://www.youronlinechoices.com/it" target="_blank" rel="noopener noreferrer">www.youronlinechoices.com/it</a>, in cui sono elencati i principali provider di pubblicità comportamentale.&nbsp; Tramite tali sito, gli utenti possono disattivare o attivare tutte le società o in alternativa regolare le proprie preferenze individualmente per ogni società.</p>
<p><strong><em><u>Come si disattivano i cookie?</u></em></strong><br>
Di default quasi tutti i browser web sono impostati per accettare automaticamente i cookie. È&nbsp; &nbsp;comunque possibile modificare tale configurazione predefinita tramite le impostazioni del browser. La disabilitazione/il blocco dei cookies o la loro cancellazione potrebbe però precludere la fruizione ottimale di alcune aree del sito, impedire l’utilizzo di alcuni servizi e rendere la navigazione più lenta.<br>
La configurazione della gestione dei cookie dipende dal browser utilizzato. Solitamente, la configurazione dei cookie è effettuata dal menu “Preferenze”, “Strumenti” o “Opzioni”.<br>
Si riportano di seguito i link alle guide per le gestione dei cookie dei principali browser:<br>
Internet Explorer: <a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener noreferrer">http://support.microsoft.com/kb/278835</a><br>
Internet Explorer [versione mobile]: <a href="http://www.windowsphone.com/en-us/how-to/wp7/web/changing-privacy-and-other-browser-settings" target="_blank" rel="noopener noreferrer">http://www.windowsphone.com/en-us/how-to/wp7/web/changing-privacy-and-other-browser-settings</a><br>
Chrome: <a href="http://support.google.com/chrome/bin/answer.py?hl=en-GB&amp;answer=95647" target="_blank" rel="noopener noreferrer">http://support.google.com/chrome/bin/answer.py?hl=en-GB&amp;answer=95647</a><br>
Safari: <a href="http://docs.info.apple.com/article.html?path=Safari/5.0/en/9277.html" target="_blank" rel="noopener noreferrer">http://docs.info.apple.com/article.html?path=Safari/5.0/en/9277.html</a><br>
Safari [versione mobile]: <a href="http://support.apple.com/kb/HT1677" target="_blank" rel="noopener noreferrer">http://support.apple.com/kb/HT1677</a><br>
Firefox: <a href="http://support.mozilla.org/en-US/kb/Enabling%20and%20disabling%20cookies" target="_blank" rel="noopener noreferrer">http://support.mozilla.org/en-US/kb/Enabling%20and%20disabling%20cookies</a><br>
Android: <a href="http://support.google.com/mobile/bin/answer.py?hl=en&amp;answer=169022" target="_blank" rel="noopener noreferrer">http://support.google.com/mobile/bin/answer.py?hl=en&amp;answer=169022</a></p>
<p><strong>2. MODALITA’ DEL TRATTAMENTO</strong><br>
Il trattamento dei dati personali viene effettuato attraverso strumenti automatizzati (ad es. utilizzando procedure e supporti elettronici) e/o manualmente (ad es. su supporto cartaceo) per il tempo strettamente necessario a conseguire gli scopi per i quali i dati sono stati raccolti e, comunque, in conformità alle disposizioni normative vigenti in materia.</p>
<p><strong>3. TITOLARE DEL TRATTAMENTO</strong><br>
Il Titolare del trattamento dei dati personali è <strong>${this.companyName}</strong>.</p>
<p><strong>4. DIRITTI DEGLI INTERESSATI</strong><br>
I soggetti cui si riferiscono i dati personali hanno il diritto, in qualunque momento, di ottenere la conferma dell’esistenza o meno dei medesimi dati, di conoscerne il contenuto e l’origine, verificarne l’esattezza o chiederne l’integrazione o l’aggiornamento, oppure la rettificazione ai sensi dell’art. 7 del Codice Privacy. Ai sensi del medesimo articolo gli interessati hanno altresì il diritto di chiedere la cancellazione, la trasformazione in forma anonima o il blocco dei dati che li riguardano trattati in violazione di legge, nonché di opporsi in ogni caso, per motivi legittimi, al loro trattamento.<br>
Per qualunque informazione in merito al trattamento dei dati, nonché per l’esercizio dei diritti ex. <a title="Codice in materia di protezione dei dati personali" href="http://www.garanteprivacy.it/garante/navig/jsp/index.jsp?folderpath=Normativa%2FItaliana%2FIl+Codice+in+materia+di+protezione+dei+dati+personali" target="_blank" rel="noopener noreferrer">art 7 del Codice</a> Privacy, gli utenti possono inoltrare apposita richiesta (anche tramite posta elettronica) agli indirizzi indicati on line nella pagina dei Contatti raggiungibile dal footer del sito.</p>
</div>`;
            },
            contactCode: function(){
                return ``;
            },
            functionsCode: function(){
                return ``;
            },
            frontPageCode: function(){
                return ``;
            }
        }
    }
}

</script>

<style>


#home{
    background-color: rgba(2,2,2,0.7);
    width: 80%;
    height: 100vh;
    float: left;
    padding: 10px;
    text-align: left;
}
.form-group {
    width: 49%;
    float: left;
}

#home .btn-secondary.active{
    background-color: #00bc8c;
    border-color: #00bc8c;
}

.tab-pane{
    position: relative;
}

.tab-pane section pre {
    max-height: 200px !important;
}

.btn-copy-code {
    position: absolute;
    top: 8px;
    left: 20px;
    background: #00bc8c !important;
    color: #fff;
}

.fa-copy:before, .fa-files-o:before {
    content: "\f0c5";
}


:not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: rgba(34, 34, 34, 0.8) !important;
}

</style>
