import React, { Component } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import { findById } from "./../../utils/findById";
import { Catalog } from "./Catalog";
import { Header } from "./Header";
import { ProductItem } from "./Catalog/ProductItem"

const initialState = {
  shoppingCart: {
    visible: false,
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

export class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

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
        const currentProduct = findById(
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
    let productToAdd = findById(this.state.shoppingCart.productList, productId);

    if (productToAdd) {
      const newProductList = this.state.shoppingCart.productList.map(
        product => {
          if (product.id === productId) {
            product.cant = parseInt(product.cant + 1);
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
    } else {
      productToAdd = findById(this.state.catalog.productList, productId);
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
    let productToAdd = findById(this.state.shoppingCart.productList, productId);
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
        total: shoppingCart.total + resultado.price,
        visible: this.state.shoppingCart.visible
      }
    });
  };

  handleAddOne = productId => {
    const { shoppingCart } = this.state,
      response = this.addProductToCart(productId);
    console.log("handleAddOne - response");
    console.log(response);
    this.setState({
      shoppingCart: {
        cant: shoppingCart.cant + 1,
        productList: response.productList,
        total: shoppingCart.total + response.price,
        visible: this.state.shoppingCart.visible
      }
    });
  };

  handleRemoveOne = productId => {
    const { shoppingCart } = this.state,
      response = this.removeProductFromCart(productId);
    this.setState({
      shoppingCart: {
        cant: shoppingCart.cant - 1,
        productList: response.productList,
        total: shoppingCart.total - response.price,
        visible: this.state.shoppingCart.visible
      }
    });
  };

  showShoppingCart = () => {
    this.setState({
      shoppingCart: {
        ...this.state.shoppingCart,
        visible: true
      }
    })
  }

  hideShoppingCart = () => {
    this.setState({
      shoppingCart: {
        ...this.state.shoppingCart,
        visible: false
      }
    })
  }

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
    console.log('Component did mount, loadProductList')
    this.loadProductList();
  }

  render() {
    const catalog = this.state.catalog,
      shoppingCart = this.state.shoppingCart;
    console.log("render() - this.state.shoppingCart");
    console.log(shoppingCart);

    return (
      <BrowserRouter>
        <Header
          primaryColor={this.state.style.primaryColor}
          showShoppingCart={this.showShoppingCart}
          hideShoppingCart={this.hideShoppingCart}
          shoppingCart={this.state.shoppingCart}
          removeProductFromCart={this.handleRemoveOne}
          total={this.state.shoppingCart.total}
          cant={this.state.shoppingCart.cant}
        />
        <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Catalog
                  loading={catalog.loading}
                  productList={catalog.productList}
                  shoppingCart={shoppingCart}
                  addSeveralProducts={this.handleAddSeveral}
                  addProduct={this.handleAddOne}
                  removeProduct={this.handleRemoveOne}
                  primaryColor={this.state.style.primaryColor}
                />
              )}
            />
            <Route path='/product/:id' render={({match}) => {
              console.log('*** ProductItem logs ***')
              console.log(this.state)
              const productMatched = this.state.catalog.productList.find(product => product.id === match.params.id)
              const isInShoppingCart = findById(
                this.state.shoppingCart.productList,
                match.params.id
              );
              console.log('product', productMatched)
              if (this.state.catalog.productList.length === 0) {
                return(<div>Loading...</div>)
              }

              return (<ProductItem
              key={productMatched.id}
              id={productMatched.id}
              photo={productMatched.photo}
              originalPrice={productMatched.originalPrice}
              price={productMatched.price}
              discount={Math.round(
                ((productMatched.originalPrice - productMatched.price) * 100) /
                  productMatched.originalPrice
              )}
              name={productMatched.name}
              brand={productMatched.brand}
              cant={isInShoppingCart ? isInShoppingCart.cant : 0}
              addSeveralProducts={this.handleAddSeveral}
              addProduct={this.handleAddOne}
              removeProduct={this.handleRemoveOne}
              primaryColor={this.state.primaryColor}
              />)
            }} />
        </Switch>
        </BrowserRouter>
    );
  }
}
