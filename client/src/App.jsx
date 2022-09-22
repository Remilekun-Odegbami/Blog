import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Topbar from './components/topbar/Topbar';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/contact/Contact';
import Posts from "./components/posts/Posts";
import { Context } from "./context/Context";
import { useContext } from "react";


function App() {
  const { user } = useContext(Context);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route exact path="/" element={user ? <Home /> : <Register />} />
            <Route path="/write" element={user ? <Write /> : <Register />} />
            <Route path="/settings" element={user ? <Settings /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/post/:postId" element={<Single />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );

}

export default App;


//59:00