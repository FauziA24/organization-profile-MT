export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-xl">
        Learn more about our company's history, values, and achievements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            Founded in 2010, our company has grown from a small startup to a
            global leader in our industry. We've consistently pushed the
            boundaries of innovation and customer service.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Customer Focus</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
