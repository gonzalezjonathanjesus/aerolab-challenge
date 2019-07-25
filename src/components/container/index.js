import React, { Component } from "react";
import Catalog from "./catalog";
import Header from "./header";

const initialState = {
  shoppingCart: {
    cant: 0,
    productList: [],
    total: 0
  },
  catalog: {
    loading: true,
    productList: []
  },
  style: {
    primaryColor: `#0070e0`
  }
};

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  findProductById = (array, productId) =>
    array.find(product => product.id === productId);

  addProductsToCart = (productId, cant) => {
    let currentCant, currentPrice, newProductList;

    console.log(`cant: ${isNaN(cant)}`);

    if (isNaN(parseInt(cant))) {
      newProductList = this.state.shoppingCart.productList.map(product => {
        if (product.id === productId) {
          currentCant = product.cant;
          currentPrice = product.price;
          console.log(`currentCant ${currentCant}
          currentPrice ${currentPrice}`);
          product.cant = "";
          return product;
        } else {
          return product;
        }
      });
      console.log(`productsToAdd inside if (isNaN(cant)): ${currentCant}`);

      return {
        cant: 0 - currentCant,
        price: currentCant * -currentPrice,
        productList: newProductList
      };
    } else {
      if (parseInt(cant) === 0) {
        const currentProduct = this.findProductById(
          this.state.shoppingCart.productList,
          productId
        );
        currentCant = currentProduct.cant;
        currentPrice = currentProduct.price;
        const newProductList = this.state.shoppingCart.productList.filter(
          product => product.id !== productId
        );

        return {
          cant: 0 - currentCant,
          price: currentCant * -currentPrice,
          productList: newProductList
        };
      } else {
        newProductList = this.state.shoppingCart.productList.map(product => {
          if (product.id === productId) {
            currentCant = product.cant;
            currentPrice = product.price;
            product.cant = parseInt(cant);
            return product;
          } else {
            return product;
          }
        });
  
        return {
          price: currentPrice * (cant - currentCant),
          cant: cant - currentCant,
          productList: newProductList
        };
      }
    }
  };

  addProductToCart = productId => {
    let productToAdd = this.findProductById(
      this.state.shoppingCart.productList,
      productId
    );

    if (productToAdd) {
      const newProductList = this.state.shoppingCart.productList.map(product => {
        if (product.id === productId) {
          product.cant = parseInt(product.cant + 1);
          return product;
        } else {
          return product;
        }
      });

      return {
        price: productToAdd.price,
        productList: newProductList
      };
    } else {
      productToAdd = this.findProductById(
        this.state.catalog.productList,
        productId
      );
      productToAdd.cant = 1;
      const newProductList = this.state.shoppingCart.productList.concat(
        productToAdd
      );

      return {
        price: productToAdd.price,
        productList: newProductList
      };
    }
  };

  removeProductFromCart = productId => {
    let productToAdd = this.findProductById(
      this.state.shoppingCart.productList,
      productId
    );
    if (productToAdd) {
      if (productToAdd.cant === 1) {
        const newProductList = this.state.shoppingCart.productList.filter(
          product => product.id !== productId
        );
        return {
          price: productToAdd.price,
          productList: newProductList
        };
      } else {
        const newProductList = this.state.shoppingCart.productList.map(
          product => {
            if (product.id === productId) {
              product.cant = parseInt(product.cant - 1);
              return product;
            } else {
              return product;
            }
          }
        );
        return {
          price: productToAdd.price,
          productList: newProductList
        };
      }
    }
  };

  handleAddSeveral = (productId, event) => {
    const { shoppingCart } = this.state,
      resultado = this.addProductsToCart(productId, event.target.value);
    console.log("resultado");
    console.log(resultado);
    this.setState({
      shoppingCart: {
        cant: shoppingCart.cant + resultado.cant,
        productList: resultado.productList,
        total: shoppingCart.total + resultado.price
      }
    });
  };

  handleAddOne = productId => {
    const { shoppingCart } = this.state,
      response = this.addProductToCart(productId)
    console.log("handleAddOne - response");
    console.log(response);
    this.setState({
      shoppingCart: {
        cant: shoppingCart.cant + 1,
        productList: response.productList,
        total: shoppingCart.total + response.price
      }
    });
  };

  handleRemoveOne = productId => {
    const { shoppingCart } = this.state,
      response = this.removeProductFromCart(productId)
    this.setState({
      shoppingCart: {
        cant: shoppingCart.cant - 1,
        productList: response.productList,
        total: shoppingCart.total - response.price
      }
    });
  };

  loadProductList = async () => {
    const response = await fetch("https://challenge-api.aerolab.co/products"),
      data = await response.json();
    this.setState({
      catalog: {
        loading: false,
        productList: data.products
      }
    });
  };

  componentDidMount() {
    this.loadProductList();
  }

  render() {
    const catalog = this.state.catalog,
      shoppingCart = this.state.shoppingCart;
    console.log("render() - this.state.shoppingCart");
    console.log(shoppingCart);
    return (
      <div>
        <Header
          primaryColor={this.state.style.primaryColor}
          total={this.state.shoppingCart.total}
          cant={this.state.shoppingCart.cant}
        />
        <Catalog
          loading={catalog.loading}
          productList={catalog.productList}
          shoppingCart={shoppingCart}
          addSeveralProducts={this.handleAddSeveral}
          addProduct={this.handleAddOne}
          removeProduct={this.handleRemoveOne}
          findProductById={this.findProductById}
          primaryColor={this.state.style.primaryColor}
        />
      </div>
    );
  }
}

export default Container;
