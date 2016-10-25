xquery=
xquery version "1.0-ml";
<query33>{
  let $m := map:map()
  let $build :=
    for $sales in doc()[(supplier/s_city="UNITED KI1" or supplier/s_city="UNITED KI5") and (customer/c_city="UNITED KI1" or customer/c_city="UNITED KI5") and orderdate/d_year>=1992 and orderdate/d_year<=1997]
    let $c_city:=$sales/customer/c_city
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
}</query33>, xdmp:elapsed-time()
