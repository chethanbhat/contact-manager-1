import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          {branding}
        </NavLink>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home <i className="fas fa-home" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact/add" className="nav-link">
                Add <i className="fas fa-plus" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About <i className="fas fa-question" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.prototypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
