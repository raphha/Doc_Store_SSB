xquery=
xquery version "1.0-ml";
<revenue>{
  let $m := map:map()
  let $build :=
    for $sales in doc()/lineorder[lo_discount>=1 and lo_discount<=3 and lo_quantity< 25 and orderdate/d_year=1993]
    let $key := 'soma'
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        $sales/lo_extendedprice*$sales/lo_discount)))
  for $key in map:keys($m)
  return
  map:get($m, $key)
}</revenue>, xdmp:elapsed-time()
