import Filters from './Filters.jsx';
import './Header.css';

const Header = () =>  {
  return (
    <header className="header">
      <h1>Our Pricing</h1>
      <Filters />
    </header>
  )
}

export default Header;