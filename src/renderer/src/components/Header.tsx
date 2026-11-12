import { useState } from 'react';
import logo from '../assets/logo.svg';

function Header() {
  const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

  const intervalo = setInterval(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <header className="header">
      <div className="header-izquierda">
        <img src={logo} alt="Logo ElectroHogar" />
        <div>
          <h2>ElectroHogar S.L.</h2>
          <small>Panel de Gestión - Tienda de Electrodomésticos</small>
        </div>
      </div>

      <div className="header-reloj">
        Hora del sistema: {hora}
      </div>
    </header>
  );
}

export default Header;