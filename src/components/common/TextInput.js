import React from "react";
import PropTypes from 'prop-types';

function TextInput(props) {
    let wrapperClass = "form-group";
    if(props.error.length > 0){
        wrapperClass += " has-error";
    }
    return (
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            onChange={props.onChange}
            name={props.name}
            className="form-control"
            value={props.value}
          />
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    )

}

export default TextInput;

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

TextInput.defaultProps = {
    error: ""
}