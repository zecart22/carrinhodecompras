import react from 'react'
import './style.css'

const Cart = ({cart, Total, TotalDiscount}) => {
    console.log(cart)
    return (
        <section className="BoxForm2">
                <h3>Carrinho de compras</h3>
                {cart && cart.map(item =>
                <div> 
                    <div>código:{item.code}</div>
                    <div>nome:{item.name}</div>
                    <div>valor:R${item.price},00</div>
                    <hr/>
                    {/* <div>
                    <span>Valor total da compra: {Total}</span>
                    <span>Total de desconto: {TotalDiscount}</span>
                    </div> */} 
                </div>
               
                    )}
            
        </section>
    )
}
export default Cart;