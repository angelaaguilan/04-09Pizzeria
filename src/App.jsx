import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavBar.jsx";
import Header from './component/Header.jsx';
import Footer from "./component/Footer.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Register from "./views/Register.jsx";
import Login from "./views/Login.jsx";
import Cart from "./views/Cart.jsx";
import Pizza from "./views/Pizza.jsx";
import NotFound from "./views/NotFound.jsx";
import Profile from "./views/Profile.jsx";
import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";


const App = () => {
  const { token } = useContext(UserContext);
  
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/register" />}
        />

        <Route path="/register" element={<Register></Register>} />

        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />

        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/pizza/:id" element={<Pizza></Pizza>} />

        <Route path="/404" element={<NotFound></NotFound>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;