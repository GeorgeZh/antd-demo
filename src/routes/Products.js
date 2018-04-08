import React from 'react';
import { connect } from 'dva';
import styles from './Products.css';
import ProductList from '../components/ProductList';

const Products = ({ handleDelete, products }) => {

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products.data };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch({
        type: 'products/delete',
        payload: id
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);