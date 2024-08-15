
import HomePage from "./sections/HomePage";
import Nav from "./sections/Nav";

function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="min-h-screen overflow-hidden">
        <HomePage />
      </section>
    </main>
  );
}

export default App;
