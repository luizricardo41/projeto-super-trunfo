import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardFilters extends Component {
  renderButton = () => {
    const { removeFilter, arrayPrint } = this.props;
    return (
      <>
        <button
          type="button"
          onClick={ removeFilter }
        >
          Remover Filtros
        </button>
        {arrayPrint.length === 0 && <p><h3>Sem resultados para a pesquisa...</h3></p>}
      </>
    );
  };

  render() {
    const { filterName, onInputChange, filter, filterOn, filterTrunfo,
      filterRare } = this.props;
    const { renderButton } = this;
    return (
      <div className="filters">
        <h2>Filtros de Busca</h2>
        <label htmlFor="filterName">
          Nome:
          <input
            type="text"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="filterRare">
          Raridade:
          <select
            name="filterRare"
            value={ filterRare }
            onChange={ onInputChange }
          >
            <option value=""> </option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          Super Trunfo
          <input
            id="filterTrunfo"
            type="checkbox"
            name="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <div className="btn-filters">
          <button
            type="button"
            onClick={ () => filter(filterName) }
          >
            Buscar
          </button>
          {filterOn && renderButton()}
        </div>
      </div>
    );
  }
}

CardFilters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  filterOn: PropTypes.bool.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  arrayPrint: PropTypes.arrayOf(PropTypes.object).isRequired,
};
