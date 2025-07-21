function ServiceCard({ title, icons, className = "" }) {
  return (
    <div className={`rounded-xl px-6 py-2 shadow-md min-w-[200px] inline-block ${className}`}>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="w-8 h-8"
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
