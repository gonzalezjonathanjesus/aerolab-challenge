import React from "react";
import { Styled } from "./StyledProductItemInfo";

export const AddToCart = props => {
  if (props.cant !== 0) {
    return (
      <div>
        <Styled.Catalog.SumSubButton
          primaryColor={props.primaryColor}
          onClick={props.removeOne.bind(this, props.id)}
        >
          -
        </Styled.Catalog.SumSubButton>
        <Styled.Catalog.QuantityInput
          primaryColor={props.primaryColor}
          type="number"
          onChange={props.addSeveral.bind(this, props.id)}
          value={props.cant}
        />
        <Styled.Catalog.SumSubButton
          primaryColor={props.primaryColor}
          onClick={props.addOne.bind(this, props.id)}
        >
          +
        </Styled.Catalog.SumSubButton>
      </div>
    );
  } else {
    return (
      <Styled.Catalog.AddToCartButton
        primaryColor={props.primaryColor}
        onClick={props.addOne.bind(this, props.id)}
      >
        Agregar al carrito
      </Styled.Catalog.AddToCartButton>
    );
  }
};
