import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name-of-card">
          Nome da carta:
          <input
            type="text"
            name="name-of-card"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição da carta:
          <textarea
            name="description"
            data-testid="description-input"
            cols="30"
            rows="10"
          >
            teste
          </textarea>
        </label>
        <label htmlFor="attribute1">
          Atributo 1:
          <input
            type="number"
            name="attribute1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 2:
          <input
            type="number"
            name="attribute2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 3:
          <input
            type="number"
            name="attribute3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-url">
          Insira a URL da imagem:
          <input
            type="text"
            name="image-url"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="select-rare">
          Selecione a Raridade:
          <select
            name="select-rare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            name="super-trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
