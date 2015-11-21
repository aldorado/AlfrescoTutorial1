var aerzte = search.luceneSearch("TYPE:\"mu:aerzteregisterkarte\"");
var output = new Array();

if (aerzte)
    for (var i = 0; i < aerzte.length; i++) {
        var arzt = {};

        arzt.id = aerzte[i].name;
        arzt.arztVorname = aerzte[i].properties['mu:arztVorname'];
        arzt.arztNachname = aerzte[i].properties['mu:arztNachname'];
        arzt.arztFachbereich = aerzte[i].properties['mu:arztFachbereich'];

        if(arzt.arztVorname && arzt.arztNachname)
            output.push(arzt);
    }

model.output = jsonUtils.toJSONString(output);