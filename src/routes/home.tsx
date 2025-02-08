export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Our Company</h1>
      <p className="text-xl">
        We are a leading provider of innovative solutions in our industry.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To deliver exceptional value to our clients through cutting-edge
            technology and unparalleled service.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            To be the global leader in our field, driving innovation and setting
            industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}
