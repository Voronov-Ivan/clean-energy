import { Route,Switch } from 'react-router-dom';
import Calculator from '../Calculator/Calculator';
import Catalog from './Catalog/Catalog';
import GreenTarif from './Home/GreenTarif';
import Home from './Home/Home';
import SunPanels from './Home/SunPanels';
import './main.css';

function Main() {
  return (
    <main className='main'>
        <Switch>
          <Route path='/about-sun-panels'><SunPanels/></Route>
          <Route path='/calculation'><Calculator/></Route>
          <Route path='/green-tarif'><GreenTarif/></Route>
          <Route path='/catalog'><Catalog/></Route>
          <Route path='/'><Home/></Route>
        </Switch>
              
    </main>
  );
}

export default Main;