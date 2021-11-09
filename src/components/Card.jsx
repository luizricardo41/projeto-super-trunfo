import React from 'react';
import PropTypes from 'prop-types';
import '../card.css';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <span
          data-testid="name-card"
          value={ cardName }
        >
          { cardName }
        </span>
        <div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            value={ cardImage }
          />
        </div>
        <span
          data-testid="description-card"
        >
          { cardDescription }
        </span>
        <span
          data-testid="attr1-card"
        >
          { cardAttr1 }
        </span>
        <span
          data-testid="attr2-card"
        >
          { cardAttr2 }
        </span>
        <span
          data-testid="attr3-card"
        >
          { cardAttr3 }
        </span>
        <span
          data-testid="rare-card"
        >
          { cardRare }
        </span>
        { (cardTrunfo === true) ? <span data-testid="trunfo-card">Super Trunfo</span>
          : <span> </span> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
