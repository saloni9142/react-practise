import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
  };

  return (
    <div>
      <p>{post.title}</p>

      <p>{post.description}</p>

      <img src={post.image} alt={post.title} />

      <p>${post.price}</p>

      {cart.some((p) => p.id === post.id) ? (
        <button onClick={removeFromCart}>
          Remove Item
        </button>
      ) : (
        <button onClick={addToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
