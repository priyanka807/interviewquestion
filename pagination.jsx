import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './iinfinitive.css'
const Pagination = () => {
    const [currImagesApi,setcurrImagesApi] = useState([])
    const pages = [1,2,3,4,5,6,7,8,9,10]
    const [page,setPage] = useState(1)

   // const [currImagesIndex,setcurrImagesIndex] = useState(0)
    const pagelimit = 10
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setcurrImagesApi(data.slice(0, 100)));
       // axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>setcurrImagesApi(response.data.slice(0,10)))

    },[])
    useEffect(()=>{    },[page])

const totalPages = Math.ceil(currImagesApi.length/pagelimit)  //10
const   lastIndex = page*totalPages    //1
console.log(page,'page')
const firstIndex =     totalPages-lastIndex               //firsst 0-10 last index 0 first index
const currentIndexOFImage = currImagesApi.slice(firstIndex,lastIndex)

// console.log(firstIndex,'pages')

function handlePrev (){
 // setcurrImagesIndex((prev)=>(prev-pagelimit+currImagesApi.length)%currImagesApi.length)  
}

function handleNext (){
//setcurrImagesIndex((prev)=>(prev+pagelimit+currImagesApi.length)%currImagesApi.length)  
}
  return (
  <>
    <div>
    <button  onClick={handlePrev}>{'<'}</button>
  {pages.length>0&&pages.map((items,index)=>(
    <button key={index}  onClick={()=>setPage(items)}>{items}</button>
   ))}
 <button  onClick={handleNext}>{'>'}</button>
    </div>  

    {currentIndexOFImage.length>0&&currentIndexOFImage.map((img)=>(
     <img src={img.thumbnailUrl} alt="" className="src" key={img.id}  style={{marginLeft:'20px',marginRight:'10px'}}/>
   ))}


  </>
  )
}

export default Pagination