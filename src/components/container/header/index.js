import React from "react";
import styled from "styled-components";
import logo from "./../../../assets/images/header/logo.png";
import shoppingCart from "./../../../assets/images/header/shopping-cart.png";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 15.467vw;
  padding: 3.467vw 5.068vw;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.04), inset 0 -1px 0 0 rgba(0,0,0,0.12);
  z-index: 2;
  color: ${props => props.primaryColor};
`;

const StyledDivCenter = styled.div `
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
const StyledLogo = styled.img`
  display: inline-block;
  width: 8.533vw;
  height: auto;
  margin-right: 2.133vw;
`;
const StyledAppName = styled.span`
  font-size: 4.533vw;
  line-height: 5.333vw;
  letter-spacing: -0.107vw;
`;

const StyledShoppingCartTotalPrice = styled.span`
  margin-right: 1.867vw;
  font-size: 3.733vw;
  font-weight: 600;
  line-height: 4.267vw;
`;

const StyledShoppigCart = styled.div`
  position: relative;
  width: 8.533vw;
  height: 5.334vw;
`;
const StyledShoppingCartImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 5.6vw;
  height: auto;
`;

const StyledShoppingCartCant = styled.div`
  position: absolute;
  top: -2.933vw;
  right: 0;
  width: 4.64vw;
  height: 4.64vw;
  border-radius: 50%;
  border: 0.633vw solid #ffffff;
  background-color: ${props => props.primaryColor};
  color: #ffffff;
  font-size: 2.133vw;
  font-weight: bold;
  line-height: 5vw;
`;

const Header = props => {
  return (
    <StyledHeader primaryColor={props.primaryColor}>
      <StyledDivCenter>
        <StyledLogo src={logo} alt="EzShop Logo"/>
        <StyledAppName>
          <b>Ez</b>shop
        </StyledAppName>
      </StyledDivCenter>
      <StyledDivCenter>
        <StyledShoppingCartTotalPrice>
          ${((props.total).toFixed(2)).replace('.', ',')}
        </StyledShoppingCartTotalPrice>
        <StyledShoppigCart>
          <StyledShoppingCartImg src={shoppingCart}/>
          <StyledShoppingCartCant primaryColor={props.primaryColor}>
            {props.cant}
          </StyledShoppingCartCant>
        </StyledShoppigCart>
      </StyledDivCenter>
    </StyledHeader>
  );
};

export default Header;
