xquery=
xquery version "1.0-ml";
<query31>{
  let $m := map:map()
  let $build :=
    for $doc in doc()[c_region="ASIA"]
    for $sales in $doc/lineorder[(supplier/s_region="ASIA") and orderdate/d_year>=1992 and orderdate/d_year<=1997]
    let $c_nation:=$doc/c_nation
    let $s_nation:=$sales/supplier/s_nation
    let $d_year:= $sales/orderdate/d_year
    let $key := concat($s_nation, ',', $c_nation, ',', $d_year)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        xs:long($sales/lo_revenue))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query31>, xdmp:elapsed-time()
