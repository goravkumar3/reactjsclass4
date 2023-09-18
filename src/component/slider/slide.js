import React,{useState,useEffect} from 'react'
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import img1 from '../../media/pexels-north-1407322.jpg'
import img2 from '../../media/pexels-rovenimagescom-949587.jpg'
import img3 from '../../media/pexels-thibault-trillet-167491.jpg'

const Slide = () => {
    let [slideindexno,setSlideindexno]=useState(0);
  let slideimages=[
    img1,img2,img3
  ]
  let nextslide=()=>{
    if(slideindexno===slideimages.length-1){
      setSlideindexno(0)
    }else{
      setSlideindexno(nextindexno=>nextindexno+1)
    }
  }
  let prevslide=()=>{
    if(slideindexno===0){
      setSlideindexno(slideimages.length-1)
    }else{
      setSlideindexno(previndexno=>previndexno-1)
    }
  }
  // let autoslide=()=>{
  //   setInterval(() => {
  //       slideindexno<slideimages.length-1 ? setSlideindexno(nextindexno=>nextindexno+1) : setSlideindexno(0);
  //   }, 4000);
  // }
  // useEffect(()=>{
  //  autoslide()
  // },[])
  return (
      <div className='slider'>
          <div className='slideimages'>
        <img
            src={slideimages[slideindexno]}
            alt='' />
          </div>
        <button onClick={prevslide} className="prev"> <FiChevronLeft /></button>
         <button onClick={nextslide} className="next"> <FiChevronRight  /></button>
       
      </div>
  );
};

export default Slide