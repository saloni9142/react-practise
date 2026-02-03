import React from 'react'

const Product = ({post}) => {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>
          {post.description}
        </p>
      </div>
      <div>
        <img src={post.image}/>
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {
          true ? <p>remove item</p> : <p>Ad to cart</p>
        }
      </button>
    </div>
  )
}

export default Product
