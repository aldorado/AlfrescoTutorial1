var patienten = search.luceneSearch("TYPE:\"mu:patientenStammblatt\"");
var output = new Array();

if (patienten)
    for (var i = 0; i < patienten.length; i++) {
        var patient = {};

        patient.patientenSVNR = patienten[i].name;
        patient.patientenVorname = patienten[i].properties['mu:patientenVorname'];
        patient.patientenMittelname = patienten[i].properties['mu:patientenMittelname'];
        patient.patientenNachname = patienten[i].properties['mu:patientenNachname'];
        patient.patientenGebDat = patienten[i].properties['mu:patientenGebDat'];
        patient.patientenGeschlecht = patienten[i].properties['mu:patientenGeschlecht'];
        patient.patientenStrasse = patienten[i].properties['mu:patientenStrasse'];
        patient.patientenPLZ = patienten[i].properties['mu:patientenPLZ'];
        patient.patientenVersicherung = patienten[i].properties['mu:patientenVersicherung'];
        patient.patientenBlutgruppe = patienten[i].properties['mu:patientenBlutgruppe'];
        patient.patientenRhesusfaktor = patienten[i].properties['mu:patientenRhesusfaktor'];
        patient.patientenAnmerkungen = patienten[i].properties['mu:patientenAnmerkungen'];

        if(!patient.patientenMittelname)
            patient.patientenMittelname = "";
        if(!patient.patientenBlutgruppe)
            patient.patientenBlutgruppe = "";
        if(!patient.patientenRhesusfaktor)
            patient.patientenRhesusfaktor = "";
        if(!patient.patientenAnmerkungen)
            patient.patientenAnmerkungen = "";
        if(patient.patientenSVNR && patient.patientenVorname && patient.patientenNachname && patient.patientenGebDat && patient.patientenGeschlecht && patient.patientenStrasse && patient.patientenPLZ && patient.patientenVersicherung)
            output.push(patient);
    }

model.output = jsonUtils.toJSONString(output);