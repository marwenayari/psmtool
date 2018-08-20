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
            <button type="button" class="btn btn-success btn-lg btn-block">GENERATE</button>
          </form>
    </section>
    <br>
    <section class="tabs">
            <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active show" data-toggle="tab" href="#privacy">Privacy</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link show" data-toggle="tab" href="#web-policy-privacy">Web Policty Privacy</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#">functions.php</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#">front-page.php</a>
                    </li>
                  </ul>
                  <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active show" id="privacy">
                    <div>
                        <section>
                        <div class="code-toolbar">
                            <pre class="code-toolbar language-markup">
                                <code class=" language-markup">
                                    Ai sensi dell’art 13 del D.Lgs. 196/2003 (Codice in materia di protezione dei dati personali) la scrivente {{companyName}}, in qualità di titolare del trattamento, informa che i dati personali acquisiti con riferimento ai rapporti commerciali instaurati formeranno oggetto di trattamento nel rispetto della normativa sopra richiamata.
                                    &lt;br&gt;
                                    In relazione ai suddetti trattamenti fornisce inoltre le seguenti informazioni.
                                    &lt;br&gt;
                                    Le finalità del trattamento dei dati personali da Voi conferiti sono: esecuzione dei contratti con Voi stipulati e dei connessi impegni, adempimento degli obblighi di legge connessi al rapporto contrattuale, gestione organizzativa del contratto, eventuali collaborazioni professionali esterne per l’adempimento degli obblighi di legge, tutela dei diritti contrattuali, analisi statistiche interne, attività di marketing attraverso l’invio di materiale promozionale e pubblicitario inerente prodotti o servizi analoghi a quelli oggetto del rapporto commerciale in essere, nelle situazioni già autorizzate con l’espressione del consenso.
                                    &lt;br&gt;
                                    I dati personali verranno trattati in forma cartacea, informatizzata e telematica ed inseriti nelle pertinenti banche dati cui potranno accedere, e quindi venirne a conoscenza, gli incaricati al trattamento dei dati espressamente designati dal titolare come incaricati del trattamento dei dati personali e che potranno effettuare operazioni di consultazione, utilizzo, elaborazione, raffronto ed ogni altra opportuna operazione anche automatizzata nel rispetto delle disposizioni di legge atte a garantire, tra l’altro, la riservatezza e la sicurezza dei dati nonché l’esattezza, l’aggiornamento e la pertinenza dei dati rispetto alle finalità dichiarate.
                                    &lt;br&gt;
                                    Il conferimento dei dati anagrafici è in relazione all’espletamento di tutte le attività necessarie e funzionali all’esecuzione degli obblighi contrattuali e legali. Ne consegue che l’eventuale rifiuto a fornire i dati per tali finalità potrà determinare l’impossibilità della scrivente a dar corso ai rapporti contrattuali medesimi e agli obblighi di legge.
                                    &lt;br&gt;
                                    I dati potranno essere comunicati alle seguenti categorie di soggetti:
                                    &lt;br&gt;
                                    – ente poste, aziende di trasporto e spedizionieri per gli aspetti connessi alle spedizioni di merci e le pratiche doganali;
                                    – istituti bancari per la gestione di incassi e pagamenti; amministrazioni finanziarie e altri aziende o enti pubblici in adempimento di obblighi normativi;
                                    – società e studi legali per la tutela dei diritti contrattuali;
                                    – agenti, rappresentanti, procacciatori che operano per la scrivente, aziende appaltatrici, lavoratori autonomi e aziende committenti;
                                    – società di recupero crediti;
                                    – nostri altri clienti e fornitori;
                                    – altre società esterne in ottemperanza a obblighi contrattuali derivanti dalla normale attività aziendale.
                                    &lt;br&gt;
                                    Non è prevista la diffusione dei dati personali. In relazione ai predetti trattamenti potranno essere esercitati i diritti di cui all’articolo 7 D.Lgs. 196/2003, nei limiti ed alle condizioni previste dagli articolo 8, 9 e 10 del citato decreto legislativo, scrivendo o mettendosi in contatto con:
                                    &lt;br&gt;
                                    &lt;strong&gt;{{companyName}}&lt;/strong&gt;
                                    {{address}} – &lt;a href="mailto:{{email}}"&gt;{{email}}&lt;/a&gt; – P.Iva: {{piva}}
                                </code>
                            </pre>
                            <div class="toolbar">
                                <div class="toolbar-item">
                                    <button class="btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect">
                                        <i class="fa fa-copy mr-1"></i> Copy code
                                    </button>
                                </div>
                            </div>
                        
                        </div>
                        </section>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="web-policy-privacy">
                      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                    </div>
                    <div class="tab-pane fade" id="Contact">
                      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                    </div>
                    <div class="tab-pane fade" id="functions.php">
                      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                    </div>
                    <div class="tab-pane fade" id="front-page.php">
                      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
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
            language: ""
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

.code-toolbar .btn-copy-code {
    position: absolute;
    top: 8px;
    left: 20px;
    background: #00bc8c !important;
    color: #fff;
}

.fa-copy:before, .fa-files-o:before {
    content: "\f0c5";
}

.code-toolbar {
    position: relative;
}

pre[class*=language-] {
    max-height: 250px;
    background-color: rgba(245, 242, 240, 0.2);
    color: #fff;
}

</style>
