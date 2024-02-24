import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
    const [prod,setProd]=useState({
        name:"",
        price:"",
        product_image:""
    })
    let {product_id}=useParams()
    const API_URL='http://127.0.0.1:8000'

    useEffect(()=>{
        get_product()
    },[product_id])
    const get_product=async()=>{
        let response=await fetch(`http://127.0.0.1:8000/api/product/${product_id}`)
        let data= await response.json()
        console.log(data);
        setProd(data)

    }
  return (

    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg border">
    <img
      className="w-full"
      src={prod?.product_image}
      alt="#"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{prod?.name}</div>
      
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        {prod?.price}
      </span>
    </div>
    <form action={`${API_URL}/api/create-checkout-session/${product_id}/`} method="POST">
    <div className="px-6 pt-4 pb-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
    </form>
  </div></div>
  )
}

export default Product