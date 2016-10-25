{
   "language": "javascript",
   "views": {
       "q13": {
           "map": "function(doc) \n{ \n   for each (lineorder in doc.lineorder) { \n\t if (lineorder.lo_discount>=5 && lineorder.lo_discount<=7 && lineorder.lo_quantity>=26 && lineorder.lo_quantity<=35){\n\tfor each (orderdate in lineorder.orderdate){\n\t if (orderdate.d_weeknuminyear==6 && orderdate.d_year==1994){\n         emit(null,lineorder.lo_extendedprice*lineorder.lo_discount*0.01) ; \n\t   }\n\t }\n\t}  \n    } \n}",
           "reduce": "_sum"
       }
}
}
