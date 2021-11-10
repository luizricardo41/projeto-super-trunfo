import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const {
      cardTrunfo, hasTrunfo, onInputChange,
    } = this.props;
    return (
      <span>
        Super Trunfo:
        <input
          disabled={ hasTrunfo }
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </span>
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checkbox;
