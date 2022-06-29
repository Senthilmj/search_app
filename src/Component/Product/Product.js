import React from 'react'
import Rating from '../Rating/Rating'
import Slider from '../Slider/Slider'
import { useAlert } from 'react-hook-popup';
import './Product.scss'
const Product = (props) => {

    const { product } = props
    const [alert] = useAlert();

    const getRating = () => {
        const rating = product?.review || {}
        if (Object.keys(rating).length > 0) {
            return <Rating rating={rating} />
        }
        return null
    }

    const price = () => {
        const { priceDisplay = 0, strikeThroughPriceDisplay = 0, discount = 0, offerPriceDisplay = 0 } = product.price

        return (<div className='priceContainer'>
            {offerPriceDisplay ? <div className='offerPriceDisplay product-price'>{offerPriceDisplay}</div> : priceDisplay ? < div className='priceDisplay product-price'> {priceDisplay}</div > : null}
            {strikeThroughPriceDisplay ? <> <div className='strikeThroughPriceDisplay product-price'><small className='strikePrice'>{strikeThroughPriceDisplay}</small > {discount > 0 && < small className='discount'> {discount}%</small>}</div> </> : null
            }
        </div >)
    }

    const getDate = date => {
        const parseDate = new Date(date)
        const dateString = ("0" + parseDate.getDate()).slice(-2) + "-" + ("0" + (parseDate.getMonth() + 1)).slice(-2) + "-" +
            parseDate.getFullYear()
        return dateString;
    }
    const getBadge = () => {
        const expandedProduct = product.expandedProducts
        if (expandedProduct && expandedProduct.length) {
            return expandedProduct[0].badge?.merchantBadgeUrl || null
        }
        return null
    }

    return (
        <div className="productCard">
            {product.promoBadgeUrl && < div className="badge">Hot</div>}
            <div className="productTumb">
                <Slider className={'product-slick'} images={product?.images} />
            </div>
            <div className="productDetails">
                {product.promoBadgeUrl &&
                    < div className="promoContainer">
                        {product.promoBadgeUrl ? <img className="promoBadge" src={product.promoBadgeUrl} alt="promo" /> : null}
                        {product.promoEndTime ? <div className="promoDate"> Promo ends in {getDate(product.promoEndTime)}</div> : null}
                    </div>}
                <span className="productCatagory">{product.brand}</span>
                <h4><div className="product-name">{product.name}</div></h4>
                <div className="productBottomDetails">
                    {price()}
                    <div className="productBadgeCont">
                        {getBadge() && < img src={getBadge()} alt='badge'></img>}
                        {product.location && < span > {product.location}</span>}
                    </div>
                </div>
                {getRating()}
                <div className="productAddButtonCont">
                    <button className="productAdd" type="button" onClick={() => {
                        alert('product Added!')
                    }} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" width="18px" height="20px"><path d="M6.229 4.5H21.75a.75.75 0 0 1 .735.897l-1.5 7.5a.75.75 0 0 1-.735.603H7.129l.3 3H18.75a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.746-.675L4.57 3H2.25a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .746.675L6.23 4.5zm.15 1.5l.6 6h12.656l1.2-6H6.38zM7.5 22.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                        <span>Add to bag</span>
                    </button>
                </div>
            </div >
        </div >
    )
}

export default Product


    //https://codepen.io/mdshifut/pen/VrwBJq
    //merchantBadgeUrl location