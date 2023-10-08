import { Route, Routes } from "react-router-dom";
import UserLayout from "./pages/UserLayout";
import Home from "./pages/Home";
import "./style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
