{
   "language": "javascript",
   "views": {
      "q22": {
           "map": "function(doc) \n{\nvar s_region=doc.s_region\n  if (s_region==\"ASIA\"){\n   for each (lineorder in doc.lineorder) { \n\t  \tfor each (part in lineorder.part){\n\t\t\tvar p_brand1=part.p_brand1 \n\t  \t}\n\t    \tif (p_brand1>=\"MFGR#2221\" && p_brand1<=\"MFGR#2228\"){\n\t  \t\tfor each (orderdate in lineorder.orderdate) {\n\t\t\t\tvar d_year=orderdate.d_year\n\t  \t}\n\t \t\temit({d_year:d_year,p_brand1:p_brand1},lineorder.lo_revenue);\n\t \t} \n     }   \n   }\n}",
           "reduce": "_sum"
       }
}
}
