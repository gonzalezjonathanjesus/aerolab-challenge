import React from "react";
import { Styled } from './StyledProductItemPhoto.js'

export const ProductItemPhoto = props => {
  if (props.location === 'shoppingCart') {
    return (
      <Styled.ShoppingCart.Photo>
        <Styled.ShoppingCart.PhotoImg src={props.photo} alt={props.name} />
        {props.discount !== 0 ? (
          <Styled.ShoppingCart.Discount primaryColor={props.primaryColor}> {props.discount}% </Styled.ShoppingCart.Discount>
        ) : (
          ""
        )}
      </Styled.ShoppingCart.Photo>
    );
  } else {
    return (
      <Styled.Catalog.Photo>
        <Styled.Catalog.PhotoImg src={props.photo} alt={props.name} />
        {props.discount !== 0 ? (
          <Styled.Catalog.Discount primaryColor={props.primaryColor}> {props.discount}% </Styled.Catalog.Discount>
        ) : (
          ""
        )}
      </Styled.Catalog.Photo>
    );
  }
};
