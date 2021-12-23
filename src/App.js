import { Component } from 'react';
import './App.css';
import AutocompleteInput from './components/AutocompleteInput';
import FunctionAutocompleteInput from './components/FunctionAutocompleteInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <AutocompleteInput />
        <h2>Function Component</h2>
        <FunctionAutocompleteInput />
      </div>
    );
  }
}

export default App;
