import { Route, Routes } from "react-router-dom";
import UserLayout from "./pages/UserLayout";
import Home from "./pages/Home";
import "./style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import About from "./pages/About";
import Universities from "./pages/Universities";
import Contact from "./pages/Contact";
import News from "./pages/News";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
