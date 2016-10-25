{
   "language": "javascript",
   "views": {
       "q42": {
           "map": "function(doc) \n{ \n   for each (part in doc.part) { \n   var p_category=part.p_category\n\tvar p_mfgr=part.p_mfgr\n\tif (p_mfgr==\"MFGR#1\"||p_mfgr==\"MFGR#2\"){\n\t  for each (customer in doc.customer){\n\t\tvar c_region=customer.c_region\n\t  }\n\t  if (c_region==\"AMERICA\"){\n\t  for each (supplier in doc.supplier){\n\t\tvar s_region=supplier.s_region\n\t\tvar s_nation=supplier.s_nation\n\t  }\n\t  if (s_region==\"AMERICA\"){\n\t  for each (orderdate in doc.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t  if (d_year==1997||d_year==1998){\n\t   emit({d_year:d_year,s_nation:s_nation, p_category:p_category},doc.lo_revenue-doc.lo_supplycost); \n\t  }  \n          } \n\t  }\n   }\n}\n}",
           "reduce": "_sum"
       }
}
}
