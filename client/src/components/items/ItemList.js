import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems, addToCart } from '../../actions';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
    this.props.addToCart();
  }

  render() {
    let itemList = this.props.items.map(item=>{
      return(
        <div className="card darken-1" key={item._id}>
            <div className="card-content">
              <span className="card-title">{item.name}</span>
              <Link 
                to="/home/cart" 
                className="btn-floating halfway-fab waves-effect waves-light red" 
                onClick={()=> addToCart(item)}>
                  <i className="material-icons">add</i>
              </Link>
              <p>Category: {item.category}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>   
            </div>
        </div>
      )
    });
    return (
      <div>
        {itemList}
      </div>
    );
  }
}

function mapStateToProps({ items }) {
  return { items };
}


export default connect(mapStateToProps, { fetchItems, addToCart })(ItemList);