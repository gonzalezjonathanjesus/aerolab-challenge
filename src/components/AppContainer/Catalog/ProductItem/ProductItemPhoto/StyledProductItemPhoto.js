
import styled from "styled-components"


/* Shopping Cart */

const SC_Photo = styled.div`
  position: relative;
  width: 20%;
`;

const SC_PhotoImg = styled.img`
  width: 100%;
`;

const SC_Discount = styled.span`
  display: inline-block;
  position: absolute;
  left: 0;
  min-width: 25.07%;
  height: 13.75%;
  padding: 3.45% 5.525%;
  box-sizing: border-box;
  border-radius: 2.715px;
  color: #ffffff;
  font-size: 10px;
  line-height: 10px;
  background-color: ${props => props.primaryColor};
`;


/* Catalog */

const C_Photo = styled.div`
  margin-bottom: 8px;
  position: relative;
`;

const C_PhotoImg = styled.img`
  width: 100%;
`;

const C_Discount = styled.span`
  display: inline-block;
  position: absolute;
  left: 0;
  min-width: 25.07%;
  height: 13.75%;
  padding: 3.45% 5.525%;
  box-sizing: border-box;
  border-radius: 2.715px;
  color: #ffffff;
  font-size: 10px;
  line-height: 10px;
  background-color: ${props => props.primaryColor};
`;

export const Styled = {
  ShoppingCart: {
    Photo: SC_Photo,
    PhotoImg: SC_PhotoImg,
    Discount: SC_Discount
  },
  Catalog: {
    Photo: C_Photo,
    PhotoImg: C_PhotoImg,
    Discount: C_Discount
  }
};