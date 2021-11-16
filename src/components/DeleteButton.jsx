import React from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends React.Component {
  render() {
    const { deleteCard, cardName } = this.props;
    return (
      <button
        type="submit"
        data-testid="delete-button"
        onClick={ deleteCard }
        name={ cardName }
      >
        Excluir
      </button>
    );
  }
}

DeleteButton.propTypes = {
  cardName: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default DeleteButton;
