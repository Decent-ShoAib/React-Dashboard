import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./ProductPage.css"
import { useNavigate } from 'react-router-dom';

function ProductPage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
  }
  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const handleBuyClick = (productId)=>{
  navigate(`/product/${productId}`)
  }

  return (
    <>
      <h1>Product List</h1>
      <div className='product-container'>
        {data.map((e, i) => (
          <div className='card' key={e.id}>
            <img src={e.image} alt="" className='product-image' />
            <h2 className='title'>{e.title}</h2>
            <p className='description'>{e.description.slice(0, 100)}</p>
            <h3 className='price'>${e.price}</h3>
            <button className='buy-button' onClick={()=> handleBuyClick(e.id)}>Buy</button>
          </div>
        ))
        }
      </div>
    </>)
}
export default ProductPage

