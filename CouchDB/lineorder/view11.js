{
   "language": "javascript",
   "views": {
       "q11": {
           "map": "function(doc) \n{ \n\t if (doc.lo_discount<=3 && doc.lo_quantity<25){\n\tfor each (orderdate in doc.orderdate){\n\t if (orderdate.d_year==1993){\n         emit(null,doc.lo_extendedprice*doc.lo_discount*0.01) ; \n\t   }\n\t } \n    } \n}",
           "reduce": "_sum"
       }
}
}
