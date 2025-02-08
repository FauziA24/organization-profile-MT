export default function Articles() {
  const articles = [
    {
      title: "The Future of AI in Business",
      date: "2025-01-15",
      excerpt:
        "Exploring the potential impact of artificial intelligence on various industries.",
    },
    {
      title: "Sustainable Tech: A Green Revolution",
      date: "2025-02-01",
      excerpt:
        "How technology is driving sustainability efforts across the globe.",
    },
    {
      title: "Cybersecurity in the Digital Age",
      date: "2025-02-15",
      excerpt:
        "Understanding the importance of robust cybersecurity measures in modern business.",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Articles</h1>
      <p className="text-xl">
        Stay updated with our latest insights and industry news.
      </p>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{article.date}</p>
            <p>{article.excerpt}</p>
            <a
              href="#"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
