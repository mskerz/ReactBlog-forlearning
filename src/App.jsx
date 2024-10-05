import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NotFoundPage from "./pages/Nopage/NotFoundPage";
import Admin_Login from "./pages/admin/adminLogin/Admin_Login";
import { Toaster } from "react-hot-toast";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createBlog/createBlog";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<Admin_Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  )
}

export default App