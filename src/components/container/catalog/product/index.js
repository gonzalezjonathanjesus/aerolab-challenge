import React from "react";
import styled from "styled-components"
import ProductPhoto from "./productPhoto";
import ProductInfo from "./productInfo";

const StyledProduct = styled.div`
  width: 43.73vw;
  margin: 1.467vw;
  padding: 2.13vw 2.13vw 4.26vw 2.13vw;
  border-radius: 0.724vw;
  background: #ffffff;
  box-shadow: 0 0 0.966vw 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
`;

const Product = props => {
  return (
    <StyledProduct>
      <ProductPhoto
        primaryColor={props.primaryColor}
        discount={props.discount}
        photo={props.photo}
        name={props.name}
      />
      <ProductInfo
        primaryColor={props.primaryColor}
        id={props.id}
        discount={props.discount}
        name={props.name}
        brand={props.brand}
        originalPrice={props.originalPrice}
        price={props.price}
        cant={props.cant}
        addSeveralProducts={props.addSeveralProducts}
        addProduct={props.addProduct}
        removeProduct={props.removeProduct}
      />
    </StyledProduct>
  );
};

export default Product;
