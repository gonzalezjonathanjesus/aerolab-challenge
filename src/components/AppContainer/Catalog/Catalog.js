import React, { Component } from "react";
import { findById } from "./../../../utils/findById"
import styled from "styled-components";
import  { ProductItem } from "./ProductItem";
//import Card from "react-bootstrap/Card";

const StyledCatalog = styled.div`
  padding-top: 58px;
  background-color: #f5f5f5;
`;

const StyledTitle = styled.div`
  width: 100%;
  padding: 5.5% 5%;
  padding-bottom: 1%;
  box-sizing: border-box;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
`;

const StyledProductList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 5%;
  box-sizing: border-box;
`;

export class Catalog extends Component {
  constructor() {
    super();
    this.counter = 0;
  }

  loadingMessage() {
    return <p>Cargando productos...</p>;
  }

  listProducts() {
    return (
      <StyledCatalog>
        <StyledTitle>Almacén</StyledTitle>
        <StyledProductList>
          {this.props.productList.map(product => {
            let isInShoppingCart = findById(
              this.props.shoppingCart.productList,
              product.id
            );
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                photo={product.photo}
                originalPrice={product.originalPrice}
                price={product.price}
                discount={Math.round(
                  ((product.originalPrice - product.price) * 100) /
                    product.originalPrice
                )}
                name={product.name}
                brand={product.brand}
                cant={isInShoppingCart ? isInShoppingCart.cant : 0}
                addSeveralProducts={this.props.addSeveralProducts}
                addProduct={this.props.addProduct}
                removeProduct={this.props.removeProduct}
                primaryColor={this.props.primaryColor}
              />
            );
          })}
        </StyledProductList>
      </StyledCatalog>
    );
  }

  render() {
    return this.props.loading ? this.loadingMessage() : this.listProducts();
  }
}