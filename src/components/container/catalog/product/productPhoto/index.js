import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`
  margin-bottom: 2.13vw;
  position: relative;
`;

const StyledPhotoImg = styled.img`
  width: 100%;
`;

const StyledDiscount = styled.span`
  display: inline-block;
  position: absolute;
  left: 0;
  min-width: 9.6vw;
  height: 5.33vw;
  padding: 1.3vw 2.1vw;
  box-sizing: border-box;
  border-radius: 0.724vw;
  color: #ffffff;
  font-size: 2.666vw;
  line-height: 2.666vw;
  background-color: ${props => props.primaryColor};
`;

const ProductPhoto = props => {
  return (
    <StyledPhoto>
      <StyledPhotoImg src={props.photo} alt={props.name} />
      {props.discount !== 0 ? (
        <StyledDiscount primaryColor={props.primaryColor}> {props.discount}% </StyledDiscount>
      ) : (
        ""
      )}
    </StyledPhoto>
  );
};

export default ProductPhoto;
