import React,{useEffect,useState} from 'react'
import Slide from '../../component/slider/slide';
function Home() {
  let [data,setData]=useState([])
  let fectdata=async()=>{
    fetch('https://dummyjson.com/products/1')
 .then(async res => {
  let getdata=await res.json()
  let arrdata=[getdata]
  setData(arrdata)
  console.log(data)
 })
.then(json => console.log(json))
            
  }
  useEffect(()=>{
    fectdata()
  },[])
  return (
    <div>
      <h1>Home</h1>
       <Slide  />
       {data.map((value)=>{
        return(<div key={value.id}>
          {
            value.images.map((v)=>{
              return<img src={v} alt=''/>
            })
          }
            <h1>{value.title}</h1>
            <p>{value.description}</p>
        </div>)
       })}
    </div>
  )
}
export default Home;