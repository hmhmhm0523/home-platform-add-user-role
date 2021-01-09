import React from 'react';
import PropTypes from 'prop-types';
import './FilterBox.styles.scss';
//import { Test } from './FilterBox.styles';

const FilterBox = (props) => (
  <div className="FilterBoxWrapper">
        <input class="CwTextField-textField form-input form-textField FilterConditions-searchIcon" placeholder="Filter"></input>
  </div>
);

FilterBox.propTypes = {
  // bla: PropTypes.string,
};

FilterBox.defaultProps = {
  // bla: 'test',
};

export default FilterBox;
