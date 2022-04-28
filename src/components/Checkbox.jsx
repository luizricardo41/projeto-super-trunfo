import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const {
      cardTrunfo, hasTrunfo, onInputChange,
    } = this.props;
    return (
      <label htmlFor="cardTrunfo" className="check-trunfo">
        <p>Super Trunfo?</p>
        <input
          id="cardTrunfo"
          disabled={ hasTrunfo }
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checkbox;
