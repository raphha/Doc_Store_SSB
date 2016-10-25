xquery=
xquery version "1.0-ml";
<revenue>{
  let $m := map:map()
  let $build :=
    for $sales in doc()[d_yearmonthnum=199401]/lineorder[lo_discount ge 4 and lo_discount le 6 and lo_quantity ge 26 and lo_quantity le 35]
    let $key := 'soma'
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        $sales/lo_extendedprice*$sales/lo_discount*0.01)))
  for $key in map:keys($m)
  return
  map:get($m, $key)
}</revenue>, xdmp:elapsed-time()
