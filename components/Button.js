import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import './Button.css';

class Button extends React.Component {

  static propTypes = {
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  inputRef = null;

  setInputRef = (ref) => {
    this.inputRef = ref;
  }

  inputSubmit = event =>{
    this.props.cbInputSubmit(this.inputRef.value);
  }

  render() {

    return (
      <div className="Button">
        <NavLink to={this.props.route} className="page-link" activeClassName="page-link-active">{this.props.name}</NavLink>
      </div>
    )
  }

}

export default Button;
