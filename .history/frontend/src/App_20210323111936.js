import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
const [] = useState

  return (
    <Router>
      <Navbar />
      <SideDrawer />
      <Backdrop />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
