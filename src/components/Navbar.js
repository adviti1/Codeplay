import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
    <h1>Rescue Mission Hub</h1>
    <ul>
    <li><img className="icon" src="/home.jpg"/>HOME</li>
    <li><img className="icon" src="window.png"/>DASHBOARD</li>
    <li><img className="icon" src="warning.png"/>DO'S&DON'T</li>
    <li><img className="icon" src="phone.png"/>CONTACT</li>
    </ul>
    </div>
  );
}

export default Navbar;
