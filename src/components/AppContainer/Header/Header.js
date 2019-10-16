import React from "react";
import { ShoppingCart } from './ShoppingCart';
import { Styled } from "./StyledHeader";
import logo from "./../../../assets/images/header/logo.png";
import shoppingCart from "./../../../assets/images/header/shopping-cart.png";
 
export const Header = props => {
  return (
    <Styled.Nav.Container primaryColor={props.primaryColor}>

      <Styled.Nav.HomepageLink to={'/'} primaryColor={props.primaryColor}>
        <Styled.Nav.Center>
            <Styled.Nav.Logo src={logo} alt="EzShop Logo"/>
            <Styled.Nav.AppName>
              <b>Ez</b>shop
            </Styled.Nav.AppName>
        </Styled.Nav.Center>
      </Styled.Nav.HomepageLink>

      <Styled.Nav.Center>
        <Styled.Nav.ShoppingCart.TotalPrice>
          ${((props.total).toFixed(2)).replace('.', ',')}
        </Styled.Nav.ShoppingCart.TotalPrice>

        <Styled.Nav.ShoppingCart.Container onClick={props.showShoppingCart}>
          <Styled.Nav.ShoppingCart.Img src={shoppingCart}/>
          <Styled.Nav.ShoppingCart.Quantity primaryColor={props.primaryColor}>
            {props.cant}
          </Styled.Nav.ShoppingCart.Quantity>
        </Styled.Nav.ShoppingCart.Container>
      </Styled.Nav.Center>

      {props.shoppingCart.visible ? <ShoppingCart shoppingCart={props.shoppingCart} hideShoppingCart={props.hideShoppingCart}/> : ''}
      
    </Styled.Nav.Container>
  );
};