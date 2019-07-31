import React from "react";
import styled from "styled-components";
import Truncate from "react-truncate";

const StyledProductName = styled.p`
  height: 2.82em;
  margin-bottom: 3.2vw;
  font-size: 3.733vw;
  line-height: 5.333vw;
  text-align: center;
`;

export const ProductItemName = props => {
  return (
    <StyledProductName>
      <Truncate lines={2} ellipsis={<span>...</span>}>
        {props.name}
      </Truncate>
    </StyledProductName>
  );
};