{
   "language": "javascript",
   "views": {
       "q22": {
           "map": "function(doc) \n{ \n   for each (lineorder in doc.lineorder) { \n          for each (part in lineorder.part){\n\t\tvar p_brand1=part.p_brand1\n\t  }\n\t  if (p_brand1>=\"MFGR#2221\" && p_brand1<=\"MFGR#2228\"){\n\t  \tfor each (supplier in lineorder.supplier){\n\t\t\tvar s_region=supplier.s_region\n\t  \t}\n\t    \tif (s_region==\"ASIA\"){\n\t  \t\tfor each (orderdate in lineorder.orderdate) {\n\t\t\t\tvar d_year=orderdate.d_year\n\t  \t}\n\t \t\temit({d_year:d_year,p_brand1:p_brand1},lineorder.lo_revenue);\n\t \t} \n\t}   \n   }\n}",
           "reduce": "_sum"
       }
}
}
