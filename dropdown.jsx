import { useEffect } from "react";
import { useState } from "react";

export default function Dropdown() {
  const [country, setCountry] = useState("india");
  const countries = [
    { name: "india", value: "in", cities: ["delhi", "mumbai"] },
    { name: "pak", value: "Pk", cities: ["lahore", "karachi"] },
    { name: "bangladesh", value: "bg", cities: ["dhaka", "chiittangong"] },
  ];

  const findCities = countries.find((items)=>items.name===country)
  
  useEffect(()=>{

  },[country])
  console.log(country, "country");
  console.log(findCities.cities, "city");
  return (
    <>
      <select  value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries.map((items) => (
          <option key={items.value} >
            {items.name}
          </option>
        ))}
      </select>

      <select>
        {findCities.cities.map((items,id) => (
          <option key={id} >
            {items}
          </option>
        ))}
      </select>

    </>
  );
}
