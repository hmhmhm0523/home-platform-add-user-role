import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './NavigationAppContent.styles.scss'
import PropTypes from 'prop-types';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import FilterBox from '../FilterBox/FilterBox';
import ConnectWiseTable from '../ConnectWiseTable/ConnectWiseTable';
//import { Test } from './NavigationAppContent.styles';

class NavigationAppContent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('NavigationAppContent will mount');
  }

  componentDidMount = () => {
    console.log('NavigationAppContent mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('NavigationAppContent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NavigationAppContent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('NavigationAppContent did update');
  }

  componentWillUnmount = () => {
    console.log('NavigationAppContent will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NavigationAppContentWrapper">
        <div className='HomePage-toppanel'>
          <TopNavigationBar></TopNavigationBar>
          <h1>User Management</h1>
        </div>
        <div className="HomePage-podsPanel">
          <div className='CwFlexbox-wrap HomePage-bigPods CwFlexbox-column'>
            <div className='Pod-pod NewsAndEvents-newsAndEventsPodContainer'>
              <Tabs>
                <TabList>
                  <Tab>Users</Tab>
                  <Tab>User Roles</Tab>
                  <Tab>Connected Apps</Tab>
                </TabList>

                <TabPanel>
                  <section className='Toolbar'>
                    <button>Add User</button>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M15,10.5 C15,12.15 13.65,13.5 12,13.5 C10.35,13.5 9,12.15 9,10.5 C9,8.85 10.35,7.5 12,7.5 C13.65,7.5 15,8.85 15,10.5 Z M17.25,17.5 C15.8,15.9 13.95,15 12,15 C10.05,15 8.2,15.9 6.75,17.45 C6.6,17.65 6.5,17.85 6.5,18.1 L6.5,20 C6.5,20.55 6.95,21 7.5,21 L16.5,21 C17.05,21 17.5,20.55 17.5,20 L17.5,18.15 C17.5,17.9 17.4,17.65 17.25,17.5 Z M19.8,16 C20.6,14.65 21,13.1 21,11.5 C21,6.55 16.95,2.5 12,2.5 C7.05,2.5 3,6.55 3,11.5 C3,13.1 3.4,14.65 4.2,16 C4.5,16.5 5.1,16.65 5.55,16.35 C6.05,16.05 6.2,15.45 5.9,15 C5.3,13.95 4.95,12.75 4.95,11.5 C4.95,7.65 8.1,4.5 11.95,4.5 C15.8,4.5 18.95,7.65 18.95,11.5 C18.95,12.75 18.65,13.95 18,15 C17.7,15.5 17.9,16.1 18.35,16.35 C18.5,16.45 18.7,16.5 18.85,16.5 C19.25,16.5 19.6,16.3 19.8,16 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M9,8 C9,8.55 8.55,9 8,9 C7.45,9 7,8.55 7,8 C7,7.45 7.45,7 8,7 C8.55,7 9,7.45 9,8 Z M20.7,16.8 C20.9,17 21,17.25 21,17.5 L21,20 C21,20.55 20.55,21 20,21 L16.75,21 C16.5,21 16.25,20.9 16.05,20.7 L10.2,14.9 C9.8,14.95 9.4,15 9,15 C5.7,15 3,12.3 3,9 C3,5.7 5.7,3 9,3 C12.3,3 15,5.7 15,9 C15,9.6 14.95,10.15 14.7,10.8 L16.4,12.5 L18.5,12.5 C19.05,12.5 19.5,12.95 19.5,13.5 L19.5,15.6 L20.7,16.8 Z M19,17.9 L17.8,16.7 C17.6,16.5 17.5,16.25 17.5,16 L17.5,14.5 L16,14.5 C15.75,14.5 15.5,14.4 15.3,14.2 L12.8,11.7 C12.5,11.4 12.45,10.9 12.65,10.5 C13,9.9 13.05,9.55 13.05,8.95 C13.05,6.75 11.25,4.95 9.05,4.95 C6.85,4.95 5.05,6.75 5.05,8.95 C5.05,11.15 6.85,12.95 9.05,12.95 C9.45,12.95 9.85,12.9 10.25,12.75 C10.6,12.65 11,12.7 11.25,13 L17.15,19 L19,19 L19,17.9 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M4,17 L7,17 L7,20 C7,20.55 7.45,21 8,21 L20,21 C20.55,21 21,20.55 21,20 L21,8 C21,7.45 20.55,7 20,7 L17,7 L17,4 C17,3.45 16.55,3 16,3 L4,3 C3.45,3 3,3.45 3,4 L3,16 C3,16.55 3.45,17 4,17 Z M19,19 L9,19 L9,9 L19,9 L19,19 Z M5,5 L15,5 L15,7 L8,7 C7.45,7 7,7.45 7,8 L7,15 L5,15 L5,5 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M14,14 C14,14.75 13.6,15.4 13,15.7 L13,17 C13,17.55 12.55,18 12,18 C11.45,18 11,17.55 11,17 L11,15.7 C10.4,15.35 10,14.7 10,14 C10,12.9 10.9,12 12,12 C13.1,12 14,12.9 14,14 Z M17,7 L17,8 L19,8 C19.55,8 20,8.45 20,9 L20,21 C20,21.55 19.55,22 19,22 L5,22 C4.45,22 4,21.55 4,21 L4,9 C4,8.45 4.45,8 5,8 L15,8 L15,7 C15,5.35 13.65,4 12,4 C10.95,4 9.95,4.6 9.4,5.5 C9.1,6 8.5,6.15 8.05,5.85 C7.55,5.55 7.4,4.95 7.7,4.5 C8.6,2.95 10.25,2 12.05,2 C14.75,2 17,4.25 17,7 Z M18,10 L6,10 L6,20 L18,20 L18,10 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,4 C13.85,4 15.55,4.65 16.9,5.7 L5.7,16.9 C4.65,15.55 4,13.85 4,12 C4,7.6 7.6,4 12,4 Z M12,20 C10.15,20 8.45,19.35 7.1,18.3 L18.3,7.1 C19.35,8.45 20,10.15 20,12 C20,16.4 16.4,20 12,20 L12,20 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M5,6 L5,21 C5,21.55 5.45,22 6,22 L18,22 C18.55,22 19,21.55 19,21 L19,6 C19.55,6 20,5.55 20,5 C20,4.45 19.55,4 19,4 L15,4 L15,3 C15,2.45 14.55,2 14,2 L10,2 C9.45,2 9,2.45 9,3 L9,4 L5,4 C4.45,4 4,4.45 4,5 C4,5.55 4.45,6 5,6 Z M17,20 L7,20 L7,6 L17,6 L17,20 Z M11,9 L11,17 C11,17.55 10.55,18 10,18 C9.45,18 9,17.55 9,17 L9,9 C9,8.45 9.45,8 10,8 C10.55,8 11,8.45 11,9 Z M14,8 C14.55,8 15,8.45 15,9 L15,17 C15,17.55 14.55,18 14,18 C13.45,18 13,17.55 13,17 L13,9 C13,8.45 13.45,8 14,8 Z" id="path-1"></path>
                    </svg>

                    <div className="Spacer"></div>
                    <FilterBox></FilterBox>
                    <SearchBar></SearchBar>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,20 C7.6,20 4,16.4 4,12 C4,7.6 7.6,4 12,4 C16.4,4 20,7.6 20,12 C20,16.4 16.4,20 12,20 Z M13,17 C13,17.55 12.55,18 12,18 C11.45,18 11,17.55 11,17 C11,16.45 11.45,16 12,16 C12.55,16 13,16.45 13,17 Z M16,10 C16,12.2 13.65,12.65 13.1,14.3 C12.95,14.85 12.4,15.15 11.85,15 C11.3,14.85 11,14.3 11.15,13.75 C11.9,11.75 13.95,11.7 13.95,10 C13.95,8.9 13.05,8 11.95,8 C11.1,8 10.35,8.55 10.05,9.35 C9.9,9.85 9.35,10.1 8.85,10 C8.3,9.85 8,9.3 8.15,8.8 C8.8,7.05 10.25,6.05 11.95,6.05 C14.2,6 16,7.8 16,10 Z" id="path-1"></path>
                    </svg>

                  </section>
                  <ConnectWiseTable></ConnectWiseTable>
                </TabPanel>
                <TabPanel>

                  <section className='Toolbar'>
                    <button>Add Role</button>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M22,10 C22,10.55 21.55,11 21,11 L19,11 L19,13 C19,13.55 18.55,14 18,14 C17.45,14 17,13.55 17,13 L17,11 L15,11 C14.45,11 14,10.55 14,10 C14,9.45 14.45,9 15,9 L17,9 L17,7 C17,6.45 17.45,6 18,6 C18.55,6 19,6.45 19,7 L19,9 L21,9 C21.55,9 22,9.45 22,10 Z M8.5,11 C10.45,11 12,9.45 12,7.5 C12,5.55 10.45,4 8.5,4 C6.55,4 5,5.55 5,7.5 C5,9.45 6.55,11 8.5,11 Z M8.5,13.05 C6.2,13.05 4,14.1 2.25,16.05 C2.1,16.25 2,16.5 2,16.75 L2,19.05 C2,19.6 2.45,20.05 3,20.05 L14,20.05 C14.55,20.05 15,19.6 15,19.05 L15,16.75 C15,16.5 14.9,16.25 14.75,16.1 C13,14.15 10.8,13.05 8.5,13.05 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M20,9.8 C20,9.7 19.95,9.65 19.9,9.55 C19.9,9.55 19.9,9.5 19.85,9.5 C19.8,9.4 19.75,9.35 19.7,9.3 L12.7,2.3 C12.65,2.25 12.55,2.2 12.5,2.15 C12.5,2.15 12.45,2.15 12.45,2.1 C12.35,2.05 12.3,2.05 12.2,2 L12,2 L5,2 C4.45,2 4,2.45 4,3 L4,18 C4,18.55 4.45,19 5,19 L8,19 L8,21 C8,21.55 8.45,22 9,22 L19,22 C19.55,22 20,21.55 20,21 L20,10 L20,9.8 Z M6,17 L6,4 L11,4 L11,6 L9,6 C8.45,6 8,6.45 8,7 L8,17 L6,17 Z M10,20 L10,8 L15,8 L15,10 C15,10.55 15.45,11 16,11 L18,11 L18,20 L10,20 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,4 C13.85,4 15.55,4.65 16.9,5.7 L5.7,16.9 C4.65,15.55 4,13.85 4,12 C4,7.6 7.6,4 12,4 Z M12,20 C10.15,20 8.45,19.35 7.1,18.3 L18.3,7.1 C19.35,8.45 20,10.15 20,12 C20,16.4 16.4,20 12,20 L12,20 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M5,6 L5,21 C5,21.55 5.45,22 6,22 L18,22 C18.55,22 19,21.55 19,21 L19,6 C19.55,6 20,5.55 20,5 C20,4.45 19.55,4 19,4 L15,4 L15,3 C15,2.45 14.55,2 14,2 L10,2 C9.45,2 9,2.45 9,3 L9,4 L5,4 C4.45,4 4,4.45 4,5 C4,5.55 4.45,6 5,6 Z M17,20 L7,20 L7,6 L17,6 L17,20 Z M11,9 L11,17 C11,17.55 10.55,18 10,18 C9.45,18 9,17.55 9,17 L9,9 C9,8.45 9.45,8 10,8 C10.55,8 11,8.45 11,9 Z M14,8 C14.55,8 15,8.45 15,9 L15,17 C15,17.55 14.55,18 14,18 C13.45,18 13,17.55 13,17 L13,9 C13,8.45 13.45,8 14,8 Z" id="path-1"></path>
                    </svg>
                    <div className="Spacer"></div>
                    <SearchBar></SearchBar>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,20 C7.6,20 4,16.4 4,12 C4,7.6 7.6,4 12,4 C16.4,4 20,7.6 20,12 C20,16.4 16.4,20 12,20 Z M13,17 C13,17.55 12.55,18 12,18 C11.45,18 11,17.55 11,17 C11,16.45 11.45,16 12,16 C12.55,16 13,16.45 13,17 Z M16,10 C16,12.2 13.65,12.65 13.1,14.3 C12.95,14.85 12.4,15.15 11.85,15 C11.3,14.85 11,14.3 11.15,13.75 C11.9,11.75 13.95,11.7 13.95,10 C13.95,8.9 13.05,8 11.95,8 C11.1,8 10.35,8.55 10.05,9.35 C9.9,9.85 9.35,10.1 8.85,10 C8.3,9.85 8,9.3 8.15,8.8 C8.8,7.05 10.25,6.05 11.95,6.05 C14.2,6 16,7.8 16,10 Z" id="path-1"></path>
                    </svg>

                  </section>
                  <ConnectWiseTable isUserOrRoleTable='true'></ConnectWiseTable>
                </TabPanel>
                <TabPanel>
                  
                <section className='Toolbar'>
                    <button>Add Connected App</button>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M22,10 C22,10.55 21.55,11 21,11 L19,11 L19,13 C19,13.55 18.55,14 18,14 C17.45,14 17,13.55 17,13 L17,11 L15,11 C14.45,11 14,10.55 14,10 C14,9.45 14.45,9 15,9 L17,9 L17,7 C17,6.45 17.45,6 18,6 C18.55,6 19,6.45 19,7 L19,9 L21,9 C21.55,9 22,9.45 22,10 Z M8.5,11 C10.45,11 12,9.45 12,7.5 C12,5.55 10.45,4 8.5,4 C6.55,4 5,5.55 5,7.5 C5,9.45 6.55,11 8.5,11 Z M8.5,13.05 C6.2,13.05 4,14.1 2.25,16.05 C2.1,16.25 2,16.5 2,16.75 L2,19.05 C2,19.6 2.45,20.05 3,20.05 L14,20.05 C14.55,20.05 15,19.6 15,19.05 L15,16.75 C15,16.5 14.9,16.25 14.75,16.1 C13,14.15 10.8,13.05 8.5,13.05 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M20,9.8 C20,9.7 19.95,9.65 19.9,9.55 C19.9,9.55 19.9,9.5 19.85,9.5 C19.8,9.4 19.75,9.35 19.7,9.3 L12.7,2.3 C12.65,2.25 12.55,2.2 12.5,2.15 C12.5,2.15 12.45,2.15 12.45,2.1 C12.35,2.05 12.3,2.05 12.2,2 L12,2 L5,2 C4.45,2 4,2.45 4,3 L4,18 C4,18.55 4.45,19 5,19 L8,19 L8,21 C8,21.55 8.45,22 9,22 L19,22 C19.55,22 20,21.55 20,21 L20,10 L20,9.8 Z M6,17 L6,4 L11,4 L11,6 L9,6 C8.45,6 8,6.45 8,7 L8,17 L6,17 Z M10,20 L10,8 L15,8 L15,10 C15,10.55 15.45,11 16,11 L18,11 L18,20 L10,20 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,4 C13.85,4 15.55,4.65 16.9,5.7 L5.7,16.9 C4.65,15.55 4,13.85 4,12 C4,7.6 7.6,4 12,4 Z M12,20 C10.15,20 8.45,19.35 7.1,18.3 L18.3,7.1 C19.35,8.45 20,10.15 20,12 C20,16.4 16.4,20 12,20 L12,20 Z" id="path-1"></path>
                    </svg>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M5,6 L5,21 C5,21.55 5.45,22 6,22 L18,22 C18.55,22 19,21.55 19,21 L19,6 C19.55,6 20,5.55 20,5 C20,4.45 19.55,4 19,4 L15,4 L15,3 C15,2.45 14.55,2 14,2 L10,2 C9.45,2 9,2.45 9,3 L9,4 L5,4 C4.45,4 4,4.45 4,5 C4,5.55 4.45,6 5,6 Z M17,20 L7,20 L7,6 L17,6 L17,20 Z M11,9 L11,17 C11,17.55 10.55,18 10,18 C9.45,18 9,17.55 9,17 L9,9 C9,8.45 9.45,8 10,8 C10.55,8 11,8.45 11,9 Z M14,8 C14.55,8 15,8.45 15,9 L15,17 C15,17.55 14.55,18 14,18 C13.45,18 13,17.55 13,17 L13,9 C13,8.45 13.45,8 14,8 Z" id="path-1"></path>
                    </svg>
                    <div className="Spacer"></div>
                    <SearchBar></SearchBar>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,20 C7.6,20 4,16.4 4,12 C4,7.6 7.6,4 12,4 C16.4,4 20,7.6 20,12 C20,16.4 16.4,20 12,20 Z M13,17 C13,17.55 12.55,18 12,18 C11.45,18 11,17.55 11,17 C11,16.45 11.45,16 12,16 C12.55,16 13,16.45 13,17 Z M16,10 C16,12.2 13.65,12.65 13.1,14.3 C12.95,14.85 12.4,15.15 11.85,15 C11.3,14.85 11,14.3 11.15,13.75 C11.9,11.75 13.95,11.7 13.95,10 C13.95,8.9 13.05,8 11.95,8 C11.1,8 10.35,8.55 10.05,9.35 C9.9,9.85 9.35,10.1 8.85,10 C8.3,9.85 8,9.3 8.15,8.8 C8.8,7.05 10.25,6.05 11.95,6.05 C14.2,6 16,7.8 16,10 Z" id="path-1"></path>
                    </svg>
                  </section>
                  <ConnectWiseTable isUserOrRoleTable='true'></ConnectWiseTable>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NavigationAppContent.propTypes = {
  // bla: PropTypes.string,
};

NavigationAppContent.defaultProps = {
  // bla: 'test',
};

export default NavigationAppContent;
