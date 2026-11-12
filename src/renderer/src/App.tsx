import { useState } from 'react';
import './styles/estilos.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Personal from './views/Personal';
import Inventario from './views/Inventario';
import Incidencias from './views/Incidencias';

function App() {

  const [seccion, setSeccion] = useState<string>('Personal');

  return (
    <div id="app-container">
      <Header />

      <div className="contenedor-principal">
        <Sidebar seccionActual={seccion} cambiarSeccion={setSeccion} />

        <main id="panel_central">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>
      </div>
    </div>
  );
}

export default App;