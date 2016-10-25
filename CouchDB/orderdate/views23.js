{
   "language": "javascript",
   "views": {
       "q23": {
           "map": "function(doc) \n{ \nvar d_year=doc.d_year\n   for each (lineorder in doc.lineorder) { \n\t  for each (supplier in lineorder.supplier){\n\t\tvar s_region=supplier.s_region\n\t  }\n\t  if (s_region==\"EUROPE\"){\n\t  for each (part in lineorder.part) {\n\t   var p_brand1=part.p_brand1\n\t  }\n\t  if (p_brand1==\"MFGR#2221\"){\n\t   emit({d_year:d_year,p_brand1:p_brand1},lineorder.lo_revenue); \n\t  }\n\t}   \n   }\n}",
           "reduce": "_sum"
             }
           }
}
