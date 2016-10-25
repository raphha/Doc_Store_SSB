{
   "language": "javascript",
   "views": {
       "q12": {
           "map": "function(doc) \n{ \n\t if (doc.lo_discount>=4 && doc.lo_discount<=6 && doc.lo_quantity>=26 && doc.lo_quantity<=35){\n\tfor each (orderdate in doc.orderdate){\n\t if (orderdate.d_yearmonthnum==199401){\n         emit(null,doc.lo_extendedprice*doc.lo_discount*0.01) ; \n\t   }\n\t }\n\t}  \n}",
           "reduce": "_sum"
       }
}
}
