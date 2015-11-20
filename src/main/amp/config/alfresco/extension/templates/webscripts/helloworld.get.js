var aerzte = search.luceneSearch("TYPE:\"mu:aerzteregisterkarte\"");

model["fromJS"] = aerzte[aerzte.length - 1].properties['mu:arztFachbereich'].toString();