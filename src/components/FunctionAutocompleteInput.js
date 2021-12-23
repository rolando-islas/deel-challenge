import { useEffect, useState } from "react";
import getData from "../api";

export default function FunctionAutocompleteInput() {
  const [options, setOptions] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  useEffect(async () => {
    const data = await getData();

    setOptions(data);
  }, []);

  const selectOption = (selectedOption) => {
    setShowOptions(false);
    setInputText(selectedOption);
  };

  const changeInputText = async e => {
    setInputText(e.target.value);
    setShowOptions(true);

    const data = await getData(e.target.value);

    setOptions(data);
  };

  return (
    <div className="autocomplete-container">
      <input type="text" placeholder="Type the name of a country..." value={inputText} onChange={e => changeInputText(e)} />
      <div className="autocomplete-options">
        {
          showOptions && options.map(filteredOption => (
            <div className="autocomplete-option" key={filteredOption.name.common} onClick={() => selectOption(filteredOption.name.official)}>{filteredOption.name.official}</div>
          ))
        }
        {
          showOptions && !options.length && "No matches for this query"
        }
      </div>
    </div>
  );
}
