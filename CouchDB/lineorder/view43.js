{
   "language": "javascript",
   "views": {
       "q43": {
           "map": "function(doc) \n{ \n   for each (part in doc.part) { \n   var p_category=part.p_category\n\tvar p_brand1=part.p_brand1\n\tif (p_category==\"MFGR#14\"){\n\t  for each (customer in doc.customer){\n\t\tvar c_region=customer.c_region\t\n\t  }\n\t  if (c_region==\"AMERICA\"){\n\t  for each (supplier in doc.supplier){\n\t\tvar s_city=supplier.s_city\n\t\tvar s_nation=supplier.s_nation\n\t  }\n\t  if (s_nation==\"UNITED STATES\"){\n\t  for each (orderdate in doc.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t  if (d_year==1997||d_year==1998){\n\t   emit({d_year:d_year,s_city:s_city, p_brand1:p_brand1},doc.lo_revenue-doc.lo_supplycost); \n\t  }   \n\t  }\n\t  }\n   }\n}\n}",
           "reduce": "_sum"
       }
}
}
