import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';
import { addToCart } from '../../actions';
import { Link } from 'react-router-dom';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  handleClick = (id) => {
    this.props.addToCart(id); 
  }

  render() {
    let itemList = this.props.items.map(item=>{
      return(
        <div className="card darken-1" key={item._id}>
            <div className="card-content">
              <span className="card-title">{item.name}</span>
              <span 
                to="/" 
                className="btn-floating halfway-fab waves-effect waves-light red" 
                onClick={()=>{this.handleClick(item.id)}}>
                  <i className="material-icons">add</i>
              </span>
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
        <Link to="/home" className="red btn-flat white-text">Cancel</Link>
      </div>
    );
  }
}

function mapStateToProps({ items }) {
  return { items };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, { fetchItems })(ItemList);