{
   "language": "javascript",
   "views": {
       "q41": {
           "map": "function(doc) \n{ \n   for each (part in doc.part) {\n    var p_mfgr=part.p_mfgr\n\tif (p_mfgr==\"MFGR#1\"||p_mfgr==\"MFGR#2\"){\n\tfor each (customer in doc.customer){\n\tvar c_region=customer.c_region\n\tvar c_nation=customer.c_nation\n\t}\n\tif (c_region==\"AMERICA\"){\n\t  for each (supplier in doc.supplier){\n\t\tvar s_region=supplier.s_region\n\t  }\n\t  if (s_region==\"AMERICA\"){\n\t  for each (orderdate in doc.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t   emit({d_year:d_year,c_nation:c_nation},doc.lo_revenue-doc.lo_supplycost); \n\t  }\n\t}   \n   }\n}\n}",
           "reduce": "_sum"
       }
}
}
