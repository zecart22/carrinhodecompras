import logo from './logo.svg';
import { useState } from 'react';
import react from 'react'
import './App.css';
import Vitrine from './components/vitrine/vitrine';
import Cart from './components/Cart/Cart'

function App() {


  const [products, setProducts] = useState([
    {
     code: 10,
      name: "Smart TV Led 50 Semp",
     description:
       "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB",
     price: 2299.99,
     discount: 190.99,
   },
   {
     code: 11,
     name: "Smartphone Samsung Galaxy A72 128GB",
     description:
       "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla",
     price: 1988.4,
     discount: 87.89,
   },
   {
     code: 12,
     name: "Smartwatch Samsung Galaxy Watch Active",
     description:
       "Para quem tem um estilo de vida ativo e saudável.",
     price: 678.6,
     discount: 110.19,
   },
]);

const [cart, setCart] = useState([])

const AddProducts = () => {
  setProducts([...products, 
    {code : Number(code), name : name, description: description, price: Number(price), discount: Number(discount)}])
}

const AddProductsCart = (code) => {
  console.log(code)
  const item = products.find(element => element.code === code)
  setCart([...cart,item])
}

const Total = cart.reduce(function(acc, cur){
  return acc + cur.price},0)

const TotalDiscount = cart.reduce(function(acc,cur){
  return acc + cur.discount
},0)  

const [name,setName] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")
const [discount, setDiscount] = useState("")
const [code, setCode] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <div className="BoxPrices">
          <div> Total:  R${Total} </div>
          <div> Desconto total:  R${TotalDiscount} </div>
        </div> 
        <div className="BoxForm">
          <h5>Cadastre produtos</h5>
          <form>
          
               <input placeholder="código" value={code} onChange={event => setCode(event.target.value)}/>
               <input placeholder="nome" value={name} onChange={event => setName(event.target.value)}/>
               <input placeholder="descrição" value={description} onChange={event => setDescription(event.target.value)}/>
               <input placeholder="preço (apenas números)" value={price} onChange={event => setPrice(event.target.value)}/>
               <input placeholder="desconto (apenas números)" value={discount} onChange={event => setDiscount(event.target.value)}/>
          </form>
          <button onClick={() => AddProducts()}>Enviar</button>
          </div>
          <Vitrine products={products} setCart={setCart} AddProductsCart={AddProductsCart}/>
          <Cart cart={cart}/>
        
      </header>
    </div>
  );
}

export default App;
