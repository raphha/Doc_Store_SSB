{
   "language": "javascript",
   "views": {
       "q22": {
           "map": "function(doc) \n{ \n  \t for each (part in doc.part) { \n\t var p_category=part.p_category\n\t var p_brand1=part.p_brand1}\n\t if (p_brand1>=\"MFGR#2221\" && p_brand1<=\"MFGR#2228\"){\n\t  \tfor each (supplier in doc.supplier){\n\t\t\tvar s_region=supplier.s_region\n\t \t}\n\t\tif (s_region==\"ASIA\"){\t\n\t  \tfor each (orderdate in doc.orderdate) {\n\t\t\tvar d_year=orderdate.d_year\n\t  \t}\n\t        emit({d_year:d_year,p_brand1:p_brand1},doc.lo_revenue); \n\t        }\n\t  }   \n}",
           "reduce": "_sum"
       }
}
}
