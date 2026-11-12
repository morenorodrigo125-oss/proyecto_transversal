interface IncidenciaCardProps {
  id: number;
  titulo: string;
  completada: boolean;
}

function IncidenciaCard({ id, titulo, completada }: IncidenciaCardProps) {
  return (
    <div className={completada ? 'tarjeta incidencia-resuelta' : 'tarjeta incidencia-pendiente'}>
      <h4>Incidencia #{id}</h4>
      <p>{titulo}</p>
      <p>
        <strong>Estado: </strong>
        {completada ? '✅ Resuelta' : '⚠️ Pendiente'}
      </p>
    </div>
  );
}

export default IncidenciaCard;