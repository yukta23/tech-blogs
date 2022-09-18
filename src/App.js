import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/404" element={<NotFound />} />
          <Route exact path="/post/:id" element = {<Post />} />
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
