{
   "language": "javascript",
   "views": {
       "q42": {
           "map": "function(doc) \n{ \nvar p_category=doc.p_category\nvar p_mfgr=doc.p_mfgr\nif (p_mfgr==\"MFGR#1\"||p_mfgr==\"MFGR#2\"){\n   for each (lineorder in doc.lineorder) { \n\t  for each (customer in lineorder.customer){\n\t\tvar c_region=customer.c_region\n\t  }\n\t  if (c_region==\"AMERICA\"){\n\t  for each (supplier in lineorder.supplier){\n\t\tvar s_region=supplier.s_region\n\t\tvar s_nation=supplier.s_nation\n\t  }\n\t  if (s_region==\"AMERICA\"){\n\t  for each (orderdate in lineorder.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t  if (d_year==1997||d_year==1998){\n\t   emit({d_year:d_year,s_nation:s_nation, p_category:p_category},lineorder.lo_revenue-lineorder.lo_supplycost); \n\t  }  \n          } \n\t  }\n   }\n}\n}",
           "reduce": "_sum"
       }
}
}
