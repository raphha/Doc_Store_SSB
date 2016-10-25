{
   "language": "javascript",
   "views": {
       "q11": {
           "map": "function(doc) \n{ \nif (doc.d_year==1993){\n   for each (lineorder in doc.lineorder) { \n\t if (lineorder.lo_discount<=3 && lineorder.lo_quantity<25){\n         emit(null,lineorder.lo_extendedprice*lineorder.lo_discount*0.01) ; \n\t   }\n\t }\n\t}  \n} ",
           "reduce": "_sum"
             }
           }
}
