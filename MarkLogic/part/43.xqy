xquery=
xquery version "1.0-ml";
<query43>{
  let $m := map:map()
  let $build :=
    for $doc in doc()[p_category="MFGR#14"]
    for $sales in $doc/lineorder[supplier/s_nation="UNITED STATES" and 
    customer/c_region="AMERICA" and 
    (orderdate/d_year=1997 or orderdate/d_year=1998)]
    let $s_city:=$sales/supplier/s_city
    let $p_brand1:=$doc/p_brand1
    let $d_year:= $sales/orderdate/d_year
    let $key := concat($d_year, ',', $s_city, ',', $p_brand1)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),(
        xs:long($sales/lo_revenue)-xs:long($sales/lo_supplycost)))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query43>, xdmp:elapsed-time()
