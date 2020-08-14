// ItemForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ItemField from './ItemField';
import formFields from './formFields';

class ItemForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field key={name} component={ItemField} type={type} label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          {this.renderFields()}
          <Link to="/home" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>   
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'itemForm',
  destroyOnUnmount: false
})(ItemForm)