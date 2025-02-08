export default function Division() {
  const divisions = [
    {
      name: "Technology Solutions",
      description:
        "Cutting-edge software and hardware solutions for businesses.",
    },
    {
      name: "Consulting Services",
      description:
        "Expert advice and strategy consulting for digital transformation.",
    },
    {
      name: "Research & Development",
      description:
        "Pioneering new technologies and methodologies for the future.",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Our Divisions</h1>
      <p className="text-xl">Explore the different areas of our business.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisions.map((division, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{division.name}</h2>
            <p>{division.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
