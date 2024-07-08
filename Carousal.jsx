import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './iinfinitive.css'
const Carousal = () => {
    const [currImagesApi,setcurrImagesApi] = useState([])
    const [currImagesIndex,setcurrImagesIndex] = useState(0)
    const pagelimit = 3
 const currentIndexOFImage = currImagesApi.slice(currImagesIndex,currImagesIndex+pagelimit)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setcurrImagesApi(data.slice(0, 9)));
       // axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>setcurrImagesApi(response.data.slice(0,10)))

    },[])


function handlePrev (){
  setcurrImagesIndex((prev)=>(prev-pagelimit+currImagesApi.length)%currImagesApi.length)  
}

function handleNext (){
setcurrImagesIndex((prev)=>(prev+pagelimit+currImagesApi.length)%currImagesApi.length)  
}
  return (
  <>
    <div className="carosuol-container" style={{height:'500px',width:'600px',border:'1px solid red' ,backgroundColor:'gray',text:'white',marginTop:'100px'}}>
    <button  onClick={handlePrev}>{'<'}</button>
   {currentIndexOFImage.length>0&&currentIndexOFImage.map((img)=>(
     <img src={img.thumbnailUrl} alt="" className="src" key={img.id}  style={{marginLeft:'20px',marginRight:'10px'}}/>
   ))}

    <button  onClick={handleNext}>{'>'}</button>
    </div>  
  </>
  )
}

export default Carousal