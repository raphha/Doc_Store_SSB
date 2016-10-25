xquery=
xquery version "1.0-ml";
<revenue>{
  let $m := map:map()
  let $build :=
    for $sales in doc()/lineorder[lo_discount>=5 and lo_discount<=7 and lo_quantity>= 26 and lo_quantity<=35 and orderdate/d_year=1994 and orderdate/d_weeknuminyear=6]
    let $key := 'soma'
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        xs:float($sales/lo_extendedprice)*xs:float($sales/lo_discount))))
  for $key in map:keys($m)
  return
  map:get($m, $key)
}</revenue>, xdmp:elapsed-time()
