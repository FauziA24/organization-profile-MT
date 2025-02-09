export default function Events() {
  const events = [
    {
      name: "Annual Tech Conference",
      date: "2025-06-15",
      location: "New York, NY",
    },
    {
      name: "Innovation Workshop",
      date: "2025-07-10",
      location: "San Francisco, CA",
    },
    {
      name: "Industry Networking Event",
      date: "2025-08-05",
      location: "London, UK",
    },
  ];

  return (
    <div className="space-y-12 px-6 md:px-12 lg:px-24 py-16">
      <h1 className="text-4xl font-bold">Events</h1>
      <p className="text-xl">Join us at our upcoming events and conferences.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{event.date}</p>
            <p>{event.location}</p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
