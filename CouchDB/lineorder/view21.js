{
   "language": "javascript",
   "views": {
       "q21": {
           "map": "function(doc) \n{ \n  \t for each (part in doc.part) { \n\t\tvar p_category=part.p_category\n\t\tvar p_brand1=part.p_brand1}\n\t\tif (p_category==\"MFGR#12\"){\n\t  \tfor each (supplier in doc.supplier){\n\t\t\tvar s_region=supplier.s_region\n\t \t}\n\t\tif (s_region==\"AMERICA\"){\t\n\t  \tfor each (orderdate in doc.orderdate) {\n\t\t\tvar d_year=orderdate.d_year\n\t  \t}\n\t        emit({d_year:d_year,p_brand1:p_brand1},doc.lo_revenue); \n\t        }\n\t  }   \n}",
           "reduce": "_sum"
       }
}
}
