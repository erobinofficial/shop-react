import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;