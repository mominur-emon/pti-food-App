import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Header from "./components/Header";
import Category from "./components/Category";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
