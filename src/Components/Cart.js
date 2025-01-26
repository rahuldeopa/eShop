import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { clearItems, removeItems } from '../Store/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const dispatch=useDispatch();
    const removeitem=(id)=>{
        dispatch(removeItems({id}));
        alert('item removed');
    }
    const ClearCart=()=>{
        dispatch(clearItems());
        alert("Cart Cleared")
    }
    return (
        <div className="max-w-5xl mx-auto mt-10">

            <div className='flex items-center justify-between '>
                <h1 className="font-bold text-xl">Cart -({cartItems.length})</h1>
                <button onClick={ClearCart} className='bg-black text-white rounded-md p-2'>Clear Cart</button>
            </div>
            

            {
                cartItems.map((item) => (
                    <div>


                        <div className="max-w-5xl mx-auto mt-10 border-2">
                            <button onClick={() => removeitem(item.id)} className='bg-red-700 text-white rounded-md p-2'>Remove</button>
                            <div className="ml-6">
                                <img className="animate-fadein bg-blend-screen ease-in-out w-60  " src={item.image} alt={item.title} />
                                <h1 className="font-bold text-xl">{item.title}</h1>
                                <p className="font-bold text-gray-700" >${item.price}</p>
                                <p className="font-bold text-gray-700">Rating {item.rating?.rate}</p>


                            </div>
                        </div>
                    </div>
                    
                ))

                
            }
            <h1>
                Total:${total.toFixed(2)}
            </h1>
        </div>
    )
}

export default Cart;
