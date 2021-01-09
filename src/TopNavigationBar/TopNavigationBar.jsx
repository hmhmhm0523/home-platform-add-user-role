import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TopNavigationBar.styles.scss';
//import { Test } from './TopNavigationBar.styles';

class TopNavigationBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('TopNavigationBar will mount');
  }

  componentDidMount = () => {
    console.log('TopNavigationBar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TopNavigationBar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TopNavigationBar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('TopNavigationBar did update');
  }

  componentWillUnmount = () => {
    console.log('TopNavigationBar will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TopNavigationBarWrapper">
        <div className="Spacer"></div>
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M10,17 C11.55,17 13,16.45 14.2,15.6 L19.3,20.7 C19.5,20.9 19.75,21 20,21 C20.25,21 20.5,20.9 20.7,20.7 C21.1,20.3 21.1,19.7 20.7,19.3 L15.6,14.2 C16.45,13 17,11.55 17,10 C17,6.15 13.85,3 10,3 C6.15,3 3,6.15 3,10 C3,13.85 6.15,17 10,17 Z M10,5 C12.75,5 15,7.25 15,10 C15,12.75 12.75,15 10,15 C7.25,15 5,12.75 5,10 C5,7.25 7.25,5 10,5 Z" id="path-1"></path>
          </svg>
        </div>
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M18.5,18 C18.5,19.1 17.6,20 16.5,20 C15.4,20 14.5,19.1 14.5,18 C14.5,16.9 15.4,16 16.5,16 C17.6,16 18.5,16.9 18.5,18 Z M9,16 C7.9,16 7,16.9 7,18 C7,19.1 7.9,20 9,20 C10.1,20 11,19.1 11,18 C11,16.9 10.1,16 9,16 Z M20.95,6.25 L18.95,14.25 C18.85,14.7 18.45,15 18,15 L7.5,15 C7.05,15 6.65,14.7 6.55,14.25 L4.6,6.5 L4.1,6 L3,6 C2.45,6 2,5.55 2,5 C2,4.45 2.45,4 3,4 L4.5,4 C4.75,4 5,4.1 5.2,4.3 L5.9,5 L20,5 C20.3,5 20.6,5.15 20.8,5.4 C21,5.65 21.05,5.95 20.95,6.25 Z M18.7,7 L6.8,7 L8.3,13 L17.25,13 L18.7,7 Z" id="path-1"></path>
          </svg>
        </div>
        <div> <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="M8,12 C8,13.1 7.1,14 6,14 C4.9,14 4,13.1 4,12 C4,10.9 4.9,10 6,10 C7.1,10 8,10.9 8,12 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 Z M18,10 C16.9,10 16,10.9 16,12 C16,13.1 16.9,14 18,14 C19.1,14 20,13.1 20,12 C20,10.9 19.1,10 18,10 Z M8,6 C8,7.1 7.1,8 6,8 C4.9,8 4,7.1 4,6 C4,4.9 4.9,4 6,4 C7.1,4 8,4.9 8,6 Z M12,4 C10.9,4 10,4.9 10,6 C10,7.1 10.9,8 12,8 C13.1,8 14,7.1 14,6 C14,4.9 13.1,4 12,4 Z M18,4 C16.9,4 16,4.9 16,6 C16,7.1 16.9,8 18,8 C19.1,8 20,7.1 20,6 C20,4.9 19.1,4 18,4 Z M8,18 C8,19.1 7.1,20 6,20 C4.9,20 4,19.1 4,18 C4,16.9 4.9,16 6,16 C7.1,16 8,16.9 8,18 Z M12,16 C10.9,16 10,16.9 10,18 C10,19.1 10.9,20 12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 Z M18,16 C16.9,16 16,16.9 16,18 C16,19.1 16.9,20 18,20 C19.1,20 20,19.1 20,18 C20,16.9 19.1,16 18,16 Z" id="path-1"></path>
        </svg>
        </div>
        <div class="Avatar-container">MH</div>
      </div>
    );
  }
}

TopNavigationBar.propTypes = {
  // bla: PropTypes.string,
};

TopNavigationBar.defaultProps = {
  // bla: 'test',
};

export default TopNavigationBar;
