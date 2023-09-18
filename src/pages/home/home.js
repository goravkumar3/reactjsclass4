import React,{useEffect,useState} from 'react'
import Slide from '../../component/slider/slide';
function Home() {
  let [data,setData]=useState([])
  let fectdata=async()=>{
    const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e9e05ed9fmsh20a1a9eb7cd04d0p183544jsn5e114b8fb562',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  let arrdata=[result]
    setData(arrdata)
    console.log(data)
} catch (error) {
	console.error(error);
}
            
  }
  useEffect(()=>{
    fectdata()
  },[])
  return (
    <div>
      <h1>Home</h1>
       <Slide  />
       {
        data.map((v)=>{
          return(
            <>
            {v.d.map((val)=>{
              return(
              <img src='' alt={val.l} />
              )
            })}
            </>
          )
        })
       }
    </div>
  )
}
export default Home;