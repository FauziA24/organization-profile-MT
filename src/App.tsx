import Layout from "./layout/layout";
import Home from "./routes/home";
import About from "./routes/about";
import Division from "./routes/division";
import Articles from "./routes/articles";
import Events from "./routes/events";
import Contact from "./routes/contact";

export default function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Division />
      <Articles />
      <Events />
      <Contact />
    </Layout>
  );
}
