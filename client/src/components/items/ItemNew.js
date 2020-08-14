// ItemNew shows ItemForm
import React from 'react';
import { reduxForm } from 'redux-form';
import ItemForm from './ItemForm';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const ItemNew = ({ formValues, submitItem, history }) => {
  return (
    <div>
      <ItemForm onSubmit={() => submitItem(formValues, history) } />
    </div>
  )
}


function mapStateToProps(state) {
  return { formValues: state.form.itemForm };
}

export default connect(mapStateToProps, actions)(withRouter(
  reduxForm({
    form: 'itemForm'
  })(ItemNew)
))