import { useState, useEffect } from 'react';
import IncidenciaCard from '../components/IncidenciaCard';

interface Incidencia {
  id: number;
  title: string;
  completed: boolean;
}

function Incidencias() {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);

  const cargarIncidencias = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos?limit=8');
      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`);
      }
      const datos = await respuesta.json();
      // Filtramos para quedarnos solo con las 8 primeras incidencias
      setIncidencias(datos.filter((inc: Incidencia) => inc.id <= 8));
    } catch (error) {
      console.error('Error al cargar las incidencias:', error);
    }
    setCargando(false);
  };

  useEffect(() => {
    cargarIncidencias();
  }, []);

  return (
    <div>
      <h2 className="titulo-seccion">Registro de Incidencias de Almacén y Tienda</h2>

      {cargando ? (
        <p className="mensaje-carga">Cargando datos del servidor...</p>
      ) : (
        <div className="grid-tarjetas">
          {incidencias.map((inc) => (
            <IncidenciaCard
              key={inc.id}
              id={inc.id}
              titulo={inc.title}
              completada={inc.completed}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Incidencias;