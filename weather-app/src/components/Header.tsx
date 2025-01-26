import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Weather Forecast</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/forecast">Forecast</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;