import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

   //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  }
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  render() {
            
    let addedItems = this.props.items.length ?
      (  
        this.props.items.map(item => {
          return (
            <li className="collection-item avatar" key={item._id}>                  
              <div className="item-desc">
                <span className="title">{item.name}</span>
                <p>{item.desc}</p>
                <p><b>Price: {item.price}$</b></p> 
                <p>
                  <b>Quantity: {item.quantity}</b> 
                </p>
                <div className="add-remove">
                  <Link 
                    to="/cart">
                      <i className="material-icons" 
                        onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up
                      </i>
                  </Link>
                  <Link 
                    to="/cart">
                      <i className="material-icons" 
                        onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down
                      </i>
                  </Link>
                </div>
                <button 
                  className="waves-effect waves-light btn pink remove" 
                  onClick={()=>{this.handleRemove(item.id)}}>Remove
                </button>
              </div>                 
            </li>                        
          )
        })
      ):
      (
        <p>Nothing.</p>
      )
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            {addedItems}
          </ul>
        </div>  
      </div>
    )
  }
}

function mapStateToProps({ items }) {
  return { items };
}

function mapDispatchToProps(dispatch) {
  return{
  removeItem: (id) => {dispatch(removeItem(id))},
  addQuantity: (id) => {dispatch(addQuantity(id))},
  subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
}
}

export default connect(mapStateToProps, mapDispatchToProps, { fetchItems })(Cart);