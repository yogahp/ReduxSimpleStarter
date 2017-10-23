import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDI7t7t1DnLxnYsKb9cjTAT0tXFmoJxkus';

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOME)
ReactDOM.render(<App />, document.querySelector('.container'));
