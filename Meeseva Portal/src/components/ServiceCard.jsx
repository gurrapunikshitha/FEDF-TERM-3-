function ServiceCard({ title, click }) {
  return (
    <div className="card" onClick={click}>
      <h2>{title}</h2>
    </div>
  );
}

export default ServiceCard;