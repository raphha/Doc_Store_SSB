xquery=
xquery version "1.0-ml";
<query32>{
  let $m := map:map()
  let $build :=
    for $doc in doc()[c_nation="UNITED STATES"]
    for $sales in $doc/lineorder[(supplier/s_nation="UNITED STATES") and orderdate/d_year>=1992 and orderdate/d_year<=1997]
    let $c_city:=$doc/c_city
    let $s_city:=$sales/supplier/s_city
    let $d_year:= $sales/orderdate/d_year
    let $key := concat($s_city, ',', $c_city, ',', $d_year)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        xs:long($sales/lo_revenue))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query32>, xdmp:elapsed-time()
