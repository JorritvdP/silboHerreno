import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Banner from "../components/Banner";
import Navigationbar from "../components/NavigationBar";
import Footer from "../components/Footer";

function QuienesSomos() {
  return (
    <div className="App">
      <Navigationbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default QuienesSomos;
