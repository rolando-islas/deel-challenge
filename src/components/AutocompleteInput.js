import { Component } from 'react';

// In a real app I would create an alias for importing modules. I usually use @ as an alias for src folder instead of using relative paths.
import getData from '../api';

export default class AutocompleteInput extends Component {
  constructor() {
    super();

    this.state = {
      options: [],
      inputText: '',
      showOptions: false
    };
  }
  async componentDidMount() {
    const data = await getData();

    this.setState({ options: data });
  }
  selectOption(selectedOption) {
    this.setState({
      showOptions: false,
      inputText: selectedOption
    });
  }
  // In a real app, I would debounce this function to avoid calling the API a lot.
  changeInputText(e) {
    this.setState({
      inputText: e.target.value,
      showOptions: true
    }, async () => {
      const options = await getData(this.state.inputText);

      this.setState({ options: options });
    });
  }
  render() {
    return (
      <div className="autocomplete-container">
        <input
          type="text"
          placeholder="Type the name of a country..."
          value={this.state.inputText}
          onChange={e => this.changeInputText(e)}
        />
        <div className="autocomplete-options">
          {
            this.state.showOptions && this.state.options.map(filteredOption => (
              <div
                className="autocomplete-option"
                key={filteredOption.name.common}
                onClick={() => this.selectOption(filteredOption.name.official)}
              >
                {filteredOption.name.official}
              </div>
            ))
          }
          {
            this.state.showOptions && !this.state.options.length && "No matches for this query"
          }
        </div>
      </div>
    );
  }
}
