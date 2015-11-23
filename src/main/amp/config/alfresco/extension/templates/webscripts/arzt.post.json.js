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

    var arzt = companyhome.createNode(aerzte.length, contentType, properties);

    if(arzt)
        status.status = "ok";
}


model.status = jsonUtils.toJSONString(status);