import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends React.Component {

  static propTypes = {
    cbInputSubmit: PropTypes.func.isRequired, //callback that pass info from user input
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
      <div className="Input">
        <input type="text" placeholder="Search..." ref={this.setInputRef}/>
        <input type="button" value='Add video' onClick={this.inputSubmit}/>
      </div>
    )
  }

}

export default Input;
