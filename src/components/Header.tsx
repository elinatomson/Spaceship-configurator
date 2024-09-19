import logo from '../assets/enefit-logo-full.svg'; 

function Header() {
  return (
    <header className="header">
      <div className="h2">🚀 Spaceship configurator</div>
      <img src={logo} alt="Logo" className="logo"/>
    </header>
  );
};

export default Header;
