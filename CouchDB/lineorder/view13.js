{
   "language": "javascript",
   "views": {
       "q13": {
           "map": "function(doc) \n{ \n\t if (doc.lo_discount>=5 && doc.lo_discount<=7 && doc.lo_quantity>=26 && doc.lo_quantity<=35){\n\tfor each (orderdate in doc.orderdate){\n\t if (orderdate.d_weeknuminyear==6 && orderdate.d_year==1994){\n         emit(null,doc.lo_extendedprice*doc.lo_discount*0.01) ; \n\t   }\n\t }\n\t}   \n}",
           "reduce": "_sum"
       }
}
}
