import React from 'react';
import Truncate from 'react-truncate';

function Product (props) {
    var price;
    var discount;
    if(props.originalPrice !== props.price) {
        price = <p className="productPrice"><span className="originalPrice">${props.originalPrice}</span><span>${props.price}</span></p>;
        discount = props.discount;
    } else {
        price = <p className="productPrice"><span>${props.price}</span></p>
    }

    if (props.discount !== 0) {
        discount = <span className="discountPercent">{props.discount}%</span>
    }
    return (
    <div className="productItem">
        <div className="productPhoto">
            <img src={props.photo} alt={props.name}/>
            {discount}
        </div>
        <div className="productInfo">
            <p className="productName">
                <Truncate
                lines={2}
                ellipsis={<span>...</span>}
                >
                    {props.name}
                </Truncate>
            </p>
            {price}
            <div className="addToBag">Agregar al carrito</div>
        </div>
    </div>
    );
}

export default Product;