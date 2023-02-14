import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Banner from "./components/Banner";
import Navigationbar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Banner />
    </div>
  );
}

export default App;
