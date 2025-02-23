import { motion } from "framer-motion";

export default function Articles() {
  const articles = [
    {
      title: "The Future of AI in Business",
      date: "2025-01-15",
      excerpt:
        "Exploring the potential impact of artificial intelligence on various industries.",
      image: "/images/ai-business.jpg",
    },
    {
      title: "Sustainable Tech: A Green Revolution",
      date: "2025-02-01",
      excerpt:
        "How technology is driving sustainability efforts across the globe.",
      image: "/images/green-tech.jpg",
    },
    {
      title: "Cybersecurity in the Digital Age",
      date: "2025-02-15",
      excerpt:
        "Understanding the importance of robust cybersecurity measures in modern business.",
      image: "/images/cybersecurity.jpg",
    },
  ];

  const news = [
    {
      title: "Tech Giants Announce New AI Initiative",
      date: "2025-02-20",
    },
    {
      title: "Renewable Energy Adoption Reaches New Heights",
      date: "2025-02-18",
    },
    {
      title: "Latest Trends in Cybersecurity",
      date: "2025-02-16",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-12 lg:px-24 py-16">
      <div className="w-full md:w-2/3 space-y-12">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Articles
        </motion.h1>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our latest insights and industry news.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg cursor-pointer shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{article.date}</p>
              <p>{article.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Read more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/3 overflow-y-auto max-h-[500px] bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
        <div className="space-y-4">
          {news.map((item, index) => (
            <motion.div 
              key={index} 
              className="p-4 bg-white rounded-lg cursor-pointer shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
