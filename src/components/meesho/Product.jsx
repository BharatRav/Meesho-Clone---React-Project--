import React, { useState } from 'react'
import styles from "./Product.module.css";
import { useStateValue } from "../../utils/StateProvider";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import axios from 'axios';
const Product = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [data,setData]=useState({});
  const params=useParams();
useEffect(()=>
{
  axios(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${params.id}`).then((res)=>
  {
    return res.data;
  }).then((res)=>
  {
    console.log(res);
    setData(res);
  }).catch((err)=>
  {
    console.log("error occured");
  })  
},[params]);
const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        
        id:data.id,
        title:data.title,
        price:data.price,
        image:data.image,
        rating:data.rating.rate,
        quantity:1
      },
    });
  };
  console.log(params.id);
  return (
    <section className={styles['product__container']}>
    <section className={styles['left__side']}>
         
         <img className={styles['img']} src={`${data.image}`} alt="" />
           
         
    </section>
    <section className={styles['right__side']}>
          <h3>{data.title}</h3>
          <h2>Rs: {data.price}</h2>
          <section className={styles['cat__container']}>
          <span className={styles['cat__span']}>category</span>
          <span className={styles['cat__spandata']}>{data.category}</span>
          </section>
          <section className={styles['product-description']}>
          <p>Product Description</p>
          <div className={styles['des']}>
          {data.description}</div>
          </section>
          <button className={styles['btn']} onClick={addToBasket}>Add To Cart</button>
          </section>
    </section>
  )
}

export default Product



