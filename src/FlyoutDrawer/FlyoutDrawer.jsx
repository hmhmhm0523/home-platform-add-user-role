import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './FlyoutDrawer.styles.scss';
import CheckBoxList from '../CheckBoxList/CheckBoxList';
//import { Test } from './FlyoutDrawer.styles';

class FlyoutDrawer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('FlyoutDrawer will mount');
  }

  componentDidMount = () => {
    console.log('FlyoutDrawer mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('FlyoutDrawer will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('FlyoutDrawer will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('FlyoutDrawer did update');
  }

  componentWillUnmount = () => {
    console.log('FlyoutDrawer will unmount');
  }

  handleCloseButtonClicked() {
    document.querySelector('.FlyoutDrawer-container').classList.remove('animation-fadeInRight');
    document.querySelector('.FlyoutDrawer-container').classList.add('animation-fadeOutRight');
    document.querySelector('.FlyoutDrawerWrapper').classList.add('HiddeBackground');
  }

  handleToggleExpand(event) {
    let container = event.target.parentNode.parentNode;
    container.classList.toggle("Collapsed");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="FlyoutDrawerWrapper">
        <article class="FlyoutDrawer-container animation-animated animation-fadeInRight">
          <div class="FlyoutDrawer-header">
            <div data-cwid="img_closeFlyoutDrawer" class="CwImage-wrap" title="Close" onClick={this.handleCloseButtonClicked}>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" focusable="false" viewBox="0 0 48 48" class="CwImage-cursor"><g>
                <path d="M0 0h48v48H0z" fill="none"></path><path d="M8.6 37.1L21.2 24 8.6 10.9c-.8-.8-.7-2.1 0-2.8.8-.8 2.1-.7 2.8 0l12.6 13 12.6-13c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L26.8 24l12.7 13.1c.8.8.7 2.1 0 2.8-.4.4-.9.6-1.4.6-.5 0-1-.2-1.4-.6L24 26.9l-12.6 13c-.4.4-.9.6-1.4.6-.5 0-1-.2-1.4-.6-.8-.7-.8-2 0-2.8z"></path></g>
              </svg>
            </div>
            <label class="FlyoutDrawer-mainTitle">Add Role</label>
          </div>
          <div class="FlyoutDrawer-content">
            <section>
              <h4>Role Information</h4>
              <dl>
                <dt>Role Name</dt>
                <dd><input placeholder="Enter role name"></input></dd>
                <dt>Description</dt>
                <dd> <textarea placeholder='Enter role description'></textarea>              </dd>
              </dl>
            </section>
            <section>
              <h4>Assigned Users</h4>
              <p className='HalfTransparent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.</p>
              <dl>
                <dd>
                  <input placeholder="Enter Assigned User"></input>
                </dd>
              </dl>
            </section>

            <section>
              <h4>Connected App Access</h4>
              <p className='HalfTransparent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.</p>

              <div className="CollapsePanelContainer">
                <div className="CollapsePanel">
                  <div className="CollapsePanelHeader">
                    <div className="AppLogo University"></div>
                    <h4>University</h4>
                    <div className="Spacer"></div>
                    <a className="CollapseButton" onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className="CollapsePanelContent">
                    <CheckBoxList></CheckBoxList>
                    <ul>
                      <li>asfdasdf</li>
                      <li>MP Sales Management</li>
                    </ul>
                  </div>
                </div>

                <div className="CollapsePanel">
                  <div className="CollapsePanelHeader">
                    <div className="AppLogo Automate"></div>
                    <h4>Automate</h4>
                    <div className="Spacer"></div>
                    <a className="CollapseButton" onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className="CollapsePanelContent">
                    <ul>
                      <li>Super Admin</li>
                      <li>MP Sales Management</li>
                    </ul>
                  </div>
                </div>


                <div className="CollapsePanel">
                  <div className="CollapsePanelHeader">
                    <div className="AppLogo Command"></div>
                    <h4>Command</h4>
                    <div className="Spacer"></div>
                    <a className="CollapseButton" onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className="CollapsePanelContent">
                    <ul>
                      <li>Super Admin</li>
                      <li>MP Sales Management</li>
                    </ul>
                  </div>
                </div>


                <div className="CollapsePanel">
                  <div className="CollapsePanelHeader">
                    <div className="AppLogo Control"></div>
                    <h4>Control</h4>
                    <div className="Spacer"></div>
                    <a className="CollapseButton" onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className="CollapsePanelContent">
                    <ul>
                      <li>Super Admin</li>
                      <li>MP Sales Management</li>
                    </ul>
                  </div>
                </div>


                <div className="CollapsePanel">
                  <div className="CollapsePanelHeader">
                    <div className="AppLogo Manage"></div>
                    <h4>Manage</h4>
                    <div className="Spacer"></div>
                    <a className="CollapseButton" onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className="CollapsePanelContent">
                    <ul>
                      <li>Super Admin</li>
                      <li>MP Sales Management</li>
                    </ul>
                  </div>
                </div>



                <div className="CollapsePanel">
                  <div className="CollapsePanelHeader">
                    <div className="AppLogo Sell"></div>
                    <h4>Sell</h4>
                    <div className="Spacer"></div>
                    <a className="CollapseButton" onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className="CollapsePanelContent">
                    <ul>
                      <li>Super Admin</li>
                      <li>MP Sales Management</li>
                    </ul>
                  </div>
                </div>



                <div className="CollapsePanel">
                  <div className="CollapsePanelHeader">
                    <div className="AppLogo Marketplace"></div>
                    <h4>Marketplace</h4>
                    <div className="Spacer"></div>
                    <a className="CollapseButton" onClick={this.handleToggleExpand}></a>
                  </div>
                  <div className="CollapsePanelContent">
                    <ul>
                      <li>Super Admin</li>
                      <li>MP Sales Management</li>
                    </ul>
                  </div>
                </div>




              </div>
            </section>
          </div>
          <div className="FlyoutDrawer-footer">
            <button onClick={this.handleCloseButtonClicked} className="SecondaryButton">Cancel</button>
            <button className="PrimaryButton">Save</button>
          </div>
        </article>
      </div>
    );
  }
}

FlyoutDrawer.propTypes = {
  // bla: PropTypes.string,
};

FlyoutDrawer.defaultProps = {
  // bla: 'test',
};

export default FlyoutDrawer;
