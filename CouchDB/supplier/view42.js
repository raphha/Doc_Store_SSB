{
   "language": "javascript",
   "views": {
      "q42": {
           "map": "function(doc) \n{ \nvar s_region=doc.s_region\nvar s_nation=doc.s_nation\nif (s_region==\"AMERICA\"){\n   for each (lineorder in doc.lineorder) { \n\t  for each (customer in lineorder.customer){\n\t\tvar c_region=customer.c_region\n\t  }\n\t  if (c_region==\"AMERICA\"){\n\t  for each (part in lineorder.part){\n\t\tvar p_category=part.p_category\n\t\tvar p_mfgr=part.p_mfgr\n\t  }\n\t  if (p_mfgr==\"MFGR#1\"||p_mfgr==\"MFGR#2\"){\n\t  for each (orderdate in lineorder.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t  if (d_year==1997||d_year==1998){\n\t   emit({d_year:d_year,s_nation:s_nation, p_category:p_category},lineorder.lo_revenue-lineorder.lo_supplycost); \n\t  }  \n          } \n\t  }\n   }\n}\n}",
           "reduce": "_sum"
       }
}
}
