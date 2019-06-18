import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './product';
import Card from 'react-bootstrap/Card';
import './../../assets/css/catalog/style.css';
import { fetchProducts } from './../../actions/fetchProducts';

export class Catalog extends Component {
    
    constructor () {
        super();
        this.counter = 0;
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    loadingMessage() {
        return (<p>Cargando productos...</p>);
    }

    listProducts() {
        return (
            <div className="catalog">
                {
                    this.props.catalog.productList.map( (product) => (
                        <Product
                            key={product.id}
                            photo={product.photo}
                            originalPrice={product.originalPrice}
                            price={product.price}
                            discount={Math.round(((product.originalPrice - product.price)* 100) / product.originalPrice)}
                            name={product.name}
                            brand={product.brand}
                        />
                    ))
                }
            </div>
        );
    }

    showError() {
        return (
            <Card bg="danger" text="white" style={{ width: '18rem' }}>
                <Card.Header>Error</Card.Header>
                <Card.Body>
                {/*<Card.Title>Danger Card Title</Card.Title>*/}
                <Card.Text>
                    {this.props.catalog.error}
                </Card.Text>
                </Card.Body>
            </Card>   
        );
    }

    render() {
        this.counter++;
        console.log(this.counter);
        console.log(this.props.catalog)
        if(this.props.catalog.isLoading) {
            return this.loadingMessage();
        } else {
            if(this.props.catalog.error) {
                return this.showError();
            } else {
                return this.listProducts();
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        catalog: {
            ...state.catalog
        }
    }
};

export default connect(
    mapStateToProps, { fetchProducts }
)(Catalog);