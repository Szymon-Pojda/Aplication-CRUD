import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFoundPage";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import Home from "./components/pages/Home";
import SinglePost from "./components/pages/SinglePost";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer"

const App = () => {
  return (
    <Container>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post/:id" element={<SinglePost />} />
    <Route path="/post/add" element={<PostAdd />} />
    <Route path="/post/edit/:id" element={<PostEdit />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</Container>
  );
};

export default App;
