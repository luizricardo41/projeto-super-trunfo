import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './card.css';
import DeleteButton from './components/DeleteButton';
import CardFilters from './components/CardFilters';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrayCards: [],
      arrayPrint: [],
      filterName: '',
      filterOn: false,
      filterTrunfo: false,
      filterRare: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validationButton = this.validationButton.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.clearContents = this.clearContents.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onSaveButtonClick(event) {
    const { cardTrunfo } = this.state;
    event.preventDefault();
    this.addNewCard(this.state);
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.validationButton();
    });
  }

  filter = (name) => {
    const { arrayCards, filterTrunfo, filterRare } = this.state;
    let arrayFilter = arrayCards.filter((card) => card.cardName === name);
    if (filterTrunfo && name !== '' && filterRare !== '') {
      arrayFilter = arrayCards
        .filter((card) => card.cardRare === filterRare
        && card.cardTrunfo === true && card.cardName === name);
    }
    if (filterTrunfo && filterRare !== '') {
      arrayFilter = arrayCards
        .filter((card) => card.cardRare === filterRare && card.cardTrunfo === true);
    }
    if (name !== '' && filterRare !== '') {
      arrayFilter = arrayCards
        .filter((card) => card.cardName === name && card.cardRare === filterRare);
    }
    if (filterRare !== '') {
      arrayFilter = arrayCards.filter((card) => card.cardRare === filterRare);
    }
    if (filterTrunfo && name !== '') {
      arrayFilter = arrayCards
        .filter((card) => card.cardTrunfo === true && card.cardName === name);
    }
    if (filterTrunfo) {
      arrayFilter = arrayCards
        .filter((card) => card.cardTrunfo === true);
    }
    this.setState({
      arrayPrint: [...arrayFilter],
      filterOn: true,
    });
  }

  removeFilter = () => {
    const { arrayCards } = this.state;
    this.setState({
      arrayPrint: [...arrayCards],
      filterOn: false,
    });
  }

  addNewCard(dataNewCard) {
    const { arrayCards } = this.state;
    if (arrayCards.length !== 0) {
      this.setState((prevState) => ({
        arrayCards: [...prevState.arrayCards, dataNewCard],
        arrayPrint: [...prevState.arrayCards, dataNewCard],
      }));
    } else {
      this.setState({
        arrayCards: [dataNewCard],
        arrayPrint: [dataNewCard],
      });
    }
    this.clearContents();
  }

  clearContents() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  validationButton() {
    const {
      cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const sumAttr = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);
    const maxValue = 210;
    const maxValueForAttr = 90;
    const minValueForAttr = 0;
    if (cardName === '' || cardDescription === ''
    || cardImage === '' || cardRare === '' || sumAttr > maxValue
    || cardAttr1 > maxValueForAttr || cardAttr2 > maxValueForAttr
    || cardAttr3 > maxValueForAttr || cardAttr1 < minValueForAttr
    || cardAttr2 < minValueForAttr || cardAttr3 < minValueForAttr
    || cardAttr1 === '' || cardAttr2 === '' || cardAttr3 === '') {
      return this.setState({ isSaveButtonDisabled: true });
    }
    return this.setState({ isSaveButtonDisabled: false });
  }

  deleteCard({ target: { name } }) {
    const { arrayCards } = this.state;
    const deleteItems = arrayCards.find((card) => card.cardName === name);
    const index = arrayCards.indexOf(deleteItems);
    if (deleteItems.cardTrunfo === true) {
      arrayCards.splice(index, 1);
      this.setState({
        arrayCards,
        hasTrunfo: false,
      });
    } else {
      arrayCards.splice(index, 1);
      this.setState({
        arrayCards,
      });
    }
    this.setState({ arrayPrint: arrayCards });
  }

  render() {
    const {
      state: {
        cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
        cardTrunfo, hasTrunfo, isSaveButtonDisabled, filterOn, arrayPrint, filterName,
        filterTrunfo, filterRare },
      onInputChange, onSaveButtonClick, deleteCard, filter, removeFilter } = this;

    return (
      <div>
        <header className="header">
          <h1 className="pageName">Super Tryunfo</h1>
        </header>
        <div className="insert-infos">
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ onInputChange }
              onSaveButtonClick={ onSaveButtonClick }
            />
          </div>
          <div>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div className="container-card">
          <div className="section-deck"><h1>Todas as Cartas</h1></div>
          <div className="filter-decks">
            <div className="filters">
              <CardFilters
                filterName={ filterName }
                onInputChange={ onInputChange }
                filter={ filter }
                filterOn={ filterOn }
                removeFilter={ removeFilter }
                arrayPrint={ arrayPrint }
                filterTrunfo={ filterTrunfo }
                filterRare={ filterRare }
              />
            </div>
            <div className="deck">
              { arrayPrint.map((card, index) => (
                <div key={ `${card.cardName}${index}` } className="card-deck">
                  <Card
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardImage={ card.cardImage }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <DeleteButton
                    deleteCard={ deleteCard }
                    cardName={ card.cardName }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
