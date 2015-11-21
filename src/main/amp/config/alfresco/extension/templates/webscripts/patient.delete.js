var id = url.templateArgs.id;
var patienten = search.luceneSearch("@mu\\:patientenSVNR:\"" + id + "\"");

 for (patient in patienten) {
    model.output = jsonUtils.toJSONString(patienten[patient]);
    patienten[patient].remove();
 }