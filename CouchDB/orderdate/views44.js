{
   "language": "javascript",
   "views": {
       "q44": {
           "map": "function(doc) { \nif (doc.d_year>=1992 && doc.d_year<=1994){\n  for each (lineorder in doc.lineorder) {\n  for each (supplier in lineorder.supplier){\nvar s_city=supplier.s_city\nvar s_nation=supplier.s_nation\n}\nfor each (customer in lineorder.customer){\nvar c_city=customer.c_city\nvar c_nation=customer.c_nation\n}\nif (c_region==\"ASIA\"){ \nemit({d_year:doc.d_year,c_city:c_city,s_nation:s_nation},lineorder.lo_revenue); \n }   \n   }\n}\n}",
           "reduce": "_sum"
       }
   }
}
