import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCt9ZhR2ufdab7Cc0Uak_rcT7goGQVbKT4';

YTSearch({ key: API_KEY, term: 'Our Last Night' }, function(data) {
  console.log(data);
});

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
