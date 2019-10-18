import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 58px;
  padding: 13px 19px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.04), inset 0 -1px 0 0 rgba(0,0,0,0.12);
  z-index: 2;
  color: ${props => props.primaryColor};
`;

const HomepageLink = styled(Link)`
  color: ${props => props.primaryColor};
  text-decoration: none;
`;

const Center = styled.div `
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
const Logo = styled.img`
  display: inline-block;
  width: 32px;
  height: auto;
  margin-right: 8px;
`;
const AppName = styled.span`
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.40125px;
`;

const ShoppingCartTotalPrice = styled.span`
  margin-right: 7px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

const ShoppingCart = styled.div`
  position: relative;
  width: 32px;
  height: 20px;
`;
const ShoppingCartImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 21px;
  height: auto;
`;

const ShoppingCartQuantity = styled.div`
  position: absolute;
  top: -11px;
  right: 0;
  width: 17.4px;
  height: 17.4px;
  border-radius: 50%;
  border: 2.37375px solid #ffffff;
  background-color: ${props => props.primaryColor};
  color: #ffffff;
  font-size: 8px;
  font-weight: bold;
  line-height: 18.75px;
  text-align: center;
`;

export const Styled = {
  Nav: {
    Container: Header,
    HomepageLink,
    Center,
    Logo,
    AppName,
    ShoppingCart: {
      Container: ShoppingCart,
      Img: ShoppingCartImg,
      Quantity: ShoppingCartQuantity,
      TotalPrice: ShoppingCartTotalPrice
    }
  },
}