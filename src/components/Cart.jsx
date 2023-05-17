import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
function Cart() {
  return (
    <div className='cart'>
        <main>
            <CartItem
            imgSrc={img1}
            name="Mac Book"
            price="2000"
            qty='1'
            id='12345'
             />
        </main>

        <aside>
            <h2>Subtotal:${2000}</h2>
            <h2>Shipping: ${200}</h2>
            <h2>Tax:${20}</h2>
            <h2>Total:${2220}</h2>
        </aside>
    </div>
  )
};

const CartItem=({
    imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deleteHandler,
    id
    })=>(
    <div className="cartItem">
        <img src={imgSrc} alt='item' />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)} />
    </div>
);

export default Cart