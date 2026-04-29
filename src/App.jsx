import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
