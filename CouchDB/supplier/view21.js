{
   "language": "javascript",
   "views": {
       "q21": {
           "map": "function(doc) \n{ \nvar s_region=doc.s_region\n\tif (s_region == \"AMERICA\"){\n  \t for each (lineorder in doc.lineorder) { \n\t  \tfor each (part in lineorder.part){\n\t\t\tvar p_category=part.p_category\n\t\t\tvar p_brand1=part.p_brand1\n\t \t}\n\t\tif (p_category==\"MFGR#12\"){\t\n\t  \tfor each (orderdate in lineorder.orderdate) {\n\t\t\tvar d_year=orderdate.d_year\n\t  \t}\n\t        emit({d_year:d_year,p_brand1:p_brand1},lineorder.lo_revenue); \n\t        }\n\t  }   \n   }\n}",
           "reduce": "_sum"
       }
}
}
