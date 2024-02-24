/*import {Routes,Route,Navigate} from "react-router-dom";
import { lazy } from "react";
import LazyLayout from "./components/LazyLayout";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import './App.css';
const LazyLogin = lazy(() => import ("./pages/auth/login"))
const LazySignup = lazy(() => import ("./pages/auth/signup"))
const LazyHome = lazy(() => import ("./pages/user/Home"))
const LazyAbout = lazy(() => import ("./pages/user/About"))
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"))

const UserRoutes = () =>{
  return (
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={<LazyHome />}/>} />
      <Route path="/about" element={<LazyLayout component={<LazyAbout />}/>} />
    </Routes>
    </UserLayout>
  )
}

const AdminRoutes = () =>{  
  return(
    <AdminLayout>
    <Routes>
      <Route path="/dashboard" element={<LazyLayout component={<LazyDashboard />} />}></Route>
    </Routes>
    </AdminLayout>
  )
}

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Navigate to="/my-project/login" />} />
        <Route path="/my-project/login" element={<LazyLayout component={LazyLogin} />} />
        <Route path="/my-project/signup" element={<LazyLayout component={LazySignup} />} />
        <Route path="/my-project/user/*" element={<UserRoutes />}/>
        <Route path="/my-project/admin/*" element={<AdminRoutes />}/>
    </Routes>
  )
}


export default App;*/


import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/auth/login'; // Correcting the import path
import Signup from './pages/auth/signup'; // Correcting the import path
import Enrollment from './pages/user/enrollment'; // Assuming Enrollment page exists in a separate directory
import Welcome from './pages/user/Welcome';
import Profile from './pages/user/Profile';
import About from './pages/user/About';
import Home from './pages/user/Home'; 
import Courses from './pages/user/Courses';// Importing the Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="Home" element={<Home />} /> 
          <Route path="Courses" element={<Courses/>}/>
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="enrollment" element={<Enrollment />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


