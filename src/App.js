import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    this.addNewCard(this.state);
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
      this.clearContents();
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
      },
      onInputChange,
      onSaveButtonClick,
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
      </div>
    );
  }
}

export default App;
