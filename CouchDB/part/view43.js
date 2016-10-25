{
   "language": "javascript",
   "views": {
        "q43": {
           "map": "function(doc) \n{ \nvar p_category=doc.p_category\nvar p_brand1=doc.p_brand1\nif (p_category==\"MFGR#14\"){\n   for each (lineorder in doc.lineorder) { \n\t  for each (customer in lineorder.customer){\n\t\tvar c_region=customer.c_region\t\n\t  }\n\t  if (c_region==\"AMERICA\"){\n\t  for each (supplier in lineorder.supplier){\n\t\tvar s_city=supplier.s_city\n\t\tvar s_nation=supplier.s_nation\n\t  }\n\t  if (s_nation==\"UNITED STATES\"){\n\t  for each (orderdate in lineorder.orderdate) {\n\t\tvar d_year=orderdate.d_year\n\t  }\n\t  if (d_year==1997||d_year==1998){\n\t   emit({d_year:d_year,s_city:s_city, p_brand1:p_brand1},lineorder.lo_revenue-lineorder.lo_supplycost); \n\t  }   \n\t  }\n\t  }\n   }\n}\n}",
           "reduce": "_sum"
       }
}
}
