import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'

function ProductDetail() {

    const [product, setProduct] = useState(null);

    const {productId} = useParams();
   
    const fetchProduct = async () => {
        await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            })
    }

    useEffect(()=>{
        fetchProduct();
    }, [])

    if(!product){
        return <div>loading.....</div>
    }

    return (
        <>
            <img src={product.image} alt="" className='product-image-detail' />
            <h2 className='titledetail'>{product.title}</h2>
            <p className='descriptiondetail'>{product.description}</p>
            <h3 className='pricedetail'>${product.price}</h3>
        </>
    )
}

export default ProductDetail


