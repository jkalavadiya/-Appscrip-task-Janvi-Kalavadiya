'use client'
import React, { useState } from 'react'
import ReactSelect from '@/shared/components/reactSelect'
import { productReactSelectType, reactSelectStyles } from '@/shared/components/reactSelectStyles'
import { DROPDOWN_LIST } from '@/shared/constants/constants'
import { ArrowLeft } from '@/shared/icons/icon'
import ProductDetails from './productDeatils'
import { IProductInfo } from '../interface/product.interface'


interface IProps{
    productInfo:IProductInfo[]
}
const ProductHeader:React.FC<IProps> = ({productInfo}) => {

    const [isFilter,setISFilter]=useState(false)
  return (
    <>
    <div className='product-header-wrapper flex width--full'>
      <div className='filter-wrapper flex align-items--center width--50 '>
        <p className='total-item font-size--lg text--uppercase'>3425 Items</p>
        <div className='flex align-items--center'>
            <ArrowLeft className='mr--10 arrow-icon'/>
            <button className='filter-btn no--bg no--border text--uppercase cursor--pointer' onClick={()=>{
                setISFilter(!isFilter)
            }}>{
                isFilter ? 'HIDE FILTER' :' SHOW FILTER'
            }</button>
        </div>
      </div>
    
    <div className='dropdown-list width--50 flex justify-content--end'>
    <ReactSelect 
      defaultValue={DROPDOWN_LIST[0]}
      styles={{...reactSelectStyles,...productReactSelectType}}
      options={DROPDOWN_LIST}
	onChange={()=>{console.log('in')}} />
    </div>
    </div>
    <ProductDetails productInfo={productInfo} isFilter={isFilter}/>
    </>
  )
}

export default ProductHeader
