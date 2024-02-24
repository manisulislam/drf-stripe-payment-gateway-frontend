
import {Route,Routes } from "react-router-dom"
import Product from "./components/Product"


function App() {
  

  return (
    <>
      
        <Routes>
          <Route path="/:product_id" element={<Product></Product>}></Route>
        </Routes>
      
     
    </>
  )
}

export default App
