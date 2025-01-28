import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaHeart, FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
import { TbShoppingBagPlus } from 'react-icons/tb'
import ProductDescription from '../components/ProductDescription'
import ProductFeatures from '../components/ProductFeatures'
import RelatedProducts from '../components/RelatedProducts'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../slice/FavoriteSlice'

const Product = () => {

  const {productId} = useParams()
  const {products, currency, addToCart} = useContext(ShopContext)

  const [product, setProduct] = useState(null)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")

  const dispatch = useDispatch()
  const favorites  = useSelector((state) => state.favorite.favorites)
  
  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId)
    if(selectedProduct){
      setProduct(selectedProduct)
      setImage(selectedProduct.image[0])
    } 
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  if(!product){
    return <div>...Loading</div>
  }

  const handleAddFavorite = () => {
    if(favorites.includes(productId)){
      dispatch(removeFromFavorite(productId))
    }else{
      dispatch(addToFavorite(productId))
    }
  }

  return (
    <div className=''>
      <div className='max-padd-container'>
        {/* product data */}
        <div className='flex gap-12 flex-col xl:flex-row bg-primary p-3 mb-6 rounded-2xl '>
          {/* product image */}
          <div className='flex flex-1 gap-x-2 xl:flex-1'>
            <div className='flexCenter flex-col gap-[7px] flex-wrap'>
              {product.image.map((item, i) => (
                <img key={i} src={item} alt="product image" className={`${image === item ? '' : ''} max-h-[89px] rounded-lg cursor-pointer`} onClick={() => setImage(item)} />
              ))}
            </div>
            <div className='max-h-[377px] w-full flex'>
              <img src={image} alt="product image" className='rounded-xl bg-gray-10'/>
            </div>
          </div>
          {/* product info */}
          <div className='flex-[1.5] rounded-2xl xl:px-7'>
            <h3 className='h3 leading-none'>{product.name}</h3>
            {/* rating and price */}
            <div>
              <div className='flex items-center gap-x-2 text-secondary'>
                <div className='flex gap-x-2 text-secondary'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className='medium-14'>(122)</span>
              </div>
            </div>
            <h4 className='h4 my-2'>{currency}{product.price}.00</h4>
            <p className='max-w-[555px]'>{product.description}</p>
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {[...product.sizes].sort((a,b) => {
                  const order = ["S", "M", "L", "XL", "XXL"]
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item,i) => (
                  <button onClick={() => setSize(item)} key={i} className={`${item === size ? "ring-1 ring-slate-900/20" : "ring-1 ring-slate-900/5"} medium-14 h-8 w-10 bg-primary rounded `}>{item}</button>
                ))}
              </div>
            </div>
            <div className='flex items-center gap-x-4 '>
              <button onClick={() => addToCart(product._id, size)} className='btn-secondary !rounded-lg sm:w-1/2 flexCenter gap-x-2 capitalize'>Add to Cart <TbShoppingBagPlus /></button>
              <button className={`btn-light !rounded-lg !py-3.5 `} onClick={() => handleAddFavorite()}><FaHeart className={`${favorites.includes(productId) ? 'text-red-600' : ''}`}/></button>
            </div>
            <div className='flex items-center gap-x-2 mt-3'>
              <FaTruckFast className='text-lg' />
              <span className='medium-14'>Free delivery on orders over 500$</span>
            </div>
            <hr className='my-3 w-2/3'/>
            <div className='mt-2 flex flex-col gap-1 text-gray-30 text-sm'>
              <div>Authenticy You Can Trust</div>
              <div>Enjoy Cash on Delivery for Your Convenience</div>
              <div>Easy Returns and Exchanges Within 7 Days</div>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedProducts category={product.category} subCategory={product.subCategory}/>
      </div>
      <Footer />
    </div>
  )
}

export default Product