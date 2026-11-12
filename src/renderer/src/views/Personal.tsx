import { useState, useEffect } from 'react';
import EmployeeCard from '../components/EmployeeCard';

interface Empleado {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

function Personal() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [busqueda, setBusqueda] = useState<string>('');
  const [cargando, setCargando] = useState<boolean>(false);

  const cargarEmpleados = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`);
      }
      const datos = await respuesta.json();
      datos.pop(); // Elimina el último trabajador de la lista
      setEmpleados(datos);
    } catch (error) {
      console.error('Error al cargar el personal:', error);
    }
    setCargando(false);
  };

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const empleadosFiltrados = empleados.filter((emp) =>
    emp.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2 className="titulo-seccion">Directorio de Personal - ElectroHogar</h2>

      <input
        type="text"
        className="buscador"
        placeholder="Buscar empleado por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {cargando ? (
        <p className="mensaje-carga">Cargando datos del servidor...</p>
      ) : (
        <div className="grid-tarjetas">
          {empleadosFiltrados.map((emp) => (
            <EmployeeCard
              key={emp.id}
              nombre={emp.name}
              correo={emp.email}
              ciudad={emp.address.city}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Personal;