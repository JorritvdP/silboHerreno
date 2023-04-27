import "bootstrap/dist/css/bootstrap.min.css";
import "./Quienes.scss";
import Top from "../components/Top";
import Navigationbar from "../components/NavigationBar";
import About from "../components/About";
import Footer from "../components/Footer";

function QuienesSomos() {
  return (
    <div className="Quienes">
      <Navigationbar page="quienes" />
      <Top />
      <About />
      <Footer />
    </div>
  );
}

export default QuienesSomos;
