import react from 'react'
import './style.css';

const Vitrine = ({products, AddProductsCart }) => {
    return (
    <section className="BoxForm3">
        <h2>Produtos disponíveis</h2>
        {products && products.map(item => 
        <>
            <div>Código: {item.code}</div>
            <div>Nome: {item.name}</div>
            <div>Descrição: {item.description}</div>
            <div>Preço: R${item.price},00</div>
            <div>Desconto: R${item.discount},00</div>
            <button onClick={()=> (AddProductsCart(item.code))}>Add no carrinho</button>
            <hr className="hr1"/>
        </>    
            )}
    </section>

    ) 
}
export default Vitrine