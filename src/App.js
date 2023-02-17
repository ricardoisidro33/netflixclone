import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Helmet} from "react-helmet";


function App() {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix Clone</title>
                <link rel="canonical" href="" />
                <meta name="Netflix Clone" content="Nested component" />
            </Helmet>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
