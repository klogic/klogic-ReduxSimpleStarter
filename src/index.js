import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'


const API_KEY = 'AIzaSyARO7zct2lmuqgK1Sy0_kFjEVRsNZ4HQlQ';
YTSearch({key : API_KEY, term : 'surfboards'}, function(data){
  console.log(data)
});

// step1 : create new component , declare it and return html block

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// step2 : take html generate it, and put in html

ReactDom.render(<App />, document.querySelector('.container'));

