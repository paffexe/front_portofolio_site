import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Sponsors from "./components/sponsors/Sponsors";
import logo from "./logo.svg";

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
      </main>
    </div>
  );
}

export default App;
