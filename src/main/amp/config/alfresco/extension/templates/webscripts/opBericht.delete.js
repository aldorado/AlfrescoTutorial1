var id = url.templateArgs.id;
var opBerichte = search.luceneSearch("TYPE:\"mu:opBericht\"");
var status = {
    "status":"error"
};

for (opBericht in opBerichte)
    if (opBerichte[opBericht].name == id) {
        status.status = jsonUtils.toJSONString(opBerichte[opBericht]);
        var findAnhaenge = opBerichte[opBericht].assocs["mu:Anhang"];
        for(anhang in findAnhaenge) {
            findAnhaenge[anhang].remove();
        }
        opBerichte[opBericht].remove();
    }
status.status = id;
model.status = jsonUtils.toJSONString(status);