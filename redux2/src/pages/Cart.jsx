import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {/* Cart Items */}
          <div>
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div>
            <h2>Your Cart</h2>
            <h3>Summary</h3>

            <p>
              <span>Total Items: {cart.length}</span>
            </p>

            <p>Total Amount: ${totalAmount}</p>

            <button>Checkout Now</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
