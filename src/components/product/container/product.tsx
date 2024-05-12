import React from 'react'
import ProductDetails from '../components/productDeatils';

import '../styles/product.scss'
import ProductHeader from '../components/productHeader';
const getData = async () => {
	const response = await fetch('https://fakestoreapi.com/products');

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();
	return data;
};


const Product:React.FC = async () => {
  const apiData = await getData();
  return (
    <div className='container'>
      <ProductHeader productInfo={apiData}/>

    </div>
  )
}

export default Product
