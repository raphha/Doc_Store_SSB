{
   "language": "javascript",
   "views": {
       "q11": {
           "map": "function(doc) \n{ \n   for each (lineorder in doc.lineorder) { \n\t if (lineorder.lo_discount<=3 && lineorder.lo_quantity<25){\n\tfor each (orderdate in lineorder.orderdate){\n\t if (orderdate.d_year==1993){\n         emit(null,lineorder.lo_extendedprice*lineorder.lo_discount*0.01) ; \n\t   }\n\t }\n\t}  \n    } \n}",
           "reduce": "_sum"
       }
}
}
