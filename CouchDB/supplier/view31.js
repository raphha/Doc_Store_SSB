{
   "language": "javascript",
   "views": {
      "q31": {
           "map": "function(doc) \n{ \nvar s_region=doc.s_region\nvar s_nation=doc.s_nation\nif (s_region==\"ASIA\"){\n   for each (lineorder in doc.lineorder) { \n    for each (customer in lineorder.customer){\n\tvar c_region=customer.c_region\n\tvar c_nation=customer.c_nation\n         }\n\tif (c_region==\"ASIA\"){\t\n\t  for each (orderdate in lineorder.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t  if (d_year>=1992 && d_year<=1997){\n\t   emit({d_year:d_year,c_nation:c_nation,s_nation:s_nation},lineorder.lo_revenue); \n\t  } \n\t  }  \n   }\n}\n}",
           "reduce": "_sum"
       }
},
   "lists": {
       "q3": "function(head, req)\n{\n var row;\n var rows = [];\n var anos =[];\n while(row = getRow()){\n rows.push(row)\n anos.push(row.key.d_year)\n} \n var tam = rows.length; \n\t for (var i = 0; i < tam; i++) {   \n \t  for (var j = 0; j < (tam -i -1); j++) {\n \t var ano1 = anos[j];\n var ano2 = anos[j+1];\n if(ano1 == ano2){\n\t if(rows[j].value < rows[j + 1].value) {\n\t var tmp = rows[j];\n\t rows[j] = rows[j + 1];\n\t rows[j + 1] = tmp;\n}\n}\n}\n}\n send(JSON.stringify({\"docs\": rows}))\n}"
   }
}
