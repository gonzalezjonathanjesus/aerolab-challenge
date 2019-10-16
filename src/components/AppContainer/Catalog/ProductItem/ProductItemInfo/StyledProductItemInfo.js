import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductLink = styled(Link)`
  color: ${props => props.primaryColor};
  text-decoration: none;
`;


/* Shopping Cart */

const SC_ProductName = styled.p`
  height: 2.82em;
  margin: 0;
  margin-bottom: 2%;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
`;

const SC_ProductPrice = styled.p`
  margin: 0;
  color: ${props => props.primaryColor};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
`;

const SC_OriginalPrice = styled.span`
  margin-right: 6px;
  color: #000000;
  font-size: 11.775px;
  text-decoration: line-through;
`;



/* Catalog */

const C_ProductName = styled.p`
  height: 2.82em;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

const C_ProductPrice = styled.p`
  margin-bottom: 16px;
  color: ${props => props.primaryColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const C_OriginalPrice = styled.span`
  margin-right: 6px;
  color: #000000;
  font-size: 11.775px;
  text-decoration: line-through;
`;

const AddToCartButton = styled.button`
  display: inline-block;
  width: 93%;
  height: auto;
  padding: 6% 5.5%;
  box-sizing: border-box;
  border: 1px solid ${props => props.primaryColor};
  border-radius: 2.715px;
  background-color: #FFFFFF;
  color: ${props => props.primaryColor};
  font-size: 13px;

  &:hover {
    border: 1px solid ${props => props.primaryColor};
    background-color: ${props => props.primaryColor};
    color: #ffffff;
  }
`;

const SumSubButton = styled.button`
  width: 22.5%;
  height: auto;
  margin: 0;
  padding: 6.5% 0;
  border: 0;
  border-radius: 2.715px;
  box-sizing: border-box;
  background-color: ${props => props.primaryColor};
  color: #ffffff;
  font-size: 11.25px;
`;

const QuantityInput = styled.input`
  width: 36.5%;
  height: auto;
  margin-left: 8px;
  margin-right: 8px;
  padding: 5.3% 3.95%;
  box-sizing: border-box;
  border: none;
  text-align: center;
  font-size: 14px;
  color: ${props => props.primaryColor};
`;

export const Styled = {
  ShoppingCart: {
    ProductName: SC_ProductName,
    ProductPrice: SC_ProductPrice,
    OriginalPrice: SC_OriginalPrice
  },
  Catalog: {
    ProductLink,
    ProductName: C_ProductName,
    ProductPrice: C_ProductPrice,
    OriginalPrice: C_OriginalPrice,
    AddToCartButton,
    SumSubButton,
    QuantityInput
  }
}