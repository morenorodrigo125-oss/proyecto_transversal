interface ActivoCardProps {
  titulo: string;
  precio: number;
  categoria: string;
  imagen: string;
}

function ActivoCard({ titulo, precio, categoria, imagen }: ActivoCardProps) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="img-producto" />
      <h4>{titulo}</h4>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p className="precio">{precio} $</p>

      {/* Renderizado condicional si supera los 50$ */}
      {precio > 50 && (
        <span className="etiqueta-alto-valor">Activo de Alto Valor</span>
      )}
    </div>
  );
}

export default ActivoCard;