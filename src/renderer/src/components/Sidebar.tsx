interface SidebarProps {
  seccionActual: string;
  cambiarSeccion: (nuevaSeccion: string) => void;
}

function Sidebar({ seccionActual, cambiarSeccion }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h3>MENÚ TIENDA</h3>

      <button
        className={seccionActual === 'Personal' ? 'btn-menu btn-activo' : 'btn-menu'}
        onClick={() => cambiarSeccion('Personal')}
      >
        Personal
      </button>

      <button
        className={seccionActual === 'Inventario' ? 'btn-menu btn-activo' : 'btn-menu'}
        onClick={() => cambiarSeccion('Inventario')}
      >
        Inventario
      </button>

      <button
        className={seccionActual === 'Incidencias' ? 'btn-menu btn-activo' : 'btn-menu'}
        onClick={() => cambiarSeccion('Incidencias')}
      >
        Incidencias
      </button>
    </aside>
  );
}

export default Sidebar;