import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.styles.scss';
//import { Test } from './SearchBar.styles';

const SearchBar = (props) => (
  <div className="SearchBarWrapper">
    <input class="CwTextField-textField form-input form-textField FilterConditions-searchIcon" placeholder="Search"></input>
  </div>
);

SearchBar.propTypes = {
  // bla: PropTypes.string,
};

SearchBar.defaultProps = {
  // bla: 'test',
};

export default SearchBar;
