import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {


  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
<React.Fragment>
    <input className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange= {onSearchValueChange}
    />
</React.Fragment>
  );
}

export { TodoSearch };
