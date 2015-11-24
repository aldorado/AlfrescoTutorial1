var aerzte = search.luceneSearch("TYPE:\"mu:opBericht\"");

for (arzt in aerzte)
    aerzte[arzt].remove();
