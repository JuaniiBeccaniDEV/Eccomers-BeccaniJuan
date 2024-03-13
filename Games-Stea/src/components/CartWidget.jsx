import cart from '../assets/carrito.jpg';
export const CartWidget =()=>{
    return(
        <>
          <img src={cart} alt="carrito"  height={50}/>
          <span>30</span>
        </>

    )
}