import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './items/ItemList';

const Dashboard = () => {
  return (
    <div>
      <ItemList />
      {/* <h2>Dashboard</h2> */}
      <div className="fixed-action-btn">
        <Link to="/home/new" className="btn-floating btn-large blue">
            <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;