import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './CheckBoxList.styles';

class CheckBoxList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('CheckBoxList will mount');
  }

  componentDidMount = () => {
    console.log('CheckBoxList mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('CheckBoxList will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('CheckBoxList will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('CheckBoxList did update');
  }

  componentWillUnmount = () => {
    console.log('CheckBoxList will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CheckBoxListWrapper">
        <div>
          <input type="checkbox" id="Super Admin" name="Super Admin" />
          <label for="Super Admin">Super Admin</label>
        </div>

        <div>
          <input type="checkbox" id="User Management" name="User Management" />
          <label for="User Management">User Management</label>
        </div>
      </div>
    );
  }
}

CheckBoxList.propTypes = {
  // bla: PropTypes.string,
};

CheckBoxList.defaultProps = {
  // bla: 'test',
};

export default CheckBoxList;
