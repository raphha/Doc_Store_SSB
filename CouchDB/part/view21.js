{
   "language": "javascript",
   "views": {
       "q21": {
           "map": "function(doc) \n{ \nvar p_category=doc.p_category\nvar p_brand1=doc.p_brand1\n\tif (p_category==\"MFGR#12\"){\n  \t for each (lineorder in doc.lineorder) { \n\t  \tfor each (supplier in lineorder.supplier){\n\t\t\tvar s_region=supplier.s_region\n\t \t}\n\t\tif (s_region==\"AMERICA\"){\t\n\t  \tfor each (orderdate in lineorder.orderdate) {\n\t\t\tvar d_year=orderdate.d_year\n\t  \t}\n\t        emit({d_year:d_year,p_brand1:p_brand1},lineorder.lo_revenue); \n\t        }\n\t  }   \n   }\n}",
           "reduce": "_sum"
       }
}
}
