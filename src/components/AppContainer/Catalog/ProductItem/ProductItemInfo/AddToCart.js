import React from "react";
import styled from "styled-components";

const StyledAddToCartButton = styled.button`
  display: inline-block;
  width: 35.2vw;
  height: 8.533vw;
  padding: 1.87vw 3.075vw;
  box-sizing: border-box;
  border: 1px solid ${props => props.primaryColor};
  border-radius: 0.724vw;
  background-color: #FFFFFF;
  font-size: 3.467vw;
  color: ${props => props.primaryColor};

  &:hover {
    background-color: ${props => props.primaryColor};
    border: 1px solid ${props => props.primaryColor};
    color: #ffffff;
  }
`;
const StyledSumSubButton = styled.button`
  width: 8.533vw;
  height: 8.533vw;
  background-color: ${props => props.primaryColor};
  border-radius: 0.724vw;
  color: #ffffff;
  font-size: 3vw;
`;
const StyledCantInput = styled.input`
  width: 13.867vw;
  height: 8.533vw;
  margin-left: 2.133vw;
  margin-right: 2.133vw;
  padding-left: 1.5vw;
  box-sizing: border-box;
  border: none;
  text-align: center;
  font-size: 3.733vw;
  color: ${props => props.primaryColor};
`;

export const AddToCart = props => {
  if (props.cant !== 0) {
    return (
      <div>
        <StyledSumSubButton
          primaryColor={props.primaryColor}
          onClick={props.removeOne.bind(this, props.id)}
        >
          -
        </StyledSumSubButton>
        <StyledCantInput
          primaryColor={props.primaryColor}
          type="number"
          onChange={props.addSeveral.bind(this, props.id)}
          value={props.cant}
        />
        <StyledSumSubButton
          primaryColor={props.primaryColor}
          onClick={props.addOne.bind(this, props.id)}
        >
          +
        </StyledSumSubButton>
      </div>
    );
  } else {
    return (
      <StyledAddToCartButton
        primaryColor={props.primaryColor}
        onClick={props.addOne.bind(this, props.id)}
      >
        Agregar al carrito
      </StyledAddToCartButton>
    );
  }
};
