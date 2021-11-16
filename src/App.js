import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './card.css';
import DeleteButton from './components/DeleteButton';

class App extends React.Component {
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

  addNewCard(dataNewCard) {
    const { arrayCards } = this.state;
    if (arrayCards.length !== 0) {
      this.setState((prevState) => ({
        arrayCards: [...prevState.arrayCards, dataNewCard],
      }));
    } else {
      this.setState({
        arrayCards: [dataNewCard],
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
  }

  render() {
    const {
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
        isSaveButtonDisabled,
        arrayCards,
      },
      onInputChange,
      onSaveButtonClick,
      deleteCard,
    } = this;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
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
        </div>
        <div className="container-card">
          {
            arrayCards.map((card) => (
              <div key={ card.cardName }>
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
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
