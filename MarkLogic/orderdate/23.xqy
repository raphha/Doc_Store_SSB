xquery=
xquery version "1.0-ml";
<query23>{
  let $m := map:map()
  let $build :=
    for $doc in doc()
    for $sales in $doc/lineorder[supplier/s_region="EUROPE" and part/p_brand1="MFGR#2221"]
    let $d_year:= $doc/d_year
    let $p_brand1:= $sales/part/p_brand1
    let $key := concat($d_year, ',', $p_brand1)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        xs:long($sales/lo_revenue))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query23>, xdmp:elapsed-time()
