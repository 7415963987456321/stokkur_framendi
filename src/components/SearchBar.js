import React from 'react';
import './SearchBar.css';

export function SearchBar({setSearchTerm}) {

  const handleSearch = (e) => {
    const string = e.currentTarget.value;
    if (!string|| string < 2) { return; }
    e.preventDefault();
    setSearchTerm(string);
    console.log(`Submitting Name ${string}`)
  }

    return (
        <form onSubmit={handleSearch}>
          <label htmlFor="company-search">
            <span className="visually-hidden">Leita í fyrirtækjaskrá: </span>
          </label>

            <div className="search-bar">
              <input
                name="search"
                onChange={handleSearch}
                type="text"
                placeholder="Leita í fyrirtækjaskrá"
              />
              <button type="submit" >
                Leita
              </button>
            </div>
        </form>
    );
};

