import './header.css';
import {
  NavLink
} from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <nav className="header_links">
      <NavLink to='/'>Сонячні панелі</NavLink>
      <NavLink to='/'>Зелений тариф</NavLink>
      <NavLink to='/'>Калькулятор</NavLink>
      <NavLink to='/'>Каталог</NavLink>
      </nav>
    </div>
  );
}

export default Header;