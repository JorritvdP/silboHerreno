import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Banner from "./components/Banner";
import Navigationbar from "./components/NavigationBar";
import Silbadores from "./components/Silbadores";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Banner />
      <Silbadores />
    </div>
  );
}

export default App;
