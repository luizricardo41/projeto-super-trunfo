import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick, cardTrunfo,
    } = this.props;

    return (
      <div className="form">
        <label htmlFor="cardName" className="name-input">
          <p>Nome:</p>
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription" className="description-label">
          <p>Descrição</p>
          <textarea
            name="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="4"
            maxLength="115"
            value={ cardDescription }
            onChange={ onInputChange }
          >
            { cardDescription }
          </textarea>
        </label>
        <div className="attributes">
          <label htmlFor="cardAttr1">
            <span>Atributo 1:</span>
            <input
              min="0"
              max="90"
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            <span>Atributo 2:</span>
            <input
              min="0"
              max="90"
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            <span>Atributo 3:</span>
            <input
              min="0"
              max="90"
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="attributes-2">
          <label htmlFor="cardImage">
            <p>Insira a URL da imagem:</p>
            <input
              id="url"
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            <p>Selecione a Raridade:</p>
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            { hasTrunfo === false ? <Checkbox
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              onInputChange={ onInputChange }
            />
              : <span>Você já tem um Super Trunfo em seu baralho</span> }
          </label>
        </div>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
