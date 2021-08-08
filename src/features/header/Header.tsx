import './header.css';
import {
  NavLink
} from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <nav className="header_links">
      <div className="head_links">
      
      
      <NavLink to='/'><img src="/logo.png" alt="logo" width='110px'/></NavLink>
      <NavLink to='/about-sun-panels'>Сонячні панелі</NavLink>
      <NavLink to='/green-tarif'>Зелений тариф</NavLink>
      <NavLink to='/calculation'>Калькулятор</NavLink>
      <NavLink to='/catalog'>Каталог</NavLink>
      <NavLink to='/'>UK/EN</NavLink> 
     
      </div >
      <div className="shop-login">
        <NavLink to='/'><img src="/img/shopping-basket.png" alt="logo" width='65px'/></NavLink>
        <NavLink to='/'><img src="/img/manager.png" alt="logo" width='65px'/></NavLink>
      </div>
      </nav>
    </div>
  );
}

export default Header;