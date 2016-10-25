{
   "language": "javascript",
   "views": {
       "q12": {
           "map": "function(doc) \n{\nif (doc.d_yearmonthnum==199401){\n   for each (lineorder in doc.lineorder) { \n\t if (lineorder.lo_discount>=4 && lineorder.lo_discount<=6 && lineorder.lo_quantity>=26 && lineorder.lo_quantity<=35){\n         emit(null,lineorder.lo_extendedprice*lineorder.lo_discount*0.01) ; \n\t }\n\t}  \n    } \n}",
           "reduce": "_sum"
             }
           }
}
