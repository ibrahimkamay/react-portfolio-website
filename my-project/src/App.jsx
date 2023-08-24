import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Profile />} />
          <Route index path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
