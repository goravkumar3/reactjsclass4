import React,{useState,useEffect} from 'react'
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import img1 from '../../media/pexels-north-1407322.jpg'
import img2 from '../../media/pexels-rovenimagescom-949587.jpg'
import img3 from '../../media/pexels-thibault-trillet-167491.jpg'

const Slide = () => {
    let [slideindexno,setSlideindexno]=useState(0);
  let slideimages=[
    {
      imagetitle:"pexels-north-1407322",
      source:img1
    },
    {
      imagetitle:"pexels-rovenimagescom-949587",
      source:img2
    },
    {
      imagetitle:"pexels-thibault-trillet-167491",
      source:img3
    }
  ]
  let nextslide=()=>{
    if(slideindexno===slideimages.length){
      setSlideindexno(0)
    }else{
      setSlideindexno(slideindexno++)
    }
  }
  let prevslide=()=>{
    if(slideindexno===0){
      setSlideindexno(slideimages.length-1)
    }else{
      setSlideindexno(slideindexno--)
    }
  }
  useEffect(()=>{
    setInterval(() => {
        if(slideindexno===slideimages.length){
            setSlideindexno(0)
          }else{
            setSlideindexno(slideindexno++)
          }
      }, 2000);
  },[])
  return (
    <div className='slider'>
        <div className='slideimages'>
      <img  src={slideimages[slideindexno].source} alt={slideimages[slideindexno].imagetitle} />
        </div>
      <button onClick={prevslide} className="prev"> <FiChevronLeft /></button>
       <button onClick={nextslide} className="next"> <FiChevronRight  /></button>
     
    </div>
  )
};

export default Slide