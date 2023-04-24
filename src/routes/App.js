import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Banner from "../components/Banner";
import Navigationbar from "../components/NavigationBar";
import Silbadores from "../components/Silbadores";
import Imagenes from "../components/Imagenes";
// import Testimonios from "./components/Testimonios";
import Colaboracion from "../components/Colaboracion";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Banner />
      <Silbadores />
      <Imagenes />
      {/* <Testimonios /> */}
      <Colaboracion />
      <Footer />
    </div>
  );
}

export default App;
