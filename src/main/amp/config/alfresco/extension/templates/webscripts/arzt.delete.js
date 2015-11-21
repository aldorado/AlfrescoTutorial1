var id = url.templateArgs.id;
var aerzte = search.luceneSearch("TYPE:\"mu:aerzteregisterkarte\"");

for (arzt in aerzte)
    if (aerzte[arzt].name == id) {
        model.output = jsonUtils.toJSONString(aerzte[arzt]);
        aerzte[arzt].remove();
    }