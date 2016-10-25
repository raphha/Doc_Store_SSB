{
   "language": "javascript",
   "views": {
       "q41": {
           "map": "function(doc) \n{ \nvar p_mfgr=doc.p_mfgr\nif (p_mfgr==\"MFGR#1\"||p_mfgr==\"MFGR#2\"){\n   for each (lineorder in doc.lineorder) { \n\tfor each (customer in lineorder.customer){\n\tvar c_region=customer.c_region\n\tvar c_nation=customer.c_nation\n\t}\n\tif (c_region==\"AMERICA\"){\n\t  for each (supplier in lineorder.supplier){\n\t\tvar s_region=supplier.s_region\n\t  }\n\t  if (s_region==\"AMERICA\"){\n\t  for each (orderdate in lineorder.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t   emit({d_year:d_year,c_nation:c_nation},lineorder.lo_revenue-lineorder.lo_supplycost); \n\t  }\n\t}   \n   }\n}\n}",
           "reduce": "_sum"
       }
}
}
