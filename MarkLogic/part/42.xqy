xquery=
xquery version "1.0-ml";
<query42>{
  let $m := map:map()
  let $build :=
    for $doc in doc()[p_mfgr="MFGR#1" or p_mfgr="MFGR#2"]
    for $sales in $doc/lineorder[supplier/s_region="AMERICA" and customer/c_region="AMERICA" and (orderdate/d_year=1997 or orderdate/d_year=1998)]
    let $s_nation:=$sales/supplier/s_nation
    let $p_category:=$doc/p_category
    let $d_year:= $sales/orderdate/d_year
    let $key := concat($d_year, ',', $s_nation, ',', $p_category)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        (xs:long($sales/lo_revenue)-xs:long($sales/lo_supplycost)))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query42>, xdmp:elapsed-time()
