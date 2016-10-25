{
   "language": "javascript",
   "views": {
       "q21": {
           "map": "function(doc) \n{ \n  \t for each (lineorder in doc.lineorder) { \n\t  \tfor each (supplier in lineorder.supplier){\n\t\t\tvar s_region=supplier.s_region\n\t \t}\n\t\tif (s_region==\"AMERICA\"){\t\n\t  \tfor each (part in lineorder.part) {\n\t\tvar p_category=part.p_category\n\t\tvar p_brand1=part.p_brand1\t\n\t  \t}\n\t\t\tif (p_category==\"MFGR#12\"){\n\t        emit({d_year:doc.d_year,p_brand1:p_brand1},lineorder.lo_revenue); \n\t        }\n\t  }   \n   }\n}",
           "reduce": "_sum"
             }
           }
}
