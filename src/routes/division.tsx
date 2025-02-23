import { motion } from "framer-motion";

const divisions = [
  {
    name: "Technology Solutions",
    description:
      "Cutting-edge software and hardware solutions for businesses.",
    image: "./images/technology.jpg",
    bgColor: "bg-blue-500",
  },
  {
    name: "Consulting Services",
    description:
      "Expert advice and strategy consulting for digital transformation.",
    image: "./images/consulting.jpg",
    bgColor: "bg-green-500",
  },
  {
    name: "Research & Development",
    description:
      "Pioneering new technologies and methodologies for the future.",
    image: "./images/research.jpg",
    bgColor: "bg-purple-500",
  },
  {
    name: "Customer Support",
    description:
      "Providing 24/7 assistance and technical support for clients.",
    image: "./images/support.jpg",
    bgColor: "bg-red-500",
  },
];

export default function Division() {
  return (
    <div className="space-y-6 p-8">
      <h1 className="text-4xl font-bold text-center">Our Divisions</h1>
      <p className="text-xl text-center">Explore the different areas of our business.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {divisions.map((division, index) => (
          <motion.div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ${division.bgColor}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={division.image}
              alt={division.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-white">
              <h2 className="text-2xl font-semibold mb-2">{division.name}</h2>
              <p>{division.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}