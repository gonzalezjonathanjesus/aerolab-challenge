import React from "react";
import styled from "styled-components";

const StyledProductPrice = styled.p`
  margin-bottom: 4.26vw;
  color: ${props => props.primaryColor};
  font-size: 4.267vw;
  font-weight: 500;
  line-height: 5.067vw;
`;

const StyledOriginalPrice = styled.span`
  margin-right: 1.6vw;
  color: #000000;
  font-size: 3.140vw;
  text-decoration: line-through;
`;

const ProductPrice = props => {
  return props.discount !== 0 ? (
    <StyledProductPrice primaryColor={props.primaryColor}>
      <StyledOriginalPrice> ${((props.originalPrice).toFixed(2)).replace('.', ',')} </StyledOriginalPrice>
      <span>${((props.price).toFixed(2)).replace('.', ',')}</span>
    </StyledProductPrice>
  ) : (
    <StyledProductPrice primaryColor={props.primaryColor}>
      <span>${((props.price).toFixed(2)).replace('.', ',')}</span>
    </StyledProductPrice>
  );
};

export default ProductPrice;
