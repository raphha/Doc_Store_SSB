xquery=
xquery version "1.0-ml";
<query31>{
  let $m := map:map()
  let $build :=
    for $doc in doc()[d_year>=1992 and d_year<=1997]
    for $sales in $doc/lineorder[supplier/s_region="ASIA" and customer/c_region="ASIA"]
    let $c_nation:=$sales/customer/c_nation
    let $s_nation:=$sales/supplier/s_nation
    let $d_year:= $doc/d_year
    let $key := concat($s_nation, ',', $c_nation, ',', $d_year)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        xs:long($sales/lo_revenue))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query31>, xdmp:elapsed-time()
