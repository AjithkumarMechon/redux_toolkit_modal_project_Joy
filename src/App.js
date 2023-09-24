import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import TotalProductsFetch from "./Component/Container/Product/TotalProductsFetch";
import Footer from "./Component/Container/Footer/Footer";
import Navbar from "./Component/Container/Nav_Content/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TotalProductsFetch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
