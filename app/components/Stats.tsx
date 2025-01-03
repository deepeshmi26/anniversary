const Stats = () => {
  const stats = [
    { label: "Days", value: "365" },
    { label: "Smiles", value: "∞" },
    { label: "Love", value: "∞" },
    { label: "Friendship", value: "∞" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/20 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-transform"
        >
          <div className="text-4xl font-bold text-primary-dark">
            {item.value}
          </div>
          <div className="text-lg text-text-primary">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
