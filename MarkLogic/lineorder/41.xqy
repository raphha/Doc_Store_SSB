xquery=
xquery version "1.0-ml";
<query4.1>{
  let $m := map:map()
  let $build :=
    for $sales in doc()[supplier/s_region="AMERICA" and customer/c_region="AMERICA" and (part/p_mfgr="MFGR#1" or part/p_mfgr="MFGR#2")]
    let $c_nation:=$sales/customer/c_nation
    let $d_year:= $sales/orderdate/d_year
    let $key := concat($c_nation, ',', $d_year)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        (xs:long($sales/lo_revenue)-xs:long($sales/lo_supplycost)))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query4.1>, xdmp:elapsed-time()
