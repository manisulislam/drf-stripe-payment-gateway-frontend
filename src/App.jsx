import { useState,useEffect } from "react"
import {Route,Routes } from "react-router-dom"
import Product from "./components/Product"
import Message from "./components/Message"


function App() {
  const [message,setMessage]=useState("")
  useEffect(()=>{
    const query=new URLSearchParams(window.location.search)
    if (query.get("success")){
      setMessage("Order completed shortly with your content")
    }
    if(query.get("cancel")){
      setMessage("Payment unsuccessful")
    }
  },[])

  return (
    <>
      {message ?(
        <Message message={message}></Message>
      )
      :
      (<Routes>
        <Route path="/:product_id" element={<Product></Product>}></Route>
      </Routes>)}
        
      
     
    </>
  )
}

export default App
