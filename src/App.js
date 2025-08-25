import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Sponsors from "./components/sponsors/Sponsors";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Sponsors />
        </section>
        <section>
          <Service />
        </section>
        <section>
          <Testimonial />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
