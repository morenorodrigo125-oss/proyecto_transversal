interface EmployeeCardProps {
  nombre: string;
  correo: string;
  ciudad: string;
}

function EmployeeCard({ nombre, correo, ciudad }: EmployeeCardProps) {
  return (
    <div className="tarjeta">
      <h4>{nombre}</h4>
      <p><strong>Correo:</strong> {correo}</p>
      <p><strong>Tienda / Ciudad:</strong> {ciudad}</p>
    </div>
  );
}

export default EmployeeCard;