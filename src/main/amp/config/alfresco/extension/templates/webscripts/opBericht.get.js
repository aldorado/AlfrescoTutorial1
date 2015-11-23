var patienten = search.luceneSearch("TYPE:\"mu:patientenStammblatt\"");
model.output = patienten.toJSON();