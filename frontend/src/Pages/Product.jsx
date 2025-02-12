import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx'
import ProductDisplay from '../Components/ProductDiplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RealatedProduct from '../Components/RealatedProducts/RealatedProduct.jsx';

const Product =() => {
  const {all_product} = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productId));
  return (
    <div> 
          <Breadcrum product={product}/>
          <ProductDisplay product={product}/>
          <DescriptionBox/>
          <RealatedProduct/>
    </div>
  )
}

export default Product