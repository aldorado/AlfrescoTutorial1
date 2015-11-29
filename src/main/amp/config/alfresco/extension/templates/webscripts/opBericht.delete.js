var opBerichte = search.luceneSearch("TYPE:\"mu:opBericht\"");

var status = {
    "status":"ok"
};

for (bericht in opBerichte){
    opBericht[bericht].remove();
}

var arbeitschritte = search.luceneSearch("TYPE:\"mu:Arbeitsschritt\"");

for (schritt in arbeitschritte){
    arbeitschritte[schritt].remove();
}

model.status = jsonUtils.toJSONString(status);