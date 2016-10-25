{
   "language": "javascript",
   "views": {
       "q43": {
           "map": "function(doc) \n{ \nif (doc.d_year==1997||doc.d_year==1998){\n   for each (lineorder in doc.lineorder) { \n\t  for each (customer in lineorder.customer){\n\t\tvar c_region=customer.c_region\t\n\t  }\n\t  if (c_region==\"AMERICA\"){\n\t  for each (supplier in lineorder.supplier){\n\t\tvar s_city=supplier.s_city\n\t\tvar s_nation=supplier.s_nation\n\t  }\n\t  if (s_nation==\"UNITED STATES\"){\n\t  for each (part in lineorder.part) {\n\t  var p_category=part.p_category\n\t  var p_brand1=part.p_brand1\n\t  }\n\t  if (p_category==\"MFGR#14\"){\n\t   emit({d_year:doc.d_year,s_city:s_city, p_brand1:p_brand1},lineorder.lo_revenue-lineorder.lo_supplycost); \n\t  }   \n\t  }\n\t  }\n   }\n}\n}",
           "reduce": "_sum"
             }
           }
}
