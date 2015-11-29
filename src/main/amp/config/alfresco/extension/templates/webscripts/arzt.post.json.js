var aerzte = search.luceneSearch("TYPE:\"mu:aerzteregisterkarte\"");

var contentType = "mu:aerzteregisterkarte";

var properties = [];

var status = {
    "status":"error"
};


if (json.has("arztVorname") && json.has("arztNachname")) {

    properties['mu:arztVorname'] = json.get("arztVorname");
    properties['mu:arztNachname'] = json.get("arztNachname");

    if (json.has("arztFachbereich"))
        properties['mu:arztFachbereich'] =  JSON.parse(json.getJSONArray("arztFachbereich"));

    var id = ~~(Math.random() * 1000000);

    while(search.luceneSearch("TYPE:\"mu:aerzteregisterkarte\" AND @mu\\:name:\"" + id + "\"").length > 0)
        id = ~~(Math.random() * 1000000);

    var arzt = companyhome.createNode(id, contentType, properties);

    if(arzt)
        status.status = "ok";
}


model.status = jsonUtils.toJSONString(status);