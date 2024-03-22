import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header";
import Home from "./pages/Home/Home";
import RomeItem from "./pages/romes/RomeItem";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RomeItem />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
