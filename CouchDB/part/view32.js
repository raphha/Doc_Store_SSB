{
   "language": "javascript",
   "views": {
       "q32": {
           "map": "function(doc) \n{ \n   for each (lineorder in doc.lineorder) { \n\tfor each (customer in lineorder.customer){\n\tvar c_city=customer.c_city\n\tvar c_nation=customer.c_nation\n\t}\n\tif (c_nation==\"UNITED STATES\"){\n\t  for each (supplier in lineorder.supplier){\n\t\tvar s_city=supplier.s_city\n\t\tvar s_nation=supplier.s_nation\n\t  }\n\t  if (s_nation==\"UNITED STATES\"){\n\t  for each (orderdate in lineorder.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t  if (d_year>=1992 && d_year<=1997){\n\t   emit({d_year:d_year,c_city:c_city,s_city:s_city},lineorder.lo_revenue); \n\t  }\n\t  }   \n   }\n}\n}",
           "reduce": "_sum"
       }
},
   "lists": {
       "q3": "function(head, req)\n{\n var row;\n var rows = [];\n var anos =[];\n while(row = getRow()){\n rows.push(row)\n anos.push(row.key.d_year)\n} \n var tam = rows.length; \n\t for (var i = 0; i < tam; i++) {   \n \t  for (var j = 0; j < (tam -i -1); j++) {\n \t var ano1 = anos[j];\n var ano2 = anos[j+1];\n if(ano1 == ano2){\n\t if(rows[j].value < rows[j + 1].value) {\n\t var tmp = rows[j];\n\t rows[j] = rows[j + 1];\n\t rows[j + 1] = tmp;\n}\n}\n}\n}\n send(JSON.stringify({\"docs\": rows}))\n}"
   }
}
