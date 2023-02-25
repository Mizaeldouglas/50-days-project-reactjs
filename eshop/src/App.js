import "./App.css";
import { Checkout } from "./pages/Checkout";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={<Checkout />}
          ></Route>
          <Route
            path="/"
            element={<Home />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
