import { useState, useEffect } from 'react';
import ActivoCard from '../components/ActivoCard';

interface Producto {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

function Inventario() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);

  const cargarInventario = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch('https://fakestoreapi.com/products?limit=6');
      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`);
      }
      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      console.error('Error al cargar el inventario:', error);
    }
    setCargando(false);
  };

  useEffect(() => {
    cargarInventario();
  }, []);

  return (
    <div>
      <h2 className="titulo-seccion">Inventario de Activos y Material de Tienda</h2>

      {cargando ? (
        <p className="mensaje-carga">Cargando datos del servidor...</p>
      ) : (
        <div className="grid-tarjetas">
          {productos.map((prod) => (
            <ActivoCard
              key={prod.id}
              titulo={prod.title}
              precio={prod.price}
              categoria={prod.category}
              imagen={prod.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Inventario;