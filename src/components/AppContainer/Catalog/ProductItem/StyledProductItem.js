import styled from "styled-components";

const ProductItem = styled.div`
border-radius: 2.715px;
background: #ffffff;
box-shadow: 0 0 3.6225px 0 rgba(0,0,0,0.08);
box-sizing: border-box;
text-align: center;

@media screen and (max-width: 575px) {
  flex: 0 47%;
  margin: 2.5vw 0;
  padding: 2.367% 2.367% 4.745% 2.367%;
}

@media screen and (min-width: 576px) and (max-width: 767px){
  flex: 0 31%;
  margin: 1.5vw 0;
  padding: 2.367% 2.367% 3% 2.367%!important;
}


@media screen and (min-width: 768px) {
  flex: 0 23%;
  margin: 1vw 0;
  padding: 2.367% 2.367% 3% 2.367%!important;
}


@media screen and (min-width: 768px) {
  flex: 0 23%;
  margin: 1vw 0;
  padding: 2.367% 2.367% 3% 2.367%!important;
}
`;

export const Styled = {
  ProductItem
};