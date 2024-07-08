

import React, { useEffect, useState } from 'react'

const Dropdown = () => {
    const [country,setCountry]  = useState("india")
    const [citiesItem,setCitiesItem]  = useState("")

    const countrycities  = [{country:"india",cities:["delhi","mumbai"]},
    {country:"pak",cities:["lahor","karachi"]},
    {country:"uk",cities:["london","los"]}]
   const cities = countrycities.find((items,i)=> items.country===country?items:"")

   
  return (
    <div>

<select name="" id=""  onChange={(e)=>setCountry(e.target.value)}>
  

{countrycities&&countrycities.map((items,index)=>(
      <>
    <option value={items.country}>{items.country}</option>
    </>
))}
    </select>  

    <select name="" id=""  onChange={(e)=>setCitiesItem(e.target.value)}>
  

  {cities&&cities.cities.map((items,index)=>(
        <>
      <option value={items}>{items}</option>
      </>
  ))}
      </select>  
   

    </div>
  )
}

export default Dropdown