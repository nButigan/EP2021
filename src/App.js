import AdSellerApp from './containers/AdSellerApp/AdSellerApp';
import Registration from './containers/Registration/Registration';
import UserPanel from './containers/UserPanel/UserPanel';
import AdminPanel from './containers/AdminPanel/AdminPanel';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';

import './App.css';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={AdSellerApp}/>
        <Route path="/registration" exact component={Registration}/>
        <Route path="/userPanel" exact component={UserPanel}/>
        <Route path="/adminPanel" exact component={AdminPanel}/>


    </BrowserRouter>
  );
};

export default App;
