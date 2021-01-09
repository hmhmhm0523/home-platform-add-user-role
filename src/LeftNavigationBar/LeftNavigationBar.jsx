import React, { PureComponent } from 'react';
import './LeftNavigationBar.styles.scss';
import PropTypes from 'prop-types';
//import { Test } from './LeftNavigationBar.styles';

class LeftNavigationBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('LeftNavigationBar will mount');
  }

  componentDidMount = () => {
    console.log('LeftNavigationBar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('LeftNavigationBar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('LeftNavigationBar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('LeftNavigationBar did update');
  }

  componentWillUnmount = () => {
    console.log('LeftNavigationBar will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <nav className="LeftNavigationBarWrapper">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" focusable="false" viewBox="0 0 48 48" class="NavigationMenu-logoSmall CwThemeFill"><g><path d="M0 0h48v48H0V0zM0 0h48v48H0z" fill="none"></path><path d="M10.4 14.9c-.1-.3.3-.8.5-1C14.6 10.6 19.3 9 24.2 9c.1 0 .2 0 .4 0 .1 0 .2 0 .4 0 4.9 0 9.6 1.6 13.3 4.9.2.2.6.7.5 1-.1.3-.6.5-.9.5-4.3.9-8.3 2.6-11.7 4.6-.5.3-.8.5-1.2.7-.1.1-.3.1-.5.1s-.3 0-.5-.1c-.3-.2-.7-.5-1.2-.7-3.3-2-7.4-3.7-11.7-4.6-.1-.1-.6-.2-.7-.5zM7.1 27.8c0-2.2.9-4.3 2.4-5.9.2-.2.3-.5.3-.7 0-.3-.2-.5-.4-.7-.6-.4-1.3-.8-1.9-1.1-.1-.1-.3-.1-.4-.1-.3 0-.6.2-.8.5-1.5 3-2.3 6.4-2.3 9.8 0 1 .1 2.1.2 3.1 0 .3.3.6.6.7.5.2.9.3 1.4.3.6 0 1.1-.1 1.7-.4.2-.1.4-.3.5-.6.1-.2 0-.5-.1-.7-.8-1.2-1.2-2.7-1.2-4.2zM44 16.6c0-.2-.2-.6-1-.7 0 0 0 0-.1 0-3.8 0-5.6.7-9.1 2-4.3 1.6-7.5 3.6-8.7 4.5-.2.1-.3.2-.5.2s-.5-.2-.7-.3c-1.4-.9-4.4-2.8-8.6-4.4-3.5-1.3-5.3-2-9.1-2 0 0 0 0-.1 0-.8.1-1 .5-1 .7 0 0 0 .1 0 .1s0 .1 0 .1c0 .1 0 .1.1.2.1.2.3.4.8.6.1 0 .1 0 .2.1 4.5 1.7 7.3 4.1 9.9 6.6 3.4 3.5 5.7 8.7 7 13.9.2.6.7.8 1.2.8 0 0 0 0 .1 0 0 0 0 0 .1 0 0 0 0 0 .1 0 0 0 0 0 .1 0 .4 0 1-.2 1.2-.8 1.4-5.2 3.6-10.4 7-13.9 2.6-2.6 5.5-4.9 9.9-6.6.1 0 .1 0 .2-.1.5-.2.7-.4.8-.6 0-.1.1-.1.1-.2 0 0 0-.1 0-.1.1 0 .1-.1.1-.1zM14.8 30.3c-1.6 0-2.9-1.3-2.9-3 0-1.4 1-2.6 2.3-2.9-.9-.9-1.8-1.7-2.8-2.5-1.7 1.2-2.9 3.3-2.9 5.6 0 3.7 2.9 6.7 6.6 6.7 1.8 0 3.6-.9 4.8-2.1-.7-1.3-1.5-2.6-2.3-3.8-.5 1.2-1.6 2-2.8 2z"></path></g></svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-780 0 48 48" enableBackground="new -780 0 48 48" xmlSpace="preserve" class="NavigationMenuItem-itemSmall NavigationMenuItem-itemNotSelected CwImage-cursor"><path d="M-738.6,22.6l-16-16c-0.8-0.8-2-0.8-2.8,0l-16,16c-0.8,0.8-0.8,2,0,2.8c0.8,0.8,2,0.8,2.8,0l0.6-0.6V40c0,1.1,0.9,2,2,2h24	c1.1,0,2-0.9,2-2V24.8l0.6,0.6c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6C-737.8,24.6-737.8,23.4-738.6,22.6z M-758,37v-5h4v5H-758z	 M-746,38h-4v-8c0-1.1-0.9-2-2-2h-8c-1.1,0-2,0.9-2,2v8h-4V20.8l10-10l10,10V38z"></path><path fill="none" d="M-780,0h48v48h-48V0z"></path></svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" class="NavigationMenuItem-itemSmall NavigationMenuItem-itemNotSelected CwImage-cursor"><g><path fill="none" d="M0 0h48v48H0z"></path><path d="M28 30c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5.8-2.8 2.1-3.5l.9-5.7c.1-.5.5-.8 1-.8s.9.4 1 .8l1 5.7c1.2.7 2 2 2 3.5zm16-3c0 4.9-1.8 9.7-5.1 13.3-.4.5-.9.7-1.5.7H10.6c-.6 0-1.1-.2-1.5-.7C5.8 36.7 4 31.9 4 27 4 16 13 7 24 7s20 9 20 20zm-4 0c0-8.8-7.2-16-16-16S8 18.2 8 27c0 3.6 1.2 7.2 3.5 10h25c2.3-2.8 3.5-6.3 3.5-10z"></path></g></svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" focusable="false" viewBox="0 0 48 48" class="NavigationMenuItem-itemSmall NavigationMenuItem-itemNotSelected CwImage-cursor"><g><path d="M43.9 20.5c0-.1 0-.2.1-.3 0-.1 0-.1 0-.2s0-.1 0-.2 0-.1 0-.2 0-.1 0-.2-.1-.2-.1-.2 0-.1 0-.1c-.1-.1-.1-.2-.2-.3-.2-.2-.4-.4-.6-.5l-18-10c-.6-.3-1.3-.3-1.9 0l-18 10c-.2.1-.4.3-.6.5-.1.1-.2.2-.2.3 0 0 0 .1 0 .1 0 .1-.1.2-.1.2 0 .1 0 .1 0 .2s0 .1 0 .2 0 .1 0 .2 0 .1 0 .2 0 .1 0 .2 0 .1 0 .2.1.2.1.3c0 0 0 0 0 .1.1.2.3.4.5.6.1.1.2.2.3.2l4.9 2.4V32c0 .8.4 1.5 1.1 1.8l12 6c.3.1.6.2.9.2s.6-.1.9-.2l12-6c.7-.3 1.1-1 1.1-1.8v-7.8l2-1V32c0 1.1.9 2 2 2s2-.9 2-2V21c-.1-.2-.1-.3-.2-.5zM24 12.3l13.7 7.6L24 26.8l-13.7-6.9L24 12.3zm10 18.5l-10 5-10-5v-4.5l9.1 4.6c.3.1.6.2.9.2s.6-.1.9-.2l9.1-4.6v4.5z"></path><path d="M0 0h48v48H0z" fill="none"></path></g></svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" focusable="false" viewBox="0 0 48 48" class="NavigationMenuItem-itemSmall NavigationMenuItem-itemNotSelected CwImage-cursor"><g><path d="M42 28c0-2.4-1.2-4.5-3-5.7V19c0-8.3-6.7-15-15-15S9 10.7 9 19v3.3c-1.8 1.3-3 3.4-3 5.7 0 3.9 3.1 7 7 7h4c1.1 0 2-.9 2-2V23c0-1.1-.9-2-2-2h-4v-2c0-6.1 4.9-11 11-11s11 4.9 11 11v2h-4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h3.6c-.8 2.3-3 4-5.6 4h-2.8c-.5-.6-1.3-1-2.2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.9 0 1.7-.4 2.2-1H30v-.1c4.8-.5 8.6-4.4 9-9.2 1.8-1.2 3-3.3 3-5.7zm-27-3v6h-2c-1.7 0-3-1.3-3-3s1.3-3 3-3h2zm18 0h2c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2v-6z" fill=""></path><path d="M0 0h48v48H0z" fill="none"></path></g></svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" focusable="false" viewBox="0 0 24 24" class="NavigationMenuItem-itemSmall CwThemeFill NavigationMenuItem-itemSelected CwImage-cursor"><g>        <path d="M8,11 C6.35,11 5,9.65 5,8 C5,6.35 6.35,5 8,5 C9.65,5 11,6.35 11,8 C11,9.65 9.65,11 8,11 Z M3.25,14.45 C3.1,14.6 3,14.85 3,15.1 L3,18 C3,18.55 3.45,19 4,19 L12,19 C12.55,19 13,18.55 13,18 L13,15.1 C13,14.85 12.9,14.65 12.75,14.45 C11.45,12.85 9.75,12 8,12 C6.25,12 4.55,12.85 3.25,14.45 Z M16,5 C14.35,5 13,6.35 13,8 C13,9.65 14.35,11 16,11 C17.65,11 19,9.65 19,8 C19,6.35 17.65,5 16,5 Z M14.8,19 L20,19 C20.55,19 21,18.55 21,18 L21,15.1 C21,14.85 20.9,14.65 20.75,14.45 C19.45,12.85 17.75,12 16,12 C15.2,12 14.45,12.2 13.7,12.5 C13.9,12.7 14.1,12.95 14.3,13.15 C14.75,13.7 15,14.35 15,15.05 L15,18 C15,18.35 14.95,18.7 14.8,19 L14.8,19 Z" id="path-1" fill=""></path><path d="M0 0h48v48H0z" fill="none"></path></g></svg>
        </div>
      </nav >
    );
  }
}

LeftNavigationBar.propTypes = {
  // bla: PropTypes.string,
};

LeftNavigationBar.defaultProps = {
  // bla: 'test',
};

export default LeftNavigationBar;
