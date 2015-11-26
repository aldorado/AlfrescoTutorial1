
var opBerichte = search.luceneSearch("TYPE:\"mu:opBericht\"");
var output = new Array();

/*
var test = new Array();
test.push(0);
test.push(1);


for(i in test){
    arzt = {};
    arzt.id = search.luceneSearch("@cm\\:name:\"" + i + "\"")[0].name;
    output.push(arzt);
}
*/
var bericht;
for(bericht in opBerichte){
    var opBericht = {};
    opBericht.id = opBerichte[bericht].name;
    opBericht.opDatum = opBerichte[bericht].properties["mu:opDatum"];
   // opBericht.Anmerkung = opBerichte[bericht].properties["mu:anmerkung"];

    //patient
    var patient = {};
    var findPatient = opBerichte[bericht].assocs["mu:Patient"][0];
    patient.patientenSVNR = findPatient.name;
    patient.patientenVorname = findPatient.properties['mu:patientenVorname'];
    patient.patientenMittelname = findPatient.properties['mu:patientenMittelname'];
    patient.patientenNachname = findPatient.properties['mu:patientenNachname'];
    patient.patientenGebDat = findPatient.properties['mu:patientenGebDat'];
    patient.patientenGeschlecht = findPatient.properties['mu:patientenGeschlecht'];
    patient.patientenStrasse = findPatient.properties['mu:patientenStrasse'];
    patient.patientenPLZ = findPatient.properties['mu:patientenPLZ'];
    patient.patientenOrt = findPatient.properties['mu:patientenOrt'];
    patient.patientenVersicherung = findPatient.properties['mu:patientenVersicherung'];
    patient.patientenBlutgruppe = findPatient.properties['mu:patientenBlutgruppe'];
    patient.patientenRhesusfaktor = findPatient.properties['mu:patientenRhesusfaktor'];
    patient.patientenAnmerkungen = findPatient.properties['mu:patientenAnmerkungen'];

    if(!findPatient.patientenMittelname)
        patient.patientenMittelname = "";
    if(!findPatient.patientenBlutgruppe)
        patient.patientenBlutgruppe = "";
    if(!findPatient.patientenRhesusfaktor)
        patient.patientenRhesusfaktor = "";
    if(!findPatient.patientenAnmerkungen)
        patient.patientenAnmerkungen = "";

    //aerzte
    var aerzte = new Array();
    var findAerzte = opBerichte[bericht].assocs["mu:Aerzte"];
    for (var i = 0; i < findAerzte.length; i++) {
        var arzt = {};

        arzt.id = findAerzte[i].name;
        arzt.arztVorname = findAerzte[i].properties['mu:arztVorname'];
        arzt.arztNachname = findAerzte[i].properties['mu:arztNachname'];
        arzt.arztFachbereich = findAerzte[i].properties['mu:arztFachbereich'];

        if(arzt.arztVorname && arzt.arztNachname)
            aerzte.push(arzt);
    }

    //anhaenge
    var anhaenge = new Array();

    var findAnhaenge = opBerichte[bericht].assocs["mu:Anhang"];
    for(var j = 0; j < findAnhaenge.length; j++){
        var anhang = {};

        anhang.ArbeitsschrittAnmerkung = findAnhaenge[j].properties["mu:ArbeitsschrittAnmerkung"];
        if(findAnhaenge[j].assocs["mu:ArbeitsschrittAnhang"]){
            anhang.url = findAnhaenge[j].assocs["mu:ArbeitsschrittAnhang"][0].url;
        }
        anhaenge.push(anhang);
       // anhaenge.push(findAnhaenge[j].properties);
    }

    opBericht.Patient = patient;
    opBericht.Aerzte = aerzte;
    opBericht.Anhang = anhaenge;

    output.push(opBericht);
}


model.output = jsonUtils.toJSONString(output);
/*
for (arzt in aerzte)
    aerzte[arzt].remove();
*/