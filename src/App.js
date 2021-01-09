import logo from './logo.svg';
import './App.scss';
import LeftNavigationBar from './LeftNavigationBar/LeftNavigationBar';
import NavigationAppContent from './NavigationAppContent/NavigationAppContent';


function App() {
  return (
    <div className="App">
     <LeftNavigationBar></LeftNavigationBar>
     <NavigationAppContent></NavigationAppContent>
    </div>
  );
}

export default App;
