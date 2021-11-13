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
          className="card-name"
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
          className="description"
          data-testid="description-card"
        >
          { cardDescription }
        </span>
        <div className="container-attr">
          <span
            className="card-attr"
            data-testid="attr1-card"
          >
            Atributo 1:
            <p>{cardAttr1}</p>
          </span>
          <span
            className="card-attr"
            data-testid="attr2-card"
          >
            Atributo 2:
            <p>{cardAttr2}</p>
          </span>
          <span
            className="card-attr"
            data-testid="attr3-card"
          >
            Atributo 3:
            <p>{cardAttr3}</p>
          </span>
          <span
            className="card-rare"
            data-testid="rare-card"
          >
            { cardRare }
          </span>
        </div>
        { cardTrunfo && <p className="trunfo" data-testid="trunfo-card">Super Trunfo</p> }
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
