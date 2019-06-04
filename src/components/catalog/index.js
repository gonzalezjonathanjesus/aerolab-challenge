import React, { Component } from 'react';
import Product from './product';
import './../../assets/css/catalog/style.css';

export default class Catalog extends Component {
    constructor () {
        super();

        this.state = {
            products: [],
        };
    }

    fetchData(url) {
        this.setState({isLoading: true});

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                this.setState({isLoading: false});
                return response;
            })
            .then((response) => response.json())
            .then((products) => this.setState({ products }))
            .catch(() => this.setState({error: true}));

    }

    componentDidMount() {
        this.fetchData('https://challenge-api.aerolab.co/products');
    }

    render() {
        console.log(this.state.products.products)
        if(this.state.isLoading) {
            return (<p>Cargando productos...</p>)
        } else {
            if(this.state.products.products) {
                return (<div className="catalog">
                        {this.state.products.products.map( (product) => (
                        <Product
                            key={product.id}
                            photo={product.photo}
                            originalPrice={product.originalPrice}
                            price={product.price}
                            discount={Math.round(((product.originalPrice - product.price)* 100) / product.originalPrice)}
                            name={product.name}
                            brand={product.brand}
                        />
                ))}
                </div>)
            } else {
                return <p>Algo salió mal...</p>
            }
        }
    }
}