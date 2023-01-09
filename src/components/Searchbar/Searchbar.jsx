import css from './Searchbar.module.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ImSearch } from 'react-icons/im';

export default function Searchbar({ onSubmit }) {
  const [searchData, setSearchData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchData);
  };

  const handleChange = evt => {
    const { value } = evt.target;
    setSearchData(value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <ImSearch size={25} />
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
