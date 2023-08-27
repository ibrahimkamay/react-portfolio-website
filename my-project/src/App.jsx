import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Profile />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/experience" element={<Experience />} />
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
