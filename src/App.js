import logo from './logo.svg';
import './App.scss';
import LeftNavigationBar from './LeftNavigationBar/LeftNavigationBar';
import NavigationAppContent from './NavigationAppContent/NavigationAppContent';
import FlyoutDrawer from './FlyoutDrawer/FlyoutDrawer';


function App() {
  return (
    <div className="App">
     <LeftNavigationBar></LeftNavigationBar>
     <NavigationAppContent></NavigationAppContent>
     <FlyoutDrawer></FlyoutDrawer>
    </div>
  );
}

export default App;
