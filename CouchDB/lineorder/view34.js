{
   "language": "javascript",
   "views": {
       "q34": {
           "map": "function(doc) \n{ \n\tfor each (customer in doc.customer){\n\tvar c_city=customer.c_city\n\t}\n\tif (c_city==\"UNITED KI1\"||c_city==\"UNITED KI5\"){\n\t  for each (supplier in doc.supplier){\n\t\tvar s_city=supplier.s_city\n\t  }\n\t  if (s_city==\"UNITED KI1\"||s_city==\"UNITED KI5\"){\n\t  for each (orderdate in doc.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t\tvar d_yearmonthnum=orderdate.d_yearmonthnum\n\t  }\n\t  if (d_yearmonthnum==199712){\n\t   emit({d_year:d_year,c_city:c_city,s_city:s_city},doc.lo_revenue); \n\t  }\n\t}   \n   }\n}",
           "reduce": "_sum"
       }
},
    "lists": {
       "q3": "function(head, req)\n{\n var row;\n var rows = [];\n var anos =[];\n while(row = getRow()){\n rows.push(row)\n anos.push(row.key.d_year)\n} \n var tam = rows.length; \n\t for (var i = 0; i < tam; i++) {   \n \t  for (var j = 0; j < (tam -i -1); j++) {\n \t var ano1 = anos[j];\n var ano2 = anos[j+1];\n if(ano1 == ano2){\n\t if(rows[j].value < rows[j + 1].value) {\n\t var tmp = rows[j];\n\t rows[j] = rows[j + 1];\n\t rows[j + 1] = tmp;\n}\n}\n}\n}\n send(JSON.stringify({\"docs\": rows}))\n}"
   }
}

