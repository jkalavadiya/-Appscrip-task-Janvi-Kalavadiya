import React, { useState } from 'react'
import Image from 'next/image';
import { IProductInfo } from '../interface/product.interface'
import { WishListIcon } from '@/shared/icons/icon';
import { MultiSelect } from 'react-multi-select-component';
import { options } from '@/shared/constants/constants';

interface IProps{
    productInfo:IProductInfo[],
    isFilter:boolean
}

const ProductDetails:React.FC<IProps> = ({productInfo,isFilter}) => {

    const [selected, setSelected] = useState([]);
const[addWishlist,setWishList]=useState<number>(-1)

const handleWishlist = (id:number)=>{
  setWishList(addWishlist ===id ? -1 :id)
}
  
  return (
    <div className='product-details-container grid'>
      {
        productInfo.map((product:IProductInfo)=>{
            return <>
            {!isFilter &&<div>
                <div className='product-details-wrapper'>
                 <Image src={product.image} alt={product.title} width={0}
												height={0}
												sizes='100vw'
												style={{ width: '100%', height: '100%' }} />
                </div>
                <div className='details-wrapper'>
                    <h1 className='product--title width--full truncate--text font-size--lg mt--16'>{product.title}</h1>
                    <p className='title flex align-items--center font-size--xxs'>Sign in or Create an account to see pricing <button className='no--bg no--border cursor--pointer' onClick={()=>{handleWishlist(product.id)}}>
                    <WishListIcon className={`${addWishlist === product.id ? 'wishlist':""}`}/></button></p>
                </div>
            </div>}

            </>
        })
    }
    {isFilter && <div className='filter-wrapper'>
       <div className='flex '>
       <input type='checkbox'/>
        <p className='ml--16 text--uppercase font--bold'>
        Customizble
        </p>
       </div>
        <hr className='mb--16 mt--16'/>
        <label className='font-size--lg'>IDEAL FOR</label>
        <MultiSelect
        options={options}
        value={selected}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="IDEAL FOR"
    
      />

<hr className='mb--16 mt--16'/>
<label className='font-size--lg text--uppercase'>OCCASION</label>
        <MultiSelect
        options={[{
          label:'ALL',value:"ALL"
        }]}
        value={[{label:'ALL',value:'ALL'}]}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="OCCASION "
        disableSearch={true}
    
      />
      <hr className='mb--16 mt--16'/>
<label className='font-size--lg  text--uppercase'>Work</label>
        <MultiSelect
        options={[{
          label:'ALL',value:"ALL"
        }]}
        value={[{label:'ALL',value:'ALL'}]}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="Work "
        disableSearch={true}
    
      />
       <hr className='mb--16 mt--16'/>
<label className='font-size--lg  text--uppercase'>Fabric</label>
        <MultiSelect
        options={[{
          label:'ALL',value:"ALL"
        }]}
        value={[{label:'ALL',value:'ALL'}]}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="Fabric "
        disableSearch={true}
    
      />
       <hr className='mb--16 mt--16'/>

<label className='font-size--lg  text--uppercase'>segment</label>
        <MultiSelect
        options={[{
          label:'ALL',value:"ALL"
        }]}
        value={[{label:'ALL',value:'ALL'}]}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="segment"
        disableSearch={true}
    
      />

<hr className='mb--16 mt--16'/>

<label className='font-size--lg  text--uppercase'>suitable for</label>
        <MultiSelect
        options={[{
          label:'ALL',value:"ALL"
        }]}
        value={[{label:'ALL',value:'ALL'}]}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="suitable for"
        disableSearch={true}
    
      />

<hr className='mb--16 mt--16'/>
<label className='font-size--lg  text--uppercase'>raw materials</label>
        <MultiSelect
        options={[{
          label:'ALL',value:"ALL"
        }]}
        value={[{label:'ALL',value:'ALL'}]}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="raw materials "
        disableSearch={true}
    
      />

<hr className='mb--16 mt--16'/>
<label className='font-size--lg  text--uppercase'>Pattern</label>
        <MultiSelect
        options={[{
          label:'ALL',value:"ALL"
        }]}
        value={[{label:'ALL',value:'ALL'}]}
        className='mt--16' 
        onChange={setSelected}
        labelledBy="Pattern"
        disableSearch={true}
    
      />
        </div>
        }

        {isFilter &&<div className='product-info'>
        {
        productInfo.map((product:IProductInfo)=>{
            return <>
            <div>
                <div className='product-details-wrapper'>
                 <Image src={product.image} alt={product.title} width={0}
												height={0}
												sizes='100vw'
												style={{ width: '100%', height: '100%' }} />
                </div>
                <div>
                    <h1 className='product--title width--full truncate--text font-size--lg mt--16'>{product.title}</h1>
                    <p className='title flex align-items--center font-size--xxs'>Sign in or Create an account to see pricing <button className='no--bg no--border cursor--pointer' onClick={()=>{handleWishlist(product.id)}}>
                    <WishListIcon className={`${addWishlist === product.id ? 'wishlist':""}`}/></button></p>
                </div>
            </div>

            </>
        })
    }
        </div>}
    </div>
  )
}

export default ProductDetails
