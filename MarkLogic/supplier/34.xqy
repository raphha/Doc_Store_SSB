xquery=
xquery version "1.0-ml";
<query34>{
  let $m := map:map()
  let $build :=
    for $doc in doc()[s_city="UNITED KI1" or s_city="UNITED KI5"]
    for $sales in $doc/lineorder[(customer/c_city="UNITED KI1" or customer/c_city="UNITED KI5") and orderdate/d_yearmonthnum=199712]
    let $c_city:=$sales/customer/c_city
    let $s_city:=$doc/s_city
    let $d_year:= $sales/orderdate/d_year
    let $key := concat($s_city, ',', $c_city, ',', $d_year)
    return map:put(
      $m, $key, sum((
        map:get($m, $key),
        xs:long($sales/lo_revenue))))
  for $key in map:keys($m)
  return
  <group>{concat($key,',',map:get($m, $key))}</group>
}</query34>, xdmp:elapsed-time()
